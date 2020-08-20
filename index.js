// const verificarEdadDelUsuario = prompt("Decime tu edad.")

// if (edadDelUsuario >=18) {
//     alert("Bienvenido a la página.")
// }

// else {
//     alert("No podés entrar todavía.")
// }


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

const avanzarSemaforo = (colorActual) => {
    if (colorActual == "verde") {
        return "amarillo"
    }

    else if (colorActual == "amarillo") {
        return "rojo"
    }

    else if (colorActual == "rojo") {
        return "verde"
    }
    
}

console.log(avanzarSemaforo("verde"))     
console.log(avanzarSemaforo("amarillo"))
console.log(avanzarSemaforo("rojo")) 

