// Redeclaración: let no permite declarar la misma variable dos veces
let edad = 10
let edad = 20
console.log(edad) // error

// solución: declarar una vez y reasignar
let edad = 10
edad = 20
console.log(edad) // 20

// Alcance: let respeta el bloque, la variable del if es otra
let edad = 10
if(true){
    let edad = 20
    console.log(edad) // 20
}
console.log(edad) // 10

// Arreglos: se puede reasignar
let edades = [10,20,30]
edades = [10,20,30,40]
console.log(edades)
