function suma(){
    console.log(10)

}
suma();
const sumarDos = (num1,num2) => (num1 + num2);
const resultado = sumarDos(67,6)
console.log(resultado);

const mensaje = nombre => 'Hola ' + nombre

const resultadoDos = mensaje('yorchito')
console.log(resultadoDos);

const sumaTres = (num = 1) => 
    console.log(num + 6)

sumaTres(66); 