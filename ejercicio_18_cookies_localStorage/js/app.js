// setCookie: guarda una cookie con opciones comunes.
// name, value: strings
// options: { path, domain, maxAge (s), expires (Date), secure (bool), sameSite: 'Lax'|'Strict'|'None' }
// function setCookie(name, value, options = {}) {
//   const encodedName = encodeURIComponent(name);
//   const encodedValue = encodeURIComponent(value);

//   let cookieStr = `${encodedName}=${encodedValue}`;

//   if (options.expires instanceof Date) {
//     cookieStr += `; Expires=${options.expires.toUTCString()}`;
//   }
//   if (typeof options.maxAge === "number") {
//     cookieStr += `; Max-Age=${Math.floor(options.maxAge)}`;
//   }
//   cookieStr += `; Path=${options.path || "/"}`;
//   if (options.domain) cookieStr += `; Domain=${options.domain}`;
//   if (options.secure) cookieStr += `; Secure`;
//   if (options.sameSite) cookieStr += `; SameSite=${options.sameSite}`;

//   document.cookie = cookieStr;
// }

// function getCookie(name) {
//   const encodedName = encodeURIComponent(name) + "=";
//   const cookies = document.cookie.split(";");
//   for (let cookie of cookies) {
//     cookie = cookie.trim();
//     if (cookie.indexOf(encodedName) === 0) {
//       const raw = cookie.substring(encodedName.length);
//       return decodeURIComponent(raw);
//     }
//   }
//   return null;
// }

// function deleteCookie(name, options = {}) {
//   setCookie(name, "", { ...options, expires: new Date(0) });
// }

// peticion = document.querySelector(".peticion");
// btns = document.querySelector(".buttons");
// btns.children[0].addEventListener("click", () => {
//   setCookie("aceptarTerminos", "yes", {
//     maxAge: 60,
//     secure: true,
//     sameSite: "Lax",
//     path: "/",
//   });
// });
// btns.children[1].addEventListener("click", () => {
//   setCookie("aceptarTerminos", "no", {
//     maxAge: 0,
//     secure: true,
//     sameSite: "Lax",
//     path: "/",
//   });
// });
// if (getCookie("aceptarTerminos") === "yes") {
//   peticion.style.display = "none";
//   console.log("Desaparece cuadro de dialogo");
// }

const textarea = document.getElementById("comment");

// 1. Al cargar la página, recuperamos lo guardado
textarea.value = localStorage.getItem("comment") || "";

// 2. Cada vez que el usuario escriba algo, lo guardamos
textarea.addEventListener("input", () => {
  localStorage.setItem("comment", textarea.value);
  console.log("Comentario guardado:", textarea.value); // 👀 para ver en consola
});
