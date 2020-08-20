// Ejercicio 1

// const verificarEdadDelUsuario = prompt("Decime tu edad.")

// if (edadDelUsuario >=18) {
//     alert("Bienvenido a la página.")
// }

// else {
//     alert("No podés entrar todavía.")
// }





// Ejercicio 2

// const edadDelUsuarioUno = 18

// const chequearEdadDelUsuario = (edad) => {
//     if (edad >= 18) {
//         return true    
//     }
    
//     else {
//         return false
//     }
// }

// console.log(chequearEdadDelUsuario(edadDelUsuarioUno))
// console.log(chequearEdadDelUsuario(12))





// Ejercicio 3

// const avanzarSemaforo = (colorActual) => {
//     if (colorActual == "verde") {
//         return "amarillo"
//     }

//     else if (colorActual == "amarillo") {
//         return "rojo"
//     }

//     else if (colorActual == "rojo") {
//         return "verde"
//     }
    
// }

// console.log(avanzarSemaforo("verde"))     
// console.log(avanzarSemaforo("amarillo"))
// console.log(avanzarSemaforo("rojo")) 





// Ejercicio 4

// const puedeVerPelicula = (edad, tieneAutorizacion) => {
//     if (edad >= 15 || tieneAutorizacion === true) {
//         return true
//     }

//     else {
//         return false
//     }
// }

// console.log(puedeVerPelicula(12, false)) 
// console.log(puedeVerPelicula(12, true))  
// console.log(puedeVerPelicula(16, false)) 
// console.log(puedeVerPelicula(18, true))





// Ejercicio 5

// const esConsonante = (letra) => {
//     if (letra !== "a" && letra !== "e" && letra !== "i" && letra !== "o" && letra !== "u") {
//         return true
//     }

//     else {
//         return false
//     }
// }

// console.log(esConsonante("a")) 
// console.log(esConsonante("n")) 
// console.log(esConsonante("e"))





// Ejercicio 6

const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
    if (pasoTests && tieneMultasImpagas === false && pagoImpuestos) {
        return true
    }
    else {
        return false
    }
}

console.log(puedeRenovarCarnet(true, true, true))    
console.log(puedeRenovarCarnet(true, true, false))   
console.log(puedeRenovarCarnet(true, false, true))   
console.log(puedeRenovarCarnet(true, false, false))  
console.log(puedeRenovarCarnet(false, true, true))   
console.log(puedeRenovarCarnet(false, true, false))  
console.log(puedeRenovarCarnet(false, false, true))  
console.log(puedeRenovarCarnet(false, false, false)) 
