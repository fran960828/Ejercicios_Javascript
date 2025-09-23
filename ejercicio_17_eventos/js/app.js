// /*
// 1. Crea una página HTML con un contenedor de una imagen. Debes tener preparadas diez
// imágenes y en función de la tecla numérica que se pulse (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
// debe aparecer esa imagen en el contenedor. Cuando se pulse otro número, debe vaciarse el contenedor
// y cargarse de nuevo su imagen correspondiente.
// */
// contenedorImagenes = document.querySelector("div.imagenes");
// imagenes = document.querySelectorAll(".imagenes__item");
// function ocultarImagenes(imagenes) {
//   imagenes.forEach((element) => {
//     element.style.display = "none";
//   });
// }

// document.body.addEventListener("keydown", (event) => {
//   indexImage = parseInt(event.key);
//   ocultarImagenes(imagenes);
//   if (indexImage >= 0 && indexImage < 10) {
//     imagenes[indexImage].style.display = "inline-block";
//   }
// });
// /*
// 2. Crea una aplicación cuyo código HTML contenga únicamente una caja roja. Cada vez que
// el usuario pulse algunas de las teclas de los cursores (flecha arriba, flecha abajo, flecha
// a derecha, flecha a izquierda) la caja debe desplazarse 10 px en la dirección establecida por el cursor.
// */
// cajaRoja = document.querySelector("div.caja");
// let x = 0;
// let y = 0;
// document.body.addEventListener("keydown", (event) => {
//   switch (event.key) {
//     case "ArrowUp":
//       y -= 10;
//       break;
//     case "ArrowDown":
//       y += 10;
//       break;
//     case "ArrowLeft":
//       x -= 10;
//       break;
//     case "ArrowRight":
//       x += 10;
//       break;
//   }
//   cajaRoja.style.transform = `translate(${x}px, ${y}px)`;
// });
// /*
// 3. Escribe un programa que permita ordenar los elementos de una lista desordenada.
//  Cada elemento debe tener un aspa en su extremo derecho para poder ser eliminado. Además, al final habrá un botón para añadir un elemento.
//  El texto del nuevo elemento se le debe pedir al usuario por teclado.*/

// const divPadre = document.querySelector("div.lista");
// const botonAñadir = document.querySelector(".add");

// botonAñadir.addEventListener("click", () => {
//   const nuevoLi = document.createElement("li");
//   nuevoLi.innerHTML =
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. <button class="eliminar">X</button>';
//   divPadre.append(nuevoLi);
// });

// // Delegación: escuchamos clics en el contenedor
// divPadre.addEventListener("click", (evento) => {
//   // el if nos permite que aunque hagamos clic en cualquier lugar del div solo al darle al boton elimine la lista
//   if (evento.target.classList.contains("eliminar")) {
//     evento.target.parentElement.remove();
//   }
// });

/*
4. Elabora un programa que vaya rellenando un párrafo de forma dinámica con 
todas las le- tras que vaya pulsando el usuario sobre cualquier elemento
de la página. Al final del párrafo debes incluir un botón para limpiar 
el contenido del párrafo.
*/
// parrafoDinamico = document.querySelector(".dinamico");
// btnLimpiar = document.querySelector(".clear");
// document.body.addEventListener("keydown", (event) => {
//   if (event.key.length === 1) {
//     parrafoDinamico.append(event.key);
//   } else if (event.key === "Enter") {
//     parrafoDinamico.append("\n");
//   }
// });

// btnLimpiar.addEventListener("click", () => {
//   parrafoDinamico.textContent = "";
// });
/*
Crea una rutina que no permita que el ratón se coloque encima de una caja azul
 de 100 x 100 px. Cada vez que el ratón intente colocarse encima, 
 la posición de la caja debe cam- biar aleatoriamente por la página.
*/
//function moverAleatoriamente(caja) {
//  const maxX = window.innerWidth - caja.offsetWidth;
//  const maxY = window.innerHeight - caja.offsetHeight;
//
//  const x = Math.random() * maxX;
//  const y = Math.random() * maxY;
//
//  caja.style.left = x + "px";
//  caja.style.top = y + "px";
//}
//caja = document.querySelector(".aleatorio");
//caja.addEventListener("mouseenter", (event) => {
//  moverAleatoriamente(event.currentTarget);
//});
/*
6. Crea una aplicación que contenga un párrafo con mucho texto.
 Debajo del párrafo debe aparecer un botón por cada vocal. 
 Al pulsar sobre una vocal, esa vocal desaparecerá del texto.
*/
//const parrafoLargo = document.querySelector('.parrafo');
//
//// Seleccionamos todos los botones de vocales
//const botones = document.querySelectorAll('#a, #e, #i, #o, #u');
//
//// Función que elimina la vocal pasada como parámetro
//function eliminarVocal(vocal) {
//  const regex = new RegExp(vocal, 'gi'); // 'g' = global, 'i' = case insensitive
//  parrafoLargo.textContent = parrafoLargo.textContent.replace(regex, '');
//}
//
//// Asignamos el mismo listener a cada botón
//botones.forEach(boton => {
//  boton.addEventListener('click', () => {
//    eliminarVocal(boton.id); // el id del botón coincide con la vocal
//  });
//});
/*
7. Escribe un programa para simular la velocidad de pulsación de dos teclas. En pantalla
aparecerán dos cajas, una verde y otra roja, una debajo de otra. El alto de cada caja será de 40 px y 
el ancho inicial de 10 px cada una. La primera caja incrementará su ancho 5px cada vez que se pulse la tecla [a].
 La segunda caja hará lo mismo cuando se pulse la tecla [ñ]. El juego termina cuando una de las cajas llega a 500 px de ancho.
  En ese momento deben desactivarse los eventos de ambas teclas y mostrarse un mensaje 
  bajo las cajas que ponga «GANA VERDE» • «GANA ROJO». Se trata de calcular con qué mano eres capaz de realizar 
  más pulsaciones.
  */
//cajaVerde=document.querySelector('.greenbox')
//cajaRoja=document.querySelector('.redbox')
//
//function aumentarAncho(event){
//    let anchoVerde=parseInt(getComputedStyle(cajaVerde).width);
//    let anchoRoja=parseInt(getComputedStyle(cajaRoja).width);
//    if(event.key==='a'){
//        anchoVerde+=5;
//        cajaVerde.style.width=anchoVerde+'px'
//    }else if(event.key==='ñ'){
//        anchoRoja+=5;
//        cajaRoja.style.width=anchoRoja+'px'
//    }
//    if (anchoVerde>=500 || anchoRoja>=500){
//        document.body.removeEventListener('keydown',aumentarAncho);
//        alert(anchoVerde>=500 ? 'GANA VERDE' : 'GANA ROJO');
//    }
//    
//}
//document.body.addEventListener('keydown',aumentarAncho);

/*
8. Juguemos a adivinar las parejas. Debes distribuir en la página una cuadrícula de 6 x 5 cajas.
 De las 30 cajas habrá 15 distintas. Cada par de cajas será de un color distinto. 
 Inicialmente todas las cajas aparecerán negras.
  Cuando el usuario pinche sobre una caja, se revelará su auténtico color. En ese momento debes
   arrastrar la caja al lugar donde creas que se encuentra su pareja. Si aciertas, ambas cajas 
   permanecerán boca arriba y ya no se podrá interactuar con ellas. Si fallas, las dos cajas volverán a su estado inicial.
    El programa debe detectar cuándo están todas las cajas emparejadas y cuánto tiempo has tardado en resolverlo.
*/
  // JavaScript corregido y comentado

  // 1) Obtener contenedor — getElementById recibe el id SIN '#'
  const contenedor = document.getElementById('container');
  if (!contenedor) {
    throw new Error("No se encontró el elemento con id 'container'. Añade <div id=\"container\"></div> en el HTML.");
  }

  // 2) Generar 15 colores hex aleatorios (asegurando 6 dígitos)
  const colores = Array.from({ length: 15 }, () => {
    const hex = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${hex}`;
  });

  // 3) Duplicar y mezclar (Fisher-Yates)
  const listacolores = [...colores, ...colores];
  for (let i = listacolores.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [listacolores[i], listacolores[j]] = [listacolores[j], listacolores[i]];
  }

  // 4) Crear las cajas en el DOM (estado inicial: fondo negro)
  listacolores.forEach(color => {
    const caja = document.createElement('div');
    caja.classList.add('caja');
    caja.dataset.color = color;       // guardamos el color real
    caja.style.backgroundColor = 'black';
    contenedor.appendChild(caja);
  });

  // 5) Estado del juego
  let seleccionada = [];   // cartas actualmente seleccionadas (max 2)
  let emparejadas = 0;     // contador de cartas emparejadas
  let bloqueo = false;     // evita clics mientras se muestran cartas después de fallo
  const inicio = Date.now();

  // 6) Lógica principal (delegación: un listener en el contenedor)
  contenedor.addEventListener('click', (event) => {
    const caja = event.target;

    // Validaciones rápidas
    if (!caja.classList || !caja.classList.contains('caja')) return; // clic fuera de caja
    if (caja.classList.contains('bloqueada')) return;                // ya acertada
    if (seleccionada.includes(caja)) return;                         // mismo click doble
    if (bloqueo) return;                                             // estamos en retardo por fallo

    // Revelar color
    caja.style.backgroundColor = caja.dataset.color;
    seleccionada.push(caja);

    // Si ya hay dos seleccionadas, comprobamos
    if (seleccionada.length === 2) {
      const [a, b] = seleccionada;

      if (a.dataset.color === b.dataset.color) {
        // → Acierto: marcamos ambas como bloqueadas y limpiamos selección
        a.classList.add('bloqueada');
        b.classList.add('bloqueada');
        emparejadas += 2;
        seleccionada = [];
      } else {
        // → Fallo: bloqueamos la interacción y tapamos tras 800ms
        bloqueo = true;
        setTimeout(() => {
          seleccionada.forEach(c => c.style.backgroundColor = 'black');
          seleccionada = [];
          bloqueo = false;
        }, 800);
      }

      // ¿Fin del juego?
      if (emparejadas === listacolores.length) {
        const tiempo = ((Date.now() - inicio) / 1000).toFixed(1);
        alert(`🎉 ¡Felicidades! Has terminado en ${tiempo} segundos`);
      }
    }
  });
 