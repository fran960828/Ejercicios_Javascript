/**
 * events-examples.js
 * ------------------
 * Archivo de ejemplos de eventos en JavaScript.
 *
 * Instrucciones:
 * - Guarda este archivo como "js/events-examples.js".
 * - Enlázalo en tu HTML (por ejemplo reemplaza <script src="js/app.js"></script>
 *   por <script src="js/events-examples.js"></script> justo antes de </body>).
 *
 * Contenido:
 * - Comentarios explicativos (en español) sobre cada tipo de evento.
 * - Ejemplos ejecutables para: formularios, ratón, teclado, arrastrar/soltar,
 *   multimedia, focus/blur, touch, resize/scroll, custom events, delegación,
 *   options de addEventListener y buenas prácticas.
 *
 * Nota:
 * - El script crea un pequeño panel de estado en la esquina para visualizar
 *   las interacciones sin recargar la página.
 * - Todos los selectores usan comprobaciones (if (el) ...) para evitar errores
 *   si el HTML se modifica.
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------
   * UTILIDADES Y PANEL DE LOG
   * --------------------------- */
  // Pequeño panel para mostrar mensajes de ejemplo en pantalla (útil con Go Live).
  const createLogPanel = () => {
    const panel = document.createElement("aside");
    panel.id = "events-demo-panel";
    panel.style.position = "fixed";
    panel.style.right = "12px";
    panel.style.bottom = "12px";
    panel.style.width = "320px";
    panel.style.maxHeight = "50vh";
    panel.style.overflowY = "auto";
    panel.style.background = "rgba(0,0,0,0.75)";
    panel.style.color = "#fff";
    panel.style.fontFamily = "system-ui, sans-serif";
    panel.style.fontSize = "12px";
    panel.style.padding = "10px";
    panel.style.borderRadius = "8px";
    panel.style.zIndex = "99999";
    panel.style.boxShadow = "0 6px 18px rgba(0,0,0,0.35)";
    panel.innerHTML = `
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;">
          <strong style="flex:1">Eventos — demo</strong>
          <button id="events-demo-clear" title="Limpiar" style="background:#fff;border:0;padding:4px 8px;border-radius:4px;cursor:pointer">Clear</button>
        </div>
        <div id="events-demo-messages"></div>
      `;
    document.body.appendChild(panel);

    const messages = panel.querySelector("#events-demo-messages");
    const btnClear = panel.querySelector("#events-demo-clear");
    btnClear.addEventListener("click", () => (messages.innerHTML = ""));

    return {
      log: (txt) => {
        const el = document.createElement("div");
        el.style.marginBottom = "6px";
        el.textContent = `[${new Date().toLocaleTimeString()}] ${txt}`;
        messages.prepend(el);
        console.log("[events-demo]", txt);
      },
      panel,
    };
  };

  const logger = createLogPanel();

  /* -----------------------------------------------------------
   * 1) EJEMPLOS CON FORMULARIOS
   * -----------------------------------------------------------
   * Eventos clave:
   *  - 'submit': se dispara cuando se envía el formulario.
   *  - 'input': detecta cambios mientras el usuario escribe.
   *  - 'change': detecta cambios al perder el foco (útil para selects/checkboxes).
   *  - 'invalid': se dispara cuando un control no pasa la validación HTML5.
   *
   * Buenas prácticas:
   *  - usar event.preventDefault() para gestionar el envío por JS.
   *  - validar con checkValidity() o reportValidity().
   */
  const form = document.querySelector("main form");
  const emailInput = document.querySelector("#mail");

  if (form && emailInput) {
    // input: validación y feedback en tiempo real
    emailInput.addEventListener(
      "input",
      (e) => {
        const val = e.target.value.trim();
        // Ejemplo simple: mostrar longitud y si cumple con formato básico
        logger.log(`input: email="${val}" (${val.length} caracteres)`);
        // mostrar validez nativa en el panel
        if (e.target.checkValidity()) {
          // si es válido, remover custom message
          e.target.setCustomValidity("");
        }
      },
      { passive: true }
    );

    // change: ocurre cuando el control pierde el foco si su valor cambió
    emailInput.addEventListener("change", (e) => {
      logger.log(`change: el email final es "${e.target.value.trim()}"`);
    });

    // invalid: cuando el control no es válido al intentar enviar
    emailInput.addEventListener("invalid", (e) => {
      logger.log('invalid: el email no cumple el formato HTML5 (type="email")');
      // podemos mostrar un mensaje personalizado:
      e.target.setCustomValidity(
        "Introduce una dirección de correo válida (ej: usuario@dominio.com)"
      );
      // reportValidity() mostraría el mensaje nativo; aquí no lo llamamos para no molestar UX.
    });

    // submit: prevenir envío por defecto y manejar por JS
    const handleSubmit = (e) => {
      e.preventDefault(); // evita recarga / envío real (útil en demos)
      // comprobar validez
      if (!emailInput.checkValidity()) {
        // muestra la UI nativa de error
        emailInput.reportValidity();
        logger.log("submit: formulario inválido, se mostró reporte de validez");
        return;
      }
      const datos = {
        email: emailInput.value.trim(),
        timestamp: new Date().toISOString(),
      };
      logger.log(`submit: datos preparados -> ${JSON.stringify(datos)}`);
      // Ejemplo: emitir custom event con los datos
      const envioEvent = new CustomEvent("formulario:enviado", {
        detail: datos,
      });
      form.dispatchEvent(envioEvent);
    };

    // Añadimos listener normal y otro con { once: true } para demostrar la opción
    form.addEventListener("submit", handleSubmit);
    form.addEventListener(
      "submit",
      () =>
        logger.log(
          "submit-handler registrado con { once: true } (se ejecutará solo la primera vez)"
        ),
      { once: true }
    );
    // Listener del custom event para demostrar CustomEvent
    form.addEventListener("formulario:enviado", (ev) => {
      logger.log(
        `CustomEvent recibido: formulario:enviado -> ${JSON.stringify(
          ev.detail
        )}`
      );
    });
  } else {
    logger.log(
      "Formulario o input #mail no encontrados — los ejemplos de formulario están inactivos."
    );
  }

  /* -----------------------------------------------------------
   * 2) EVENTOS DEL RATÓN (mouse)
   * -----------------------------------------------------------
   * Eventos clave:
   *  - 'click', 'dblclick' : interacción principal.
   *  - 'mousemove' : movimiento del ratón (cuidado con rendimiento).
   *  - 'mouseover' / 'mouseout' (burbujeo vs relatedTarget).
   *  - 'contextmenu' : menú contextual (puede prevenirse).
   *
   * Técnicas:
   *  - Delegación de eventos: colocar listener en un padre y detectar target.
   */
  // Delegación en el menú de navegación
  const menuList = document.querySelector(".menu__list");
  if (menuList) {
    // Hacemos que elementos del menú sean focuseables desde teclado (accesibilidad)
    Array.from(menuList.querySelectorAll(".menu__item")).forEach((li) => {
      if (!li.hasAttribute("tabindex")) li.setAttribute("tabindex", "0");
    });

    // Delegamos clicks en <ul> para no añadir un handler por cada <li>.
    const menuClickHandler = (e) => {
      const item = e.target.closest(".menu__item");
      if (!item || !menuList.contains(item)) return;
      logger.log(`menu click: "${item.textContent.trim()}" (delegación)`);
      // ejemplo de stopPropagation: evitamos que un click en el menú suba
      // a otros handlers que puedan estar en header/main.
      // e.stopPropagation(); // comentar/descomentar para ver efecto
    };
    menuList.addEventListener("click", menuClickHandler);

    // Soporte de teclado: activar item con Enter o Space
    const menuKeyHandler = (e) => {
      const item = e.target.closest(".menu__item");
      if (!item) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        // Simular acción de click
        item.click();
        logger.log(
          `menu key activation: "${item.textContent.trim()}" (tecla: ${e.key})`
        );
      }
    };
    menuList.addEventListener("keydown", menuKeyHandler);
  }

  // Doble click en los artículos hero para 'destacar' (toggle)
  const heroArticles = document.querySelectorAll(".hero__articulo");
  heroArticles.forEach((art) => {
    art.addEventListener("dblclick", (e) => {
      art.classList.toggle("highlighted");
      logger.log(
        `dblclick: toggled highlighted en artículo -> "${
          art.querySelector("h3")?.textContent || "artículo"
        }"`
      );
    });
  });

  // mousemove controlado: mostramos coordenadas con requestAnimationFrame para no saturar.
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    let raf = null;
    let lastMouse = { x: 0, y: 0 };
    const mouseMoveHandler = (e) => {
      lastMouse = { x: Math.round(e.clientX), y: Math.round(e.clientY) };
      if (!raf) {
        raf = requestAnimationFrame(() => {
          logger.log(`mousemove: x=${lastMouse.x}, y=${lastMouse.y}`);
          raf = null;
        });
      }
    };
    heroSection.addEventListener("mousemove", mouseMoveHandler);
  }

  // contextmenu en tabla: prevenir menú y mostrar acción personalizada
  const table = document.querySelector("table");
  if (table) {
    table.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      const cell = e.target.closest("td,th");
      if (cell) {
        logger.log(
          `contextmenu personalizado en celda: "${cell.textContent.trim()}"`
        );
      } else {
        logger.log("contextmenu en tabla (sin celda)");
      }
    });
  }

  /* -----------------------------------------------------------
   * 3) EVENTOS DE TECLADO
   * -----------------------------------------------------------
   * Eventos clave:
   *  - 'keydown' (se dispara cuando la tecla baja) — más usado.
   *  - 'keyup' (cuando se suelta).
   *  - 'keypress' (obsoleto/deprecated para la mayoría de usos).
   *
   * Consideraciones:
   *  - usar event.key (legible) en lugar de keyCode.
   *  - tener en cuenta accesibilidad (no interferir con atajos del sistema).
   */
  const globalKeyDown = (e) => {
    if (e.key === "Escape") {
      logger.log("keydown: Escape (cerrar modales / cancelar acciones)");
    } else if (e.key === "F1") {
      // impedir acción por defecto (abrir ayuda del navegador) - solo en demos
      e.preventDefault();
      logger.log(
        "keydown: F1 -> Prevención de la acción por defecto (ejemplo)"
      );
    } else {
      // uso general, no demasiado verboso (solo mostramos teclas con modificadores)
      if (e.ctrlKey || e.altKey || e.metaKey) {
        logger.log(
          `keydown: combinación detectada -> key="${e.key}" ctrl=${e.ctrlKey} alt=${e.altKey} meta=${e.metaKey}`
        );
      }
    }
  };
  window.addEventListener("keydown", globalKeyDown);

  /* -----------------------------------------------------------
   * 4) ARRRASTRAR Y SOLTAR (Drag & Drop API)
   * -----------------------------------------------------------
   * Eventos clave:
   *  - 'dragstart' en elemento arrastrable (establecer dataTransfer).
   *  - 'dragover' en zona de destino (preventDefault para permitir drop).
   *  - 'drop' en zona de destino (leer dataTransfer).
   *  - 'dragend' para limpiar estilos.
   *
   * Nota: No requiere elementos previos en tu HTML — los creamos aquí para demo.
   */
  const createDragDemo = () => {
    const demoWrap = document.createElement("section");
    demoWrap.style.margin = "18px 12px";
    demoWrap.innerHTML = `
        <h4>Demo Drag & Drop</h4>
        <div id="drag-demo" style="display:flex;gap:12px;align-items:flex-start;">
          <div id="drag-items" style="min-width:140px;padding:8px;border:1px dashed #aaa;border-radius:6px;">
            <strong>Arrastrables</strong>
          </div>
          <div id="drop-zone" style="flex:1;min-height:80px;padding:12px;border:2px dashed #2b8;padding:8px;border-radius:6px;background:#f7fff7;">
            Suelta aquí
          </div>
        </div>
      `;
    const main = document.querySelector("main") || document.body;
    main.appendChild(demoWrap);

    const items = document.getElementById("drag-items");
    const drop = document.getElementById("drop-zone");

    // crear 3 elementos drag
    for (let i = 1; i <= 3; i++) {
      const it = document.createElement("div");
      it.textContent = `Item ${i}`;
      it.draggable = true;
      it.style.padding = "6px 8px";
      it.style.margin = "8px 0";
      it.style.background = "#fff";
      it.style.border = "1px solid #ccc";
      it.style.borderRadius = "4px";
      it.dataset.id = `item-${i}`;

      it.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", it.dataset.id);
        e.dataTransfer.effectAllowed = "move";
        it.classList.add("dragging");
        logger.log(`dragstart: ${it.dataset.id}`);
      });

      it.addEventListener("dragend", (e) => {
        it.classList.remove("dragging");
        logger.log(`dragend: ${it.dataset.id}`);
      });

      items.appendChild(it);
    }

    drop.addEventListener(
      "dragover",
      (e) => {
        // sin esto, drop no funcionará
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        drop.style.background = "#e6fff0";
      },
      { passive: false }
    );

    drop.addEventListener("dragleave", () => {
      drop.style.background = "#f7fff7";
    });

    drop.addEventListener("drop", (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData("text/plain");
      const dragged = document.querySelector(`[data-id="${id}"]`);
      if (dragged) {
        drop.appendChild(dragged);
        logger.log(`drop: elemento "${id}" movido a la zona de destino`);
      } else {
        logger.log("drop: no se encontró el elemento arrastrado");
      }
      drop.style.background = "#f7fff7";
    });
  };

  createDragDemo();

  /* -----------------------------------------------------------
   * 5) REPRODUCCIÓN MULTIMEDIA (media events)
   * -----------------------------------------------------------
   * Eventos clave:
   *  - 'play', 'pause' : reproducción y pausa.
   *  - 'timeupdate': periodo durante reproducción (se dispara frecuentemente).
   *  - 'ended': cuando finaliza.
   *  - 'volumechange': cambio de volumen/silencio.
   *
   * Nota: Creamos un <video> con fuente pública para probar en vivo.
   */
  const createMediaDemo = () => {
    const container = document.createElement("section");
    container.style.margin = "18px 12px";
    container.innerHTML = `
        <h4>Demo Multimedia</h4>
        <video id="demo-video" controls style="max-width:100%;display:block;border:1px solid #ddd;border-radius:6px;">
          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">
          Tu navegador no soporta video.
        </video>
        <div style="margin-top:6px;font-size:12px;color:#666;">Fuente de ejemplo: MDN (video público)</div>
      `;
    const main = document.querySelector("main") || document.body;
    main.appendChild(container);

    const video = document.getElementById("demo-video");
    if (!video) return;

    video.addEventListener("play", () => logger.log("video: play"));
    video.addEventListener("pause", () => logger.log("video: pause"));
    video.addEventListener("timeupdate", () => {
      // mostramos el tiempo de reproducción actual (cada vez que el navegador actualiza)
      logger.log(`video: timeupdate -> ${Math.round(video.currentTime)}s`);
    });
    video.addEventListener("ended", () => logger.log("video: ended"));
    video.addEventListener("volumechange", () =>
      logger.log(
        `video: volumechange -> volume=${video.volume.toFixed(2)}, muted=${
          video.muted
        }`
      )
    );
  };

  createMediaDemo();

  /* -----------------------------------------------------------
   * 6) FOCUS / BLUR (y accesibilidad)
   * -----------------------------------------------------------
   * Eventos clave:
   *  - 'focus', 'blur' (no burbujean; usar focusin/focusout si quieres burbujeo).
   *  - 'focusin', 'focusout' sí burbujean.
   */
  if (emailInput) {
    emailInput.addEventListener("focus", () =>
      logger.log("focus: input #mail enfocado")
    );
    emailInput.addEventListener("blur", () =>
      logger.log("blur: input #mail pierde foco")
    );
    // focusin (burbujeante)
    emailInput.addEventListener("focusin", () =>
      logger.log("focusin: (burbujea)")
    );
  }

  /* -----------------------------------------------------------
   * 7) TOUCH EVENTS (dispositivos táctiles)
   * -----------------------------------------------------------
   * Eventos:
   *  - 'touchstart', 'touchmove', 'touchend'
   *
   * Nota: Solo se activarán en dispositivos táctiles.
   */
  const hero = document.querySelector(".hero");
  if ("ontouchstart" in window && hero) {
    hero.addEventListener(
      "touchstart",
      (e) => {
        logger.log(`touchstart: ${e.touches.length} punto(s) de contacto`);
      },
      { passive: true }
    );
    hero.addEventListener("touchend", () => logger.log("touchend"));
  } else {
    logger.log("touch events: no disponibles (o dispositivo no táctil) — OK");
  }

  /* -----------------------------------------------------------
   * 8) WINDOW RESIZE y SCROLL
   * -----------------------------------------------------------
   * Eventos:
   *  - 'resize': tamaño del viewport ha cambiado.
   *  - 'scroll': desplazamiento (usar { passive: true } para mejorar rendimiento).
   */
  let lastResize = 0;
  window.addEventListener("resize", () => {
    // Debounce sencillo
    const now = Date.now();
    if (now - lastResize > 300) {
      lastResize = now;
      logger.log(`resize: ${window.innerWidth}x${window.innerHeight}`);
    }
  });

  let lastScroll = 0;
  window.addEventListener(
    "scroll",
    () => {
      // registro leve, sin spameo — solo cada 500ms
      const now = Date.now();
      if (now - lastScroll > 500) {
        lastScroll = now;
        logger.log(`scroll: Y=${window.scrollY}`);
      }
    },
    { passive: true }
  );

  /* -----------------------------------------------------------
   * 9) Custom Events (ejemplo práctico)
   * -----------------------------------------------------------
   * Crear / escuchar eventos personalizados con CustomEvent.
   */
  // escuchador global de un evento personalizado
  window.addEventListener("usuario:logueado", (e) => {
    logger.log(
      `CustomEvent global: usuario:logueado -> ${JSON.stringify(e.detail)}`
    );
  });

  // Dispatch (simulación) — podría venir de una respuesta XHR/fetch
  setTimeout(() => {
    const user = { id: 42, name: "Francisco", role: "Asesor" };
    window.dispatchEvent(new CustomEvent("usuario:logueado", { detail: user }));
  }, 1500);

  /* -----------------------------------------------------------
   * 10) OPCIONES DE addEventListener: once, capture, passive
   * -----------------------------------------------------------
   * - once: el listener se ejecuta solo la primera vez.
   * - capture: recibe el evento en la fase de captura (antes del burbujeo).
   * - passive: indica que el listener no llamará preventDefault (mejora scroll).
   */
  const onceBtn = document.createElement("button");
  onceBtn.textContent = "Click una vez (once)";
  onceBtn.style.margin = "12px";
  onceBtn.style.padding = "6px 10px";
  onceBtn.style.borderRadius = "6px";
  onceBtn.style.border = "1px solid #ccc";
  document.body.appendChild(onceBtn);

  onceBtn.addEventListener("click", () =>
    logger.log("click normal en botón (sin once)")
  );
  onceBtn.addEventListener(
    "click",
    () => logger.log("click con { once: true } (solo la primera vez)"),
    { once: true }
  );

  /* -----------------------------------------------------------
   * 11) ELIMINAR LISTENERS Y PREVENIR MEMORY LEAKS
   * -----------------------------------------------------------
   * - guarda referencia a la función si luego quieres quitarla con removeEventListener.
   */
  const removableListener = (e) =>
    logger.log("listener removible: window click detectado");
  window.addEventListener("click", removableListener);
  // Ejemplo: quitarlo después de 10 segundos
  setTimeout(() => {
    window.removeEventListener("click", removableListener);
    logger.log(
      'removeEventListener: se eliminó "removableListener" de window.click'
    );
  }, 10000);

  /* -----------------------------------------------------------
   * 12) EJEMPLO DE DELEGACIÓN Y FILTRADO AVANZADO
   * -----------------------------------------------------------
   * - útil para listas dinámicas (añadir/eliminar elementos sin volver a enganchar eventos).
   */
  // Listener de ejemplo en main que escucha clicks en elementos con data-action
  const main = document.querySelector("main");
  if (main) {
    main.addEventListener("click", (e) => {
      const actionEl = e.target.closest("[data-action]");
      if (!actionEl) return;
      const action = actionEl.dataset.action;
      logger.log(`delegación main: acción detectada -> ${action}`);
      // ejemplo de stopPropagation en caso de que queramos evitar que el click suba más
      // e.stopPropagation();
    });
  }

  /* -----------------------------------------------------------
   * 13) NOTAS FINALES, ACCESIBILIDAD Y COMPATIBILIDAD
   * -----------------------------------------------------------
   * - Usar addEventListener en vez de on* (mejor compatibilidad y composición).
   * - Preferir event.key en teclas por legibilidad (no keyCode).
   * - Para producción: usar debounce/throttle, limpiar listeners y respetar
   *   comportamientos esperados del usuario (no bloquear atajos útiles).
   * - Añadir atributos ARIA cuando sea necesario y asegurar navegación con teclado.
   */
  logger.log(
    "Inicialización completada — ejemplos cargados (revisa el panel)."
  );

  /* -----------------------------------------------------------
   * END: helpers para desarrollo
   * ----------------------------------------------------------- */
  // Exponer logger en window para pruebas desde consola
  window.__eventsDemo = {
    log: logger.log,
  };
});
