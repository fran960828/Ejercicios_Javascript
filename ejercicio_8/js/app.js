// Ejercicio 1
let arrayNumeros = [4, -6, 2, 8, 10, -3, 5, 7];
let arrayAbsolutos = arrayNumeros.map((numero) => {
  return Math.abs(numero);
});
// Ejercicio 2
let arrayDatos = [75, "Francisco", true, [1, 2, 3], null, 25, "juan", false];
function porTipos(array) {
  let arrString = [];
  let arrNumber = [];
  let arrObject = [];
  let arrBoolean = [];
  array.forEach((e) => {
    if (typeof e === "number") {
      arrNumber.push(e);
    } else if (typeof e === "string") {
      arrString.push(e);
    } else if (typeof e === "boolean") {
      arrBoolean.push(e);
    } else if (typeof e === "object") {
      arrObject.push(e);
    }
  });
  return {
    number: arrNumber,
    string: arrString,
    boolean: arrBoolean,
    object: arrObject,
  };
}

let arrayTipos = porTipos(arrayDatos);

// Ejercicio 2 opcion 2
const datosAleatorios = [
  "Paisa",
  66,
  "Qué tal estás",
  {},
  { name: "Bienve" },
  [1, 2, 3],
  ["Hola que tal"],
  true,
];
function porTipos2(array) {
  return {
    string: array.filter((e) => typeof e === "string"),
    number: array.filter((e) => typeof e === "number"),
    object: array.filter((e) => typeof e === "object"),
  };
}
// console.log(porTipos2(datosAleatorios));
// Ejercicio 3
const alumnos = [
  {
    id: 1,
    nombre: "Zamora",
    edad: 15,
    master: "FullStack",
  },
  {
    id: 2,
    nombre: "Jose Luís",
    edad: 22,
    master: "BlockChain",
  },
  {
    id: 3,
    nombre: "Lucía",
    edad: 19,
    master: "IA",
  },
  {
    id: 4,
    nombre: "Felipe",
    edad: 49,
    master: "FullStack",
  },
  {
    id: 5,
    nombre: "María",
    edad: 17,
    master: "IA",
  },
  {
    id: 6,
    nombre: "Cecilia",
    edad: 16,
    master: "FullStack",
  },
  {
    id: 7,
    nombre: "Cecilia",
    edad: 16,
    master: "BlockChain",
  },
];
function getFullStackStudents(array) {
  return {
    alumnosFullstack: array.filter((alumno) => alumno.master === "FullStack"),
  };
}
//console.log(getFullStackStudents(alumnos));
// Ejercicio 4
function nStudentFullStack(array) {
  return {
    Fullstack: array.reduce((acumulador, alumno) => {
      if (alumno.master === "FullStack") {
        acumulador++;
      }
      return acumulador;
    }, 0),
    IA: array.reduce((acumulador, alumno) => {
      if (alumno.master === "IA") {
        acumulador++;
      }
      return acumulador;
    }, 0),
    Blockchain: array.reduce((acumulador, alumno) => {
      if (alumno.master === "BlockChain") {
        acumulador++;
      }
      return acumulador;
    }, 0),
  };
}
// console.log(nStudentFullStack(alumnos));
// Ejercicio 5
function getAdultStudents(array) {
  return array.filter((alumno) => alumno.edad >= 18);
}
// console.log(getAdultStudents(alumnos));
// Ejercicio 6
function mayor(array) {
  return array.reduce((acumulador, alumno) => {
    // Si aún no hay acumulador, el primero será el alumno actual
    if (!acumulador || alumno.edad > acumulador.edad) {
      return alumno;
    }
    return acumulador;
  }, null); // inicializamos en null (no hay alumno todavía)
}

//console.log(mayor(alumnos));
// Ejercicio 7
function porTipos3(array) {
  return array.reduce((organizador, elemento) => {
    let tipo = typeof elemento;
    organizador[tipo] = organizador[tipo] ? organizador[tipo] : [];
    organizador[tipo].push(elemento);
    return organizador;
  }, []);
}
console.log(porTipos3(datosAleatorios));
// Ejercicio 8
function agruparPor(array, clave) {
  return array.reduce((acumulador, alumno) => {
    let clasificacion = alumno[clave];
    acumulador[clasificacion] = acumulador[clasificacion]
      ? acumulador[clasificacion]
      : [];
    acumulador[clasificacion].push(alumno);
    return acumulador;
  }, []);
}
console.log(agruparPor(alumnos, "edad"));
