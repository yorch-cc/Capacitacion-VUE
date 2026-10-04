// Redeclaración: const no permite declarar la misma variable dos veces
const edad = 10
const edad = 20 // SyntaxError

// Reasignación: const no permite cambiar el valor
const edad = 10
edad = 20 // Error: "edad" is read-only

// Alcance: const respeta el bloque, igual que let
const edad = 10
if(true){
    const edad = 20
    console.log(edad) // 20
}
console.log(edad) // 10

// Arreglos: no se puede reasignar...
const edades = [10,20,30]
edades = [10,20,30,40]
console.log(edades)

// ...pero sí se puede modificar su contenido
const edades = [10,20,30]
edades.push(40)
console.log(edades)

// Objetos: se pueden cambiar y agregar propiedades
const persona = {
  nombre: 'juanito',
  edad: 20
}

persona.edad = 21
persona.pais = 'México'

console.log(persona)
