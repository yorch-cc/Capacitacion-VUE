// Redeclaración: var permite volver a declarar la misma variable
var edad = 10
var edad = 20
console.log(edad) // 20

// Alcance: var no respeta el bloque, el if sobrescribe la variable de afuera
var edad = 10
if(true){
    var edad = 20
    console.log(edad) // 20
}
console.log(edad) // 20

// Arreglos: se puede redeclarar con otro valor
var edades = [10,20,30]
var edades = [10,20,30,40]
console.log(edades)
