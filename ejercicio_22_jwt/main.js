// ------------------------------------------------------
// ¿Qué pasa con fetch, CORS y credentials: 'include'?
// ------------------------------------------------------
//
// 1. El servidor (DummyJSON) responde con:
//    Access-Control-Allow-Origin: *
//    -> Esto significa: "Dejo entrar a cualquiera".
//
// 2. Si hacemos un fetch normal (sin credentials: 'include'):
//    - El navegador no manda cookies ni credenciales.
//    - Como no hay nada privado en juego, el navegador acepta el '*'
//      y la petición funciona sin problema.
//
// 3. Si usamos credentials: 'include':
//    - Estamos diciendo: "Quiero llevar mi mochila con datos privados
//      (cookies, credenciales) en la petición".
//    - Por seguridad, el navegador ya no acepta que el servidor diga "*"
//      como origen permitido.
//    - El servidor tendría que decir el origen exacto:
//        Access-Control-Allow-Origin: http://127.0.0.1:5500
//        Access-Control-Allow-Credentials: true
//
// 4. Como DummyJSON NO hace eso, el navegador bloquea la petición
//    antes de enviarla (error CORS).
//
// ------------------------------------------------------
// SOLUCIÓN EN ESTE CASO:
// ------------------------------------------------------
// - Quitar "credentials: 'include'".
// - DummyJSON devuelve el token directamente en la respuesta JSON,
//   no necesita cookies para autenticación.
// ------------------------------------------------------
/* providing accessToken in bearer */
// main.js

const loginData = {
  username: "emilys",
  password: "emilyspass",
  expiresInMins: 30,
};
let accessToken = null;
let refreshToken = null;

async function login() {
  try {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    if (!res.ok) {
      throw new Error("Error en el login");
    }
    const data = await res.json();
    console.log(`login:`, data);
    accessToken = data.accessToken;
    refreshToken = data.refreshToken;

    await getProfile();
  } catch (err) {
    console.error("❌ Error en login:", err);
  }
}

async function getProfile() {
  try {
    const res = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: { Authorization: "Bearer " + accessToken },
    });
    if (!res.ok) {
      throw new Error("Error en el get");
    }
    const data = await res.json();
    console.log(`profile:`, data);
  } catch (err) {
    console.error("❌ Error obteniendo perfil:", err);
  }
}

async function refresh() {
  try {
    const res = await fetch("https://dummyjson.com/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refreshToken: refreshToken,
        expiresInMins: 30,
      }),
    });
    if (!res.ok) {
      throw new Error("Error al refrescar la página");
    }
    const data = await res.json();
    accessToken = data.accessToken;

    await getProfile();
  } catch (err) {
    console.error("❌ Error refrescando token:", err);
  }
}

(async () => {
  await login();

  setTimeout(() => {
    refresh();
  }, 5000);
})();
