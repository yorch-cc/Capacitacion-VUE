const mascota = {
    nombre: 'lucky',
    edad: 11,
    vivo: true, 
    razas: [
        'husky',
        'maltez',
        'chihuahua'
    ]

}

console.log(mascota)
console.log(mascota.razas[0])


//destructuring objects

const nombreMascota = mascota.nombre;
const {edad, vivo} = mascota
console.log(edad, vivo);

