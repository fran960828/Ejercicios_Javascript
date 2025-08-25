// Ejercicio 1
let arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayDuplicado = arrayOriginal.reduce((acumulador, numero) => {
  let duplicado = numero * 2;
  acumulador.push(duplicado);
  return acumulador;
}, []);
// console.log(arrayDuplicado);
//Ejercicio 2
let suma = arrayDuplicado.reduce(
  (acumulador, numero) => (acumulador += numero)
);
// console.log(suma);
// Ejercicio 3
let arrayPares = arrayOriginal.filter((numero) => numero % 2 == 0);
// console.log(arrayPares);
// Ejercicio 4
// let numeroUsuario = Number(prompt("Introduce un número"));
// let verdaderoFalso = arrayOriginal.some((numero) => numero === numeroUsuario);
// console.log(verdaderoFalso);
// Ejercicio 6
arrayDescendente = arrayOriginal.sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
});

// console.log(arrayDescendente);
// Ejercicio 7
const array1 = [2, 3, 5, 9, 12, 15];
const array2 = [4, 6, 9, 12, 18, 20];
let arrayUnion = [...array1, ...array2];
function multiplosTres(array) {
  return array.reduce((acumulador, numero) => {
    if (numero % 3 == 0 && numero % 5 != 0 && !acumulador.includes(numero)) {
      acumulador.push(numero);
      return acumulador;
    }
    return acumulador;
  }, []);
}
//console.log(multiplosTres(arrayUnion));
// Ejercicio 8
 const libros = [
     { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', año: 1954 },
     { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', año: 1997 },
     { titulo: '1984', autor: 'George Orwell', año: 1949 },
     { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', año: 1967 },
     { titulo: 'El código Da Vinci', autor: 'Dan Brown', año: 2003 },
     { titulo: 'El hobbit', autor: 'J.R.R. Tolkien', año: 1937 },
     { titulo: 'Los juegos del hambre', autor: 'Suzanne Collins', año: 2008 },
 ];
function filtrarLibros(libros){
  return libros.filter((libro)=> libro.año > 2000);
}
function librosMayusculas(libros){
  return libros.map((libro)=>{
    return {...libro, titulo: libro.titulo.toUpperCase()}
  })
}
let librosRecientes = filtrarLibros(libros);
let librosConTituloEnMayusculas = librosMayusculas(librosRecientes);
//console.log(librosConTituloEnMayusculas);
// Ejercicio 9
 const estudiantes = [
     { nombre: 'Ana', edad: 20, calificaciones: [10, 90, 87] },
     { nombre: 'Carlos', edad: 22, calificaciones: [78, 92, 87] },
     { nombre: 'Elena', edad: 19, calificaciones: [75, 88, 91] },
     { nombre: 'Daniel', edad: 18, calificaciones: [82, 79, 90] },
     { nombre: 'Luisa', edad: 21, calificaciones: [88, 85, 89] },
     { nombre: 'Miguel', edad: 17, calificaciones: [76, 84, 80] },
     { nombre: 'Sara', edad: 23, calificaciones: [91, 9, 94] },
 ];
 let estudiantesMayoresEdad=estudiantes.filter((estudiante)=>estudiante.edad>=18);

let calificaciones=estudiantes.map((estudiante)=>{
  let promedio=((estudiante.calificaciones[0]+estudiante.calificaciones[1]+estudiante.calificaciones[2])/3).toFixed(2);
  return {...estudiante,promedio};
});
//console.log(calificaciones);

let alumnoPromedioMasAlto= calificaciones.reduce((acumulador,alumno)=>{
  if (alumno.promedio>acumulador.promedio){
    return alumno;
  }
  return acumulador;
})
//console.log(alumnoPromedioMasAlto);
//Ejercicio 10
 const ventas = [
     { producto: 'Camiseta', cantidad: 10, precioUnitario: 15 },
     { producto: 'Zapatos', cantidad: 5, precioUnitario: 50 },
     { producto: 'Sombrero', cantidad: 8, precioUnitario: 20 },
     { producto: 'Pantalones', cantidad: 12, precioUnitario: 30 },
     { producto: 'Bufanda', cantidad: 15, precioUnitario: 10 },
 ];
 let ventasElevadas=ventas.filter((venta)=>venta.cantidad>8);
 console.log(ventasElevadas);
 let ingresosTotales=ventas.map((venta)=>{
  return {...venta,total:venta.cantidad*venta.precioUnitario};
 })
 console.log(ingresosTotales);
 let ventaMasAlta=ingresosTotales.reduce((acumulador,venta)=>{
  if (venta.total>acumulador.total){
    return {producto:venta.producto,total:venta.total};
  }
  return {producto:acumulador.producto,total:acumulador.total};
 })
console.log(ventaMasAlta);
let ventasOrdenadas=ventas.sort((a,b)=>{
  if (a.cantidad > b.cantidad){
    return 1;
  } else if (a.cantidad < b.cantidad){
    return -1;
  } else {
    return 0;
  }
})
console.log(ventasOrdenadas);