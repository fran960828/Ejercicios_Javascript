# Documentación práctica (para principiantes → nivel profesional)
**Tema:** Cookies, `localStorage` y `sessionStorage` en JavaScript  
**Idioma:** Español  
**Objetivo:** Explicación detallada, buenas prácticas y ejemplos incrementales (con comentarios en cada paso) que puedas copiar/pegar y probar en un navegador o en un servidor mínimo.

---

## Índice rápido
1. [Visión general y diferencias](#visión-general-y-diferencias)  
2. [Cookies (teoría + ejemplos)](#cookies-teoría--ejemplos)  
   - ¿Qué son y cuándo usarlas?  
   - Atributos importantes (`Expires`/`Max-Age`, `Path`, `Domain`, `Secure`, `SameSite`, `HttpOnly`)  
   - Helpers y ejemplos (básico → avanzado)  
   - Ejemplo servidor (Express) para `HttpOnly`  
3. [`localStorage` (teoría + ejemplos)](#localstorage-teoría--ejemplos)  
   - ¿Qué es, límites y buenas prácticas?  
   - Helpers, JSON, versión/namespace, fallback, sincronización entre pestañas  
4. [`sessionStorage` (teoría + ejemplos)](#sessionstorage-teoría--ejemplos)  
   - Uso típico y ejemplos incrementales  
5. [Comparativa rápida y recomendaciones profesionales](#comparativa-rápida-y-recomendaciones-profesionales)  
6. [Errores comunes y cómo depurar / probar](#errores-comunes-y-cómo-depurar--probar)  
7. [Apéndice — funciones útiles (cheat-sheet)](#apéndice--funciones-útiles-cheat-sheet)

---

# Visión general y diferencias
- **Cookies**: pequeñas piezas de texto enviadas con cada petición HTTP al dominio que las creó (si los atributos lo permiten). Se usan frecuentemente para autenticación, preferencias, y tracking. Pueden tener atributos de seguridad (Secure, HttpOnly, SameSite). **Señal importante:** *las cookies con HttpOnly no son accesibles desde JavaScript*.
- **localStorage**: almacenamiento clave/valor (solo strings) por origen (scheme+host+port). Persistente entre sesiones (cierres y reaperturas del navegador). Límite típicamente **≈ 5 MB** por origen (varía por navegador). Es síncrono (puede bloquear) y no se envía al servidor.
- **sessionStorage**: parecido a `localStorage`, pero limitado a la **ventana/pestaña** y se borra al cerrar esa pestaña/ventana. No se comparte entre pestañas.

---

# Cookies — teoría y ejemplos

## ¿Qué necesitas saber (resumen profesional)?
- **Tamaño**: cada cookie es pequeña (aprox. 4KB), no la uses para almacenar grandes cantidades de datos.
- **Seguridad**:
  - `HttpOnly`: evita acceso por JS → **obligatorio para tokens de sesión** (lo configura el servidor).
  - `Secure`: solo sobre HTTPS.
  - `SameSite` (Strict/Lax/None): ayuda a mitigar CSRF; `None` requiere `Secure`.
- **Codificación**: usa `encodeURIComponent` / `decodeURIComponent` para valores que contengan `;` `=` espacios u otros caracteres.
- **Visibilidad**: `document.cookie` solo muestra cookies accesibles en el contexto actual (no HttpOnly).
- **Path/Domain**: controlan el alcance de envío de la cookie al servidor.

---

## Helper: funciones para cookies (básico → robusto)

```javascript
// setCookie: guarda una cookie con opciones comunes.
// name, value: strings
// options: { path, domain, maxAge (s), expires (Date), secure (bool), sameSite: 'Lax'|'Strict'|'None' }
function setCookie(name, value, options = {}) {
  const encodedName = encodeURIComponent(name);
  const encodedValue = encodeURIComponent(value);

  let cookieStr = `${encodedName}=${encodedValue}`;

  if (options.expires instanceof Date) {
    cookieStr += `; Expires=${options.expires.toUTCString()}`;
  }
  if (typeof options.maxAge === 'number') {
    cookieStr += `; Max-Age=${Math.floor(options.maxAge)}`;
  }
  cookieStr += `; Path=${options.path || '/'}`;
  if (options.domain) cookieStr += `; Domain=${options.domain}`;
  if (options.secure) cookieStr += `; Secure`;
  if (options.sameSite) cookieStr += `; SameSite=${options.sameSite}`;

  document.cookie = cookieStr;
}

function getCookie(name) {
  const encodedName = encodeURIComponent(name) + "=";
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(encodedName) === 0) {
      const raw = cookie.substring(encodedName.length);
      return decodeURIComponent(raw);
    }
  }
  return null;
}

function deleteCookie(name, options = {}) {
  setCookie(name, '', { ...options, expires: new Date(0) });
}
```

### Ejemplo 1 — Crear / leer / borrar una cookie simple
```javascript
setCookie('miNombre', 'María', { maxAge: 60 * 60 * 24 * 7 }); // 7 días
console.log('miNombre =>', getCookie('miNombre')); // "María"
deleteCookie('miNombre');
console.log('miNombre tras borrar =>', getCookie('miNombre')); // null
```

### Ejemplo 2 — Cookie con opciones de seguridad
```javascript
setCookie('lang', 'es-ES', {
  maxAge: 60 * 60 * 24 * 365,
  secure: true,
  sameSite: 'Lax',
  path: '/'
});
```

### Ejemplo 3 — Banner de consentimiento
```html
<div id="cookie-banner" style="position:fixed;bottom:8px;left:8px;right:8px;padding:12px;background:#111;color:#fff;">
  Usamos cookies. <button id="accept-cookies">Aceptar</button>
</div>

<script>
  if (getCookie('cookie_consent') === 'yes') {
    document.getElementById('cookie-banner').style.display = 'none';
  }

  document.getElementById('accept-cookies').addEventListener('click', function() {
    setCookie('cookie_consent', 'yes', { maxAge: 60*60*24*365, secure: true, sameSite: 'Lax' });
    document.getElementById('cookie-banner').style.display = 'none';
  });
</script>
```

### Ejemplo servidor (Node.js + Express) — `HttpOnly`
```javascript
const express = require('express');
const app = express();

app.post('/login', (req, res) => {
  const token = createJwtForUser(req.body.userId); // ficticio
  res.cookie('session_token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
  res.json({ ok: true });
});

app.listen(3000);
```

---

# `localStorage` — teoría y ejemplos

## Resumen profesional
- API síncrona (`setItem/getItem`).
- Solo strings → usa JSON.
- Persistente entre sesiones y pestañas.
- Cuota ~5MB.
- Datos no sensibles.
- Para grandes volúmenes usa `IndexedDB`.

---

## Comprobación de disponibilidad
```javascript
function storageAvailable(type) {
  try {
    const storage = window[type];
    const testKey = '__storage_test__';
    storage.setItem(testKey, testKey);
    storage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}
```

## Ejemplo 1 — Guardar/leer/borrar
```javascript
localStorage.setItem('color', 'azul');
const color = localStorage.getItem('color'); // 'azul'
localStorage.removeItem('color');

const user = { id: 42, name: 'Carlos' };
localStorage.setItem('user', JSON.stringify(user));
let storedUser = JSON.parse(localStorage.getItem('user'));
```

## Ejemplo 2 — Wrapper robusto
```javascript
const LS = {
  setJSON(key, value) {
    try {
      const raw = JSON.stringify(value);
      localStorage.setItem(key, raw);
      return true;
    } catch (err) {
      console.error('Error al escribir', err);
      return false;
    }
  },
  getJSON(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      return null;
    }
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};

LS.setJSON('app:settings', { theme: 'dark', lang: 'es' });
```

## Ejemplo 3 — Sincronización entre pestañas
```javascript
function updateCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

window.addEventListener('storage', function(event) {
  if (event.key === 'cart') {
    const newCart = JSON.parse(event.newValue);
    console.log('Cart actualizado en otra pestaña', newCart);
  }
});
```

## Ejemplo 4 — BroadcastChannel
```javascript
const bc = new BroadcastChannel('app_channel');

function broadcastLogout() {
  bc.postMessage({ type: 'LOGOUT' });
}

bc.onmessage = (event) => {
  if (event.data.type === 'LOGOUT') {
    console.log('Recibido LOGOUT desde otra pestaña');
  }
};
```

## Ejemplo avanzado — Migración de esquema
```javascript
const APP_VERSION = 2;

function migrateIfNeeded() {
  const storedVersion = parseInt(localStorage.getItem('app:version') || '0', 10);
  if (storedVersion < APP_VERSION) {
    const oldUserRaw = localStorage.getItem('user');
    if (oldUserRaw) {
      const oldUser = JSON.parse(oldUserRaw);
      const newUser = {
        profile: { name: oldUser.name || '', id: oldUser.id || null },
        prefs: oldUser.prefs || {}
      };
      localStorage.setItem('user', JSON.stringify(newUser));
    }
    localStorage.setItem('app:version', String(APP_VERSION));
  }
}

migrateIfNeeded();
```

---

# `sessionStorage` — teoría y ejemplos

## Resumen
- API idéntica a `localStorage`.
- Datos se borran al cerrar pestaña.
- No se comparte entre pestañas.

---

## Ejemplo 1 — Guardar estado de formulario
```html
<form id="contact">
  <input id="name" name="name" />
  <textarea id="message" name="message"></textarea>
</form>

<script>
  const saved = sessionStorage.getItem('contact:draft');
  if (saved) {
    const draft = JSON.parse(saved);
    document.getElementById('name').value = draft.name;
    document.getElementById('message').value = draft.message;
  }

  function saveDraft() {
    const draft = {
      name: document.getElementById('name').value,
      message: document.getElementById('message').value,
      ts: Date.now()
    };
    sessionStorage.setItem('contact:draft', JSON.stringify(draft));
  }

  document.getElementById('name').addEventListener('input', saveDraft);
  document.getElementById('message').addEventListener('input', saveDraft);
</script>
```

## Ejemplo 2 — Identificador de pestaña
```javascript
function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

if (!sessionStorage.getItem('tab:id')) {
  sessionStorage.setItem('tab:id', uid());
}
console.log('ID pestaña:', sessionStorage.getItem('tab:id'));
```

---

# Comparativa rápida y recomendaciones profesionales

- **Tokens de autenticación:** usar cookies `HttpOnly` + `Secure` (+ `SameSite`).  
- **Preferencias UI:** `localStorage`.  
- **Borradores temporales por pestaña:** `sessionStorage`.  
- **Datos grandes:** `IndexedDB`.  
- **Performance:** cuidado, `localStorage/sessionStorage` son síncronos.  
- **Seguridad:** nunca guardar contraseñas; aplicar CSP; sanitizar entradas.  

---

# Errores comunes y cómo depurar / probar
- `localStorage` no disponible en incógnito.  
- `QuotaExceededError`: demasiado grande → limpiar o usar IndexedDB.  
- Cookies no visibles en `document.cookie`: son `HttpOnly`.  
- Cookie no enviada: revisa `SameSite` y `Secure`.  
- `storage` event no dispara en misma pestaña.  
- Problemas CORS con cookies: usar `credentials: 'include'`.

Ejemplo:
```javascript
fetch('/api/me', {
  method: 'GET',
  credentials: 'include'
});
```

---

# Apéndice — Funciones útiles (cheat-sheet)

```javascript
function byteSize(str) {
  return new Blob([str]).size;
}

function hasCookie(name) {
  return getCookie(name) !== null;
}

function clearAllLocalStorage() {
  localStorage.clear();
}

function safeParseJson(raw) {
  try { return JSON.parse(raw); } catch (_) { return null; }
}
```

---

# Notas finales y buenas prácticas
- **Nunca** almacenes contraseñas o secretos en `localStorage`/`sessionStorage`.  
- Usa **HttpOnly cookies** para sesiones.  
- Serializa con `JSON.stringify` y maneja errores.  
- Versiona datos y planifica migraciones.  
- Evita depender de almacenamiento en modos restringidos.  
- Para sincronización entre pestañas: `storage` event o `BroadcastChannel`.  
- Comprueba compatibilidad de navegadores.  
