import "../sass/style.scss";

const p1= new Promise((resolve, reject) => {
    reject (20);
})
const p2= new Promise((resolve,reject)=>{
    resolve(5)
})




//p1.then((valor)=>{
//    console.log('el valor de promesa 1 es ',valor)
//    return p2
//}).then((valor2)=>{
//    console.log('el valor de promesa 2 es ',valor2)
//
//}).catch((error)=>{
//    console.log('se ha producido un error')
//}).finally(()=>{
//    console.log('Tramite finalizado')
//})
//p1.then((valor)=>{
//    if (valor>18){
//        return `fdskjfdkjflfj`
//    }else {
//        return Promise.reject('Edad inferior a 18 años')
//    }
//}).then((valor2)=>{
//    console.log('La clave es',valor2)
//}).catch((error)=>{
//    console.log(error)
//}).finally(()=>{
//    console.log('Proceso finalizado')
//})

Promise.allSettled([p1,p2]).then((valores)=>{
    console.log(valores)
    
}).catch((error)=>{
    console.log(error)
})
