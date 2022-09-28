/*Es una función que se pasa a otra función como argumento que luego se invoca dentro de la función para
 ejecutar algún tipo de rutina o acción
*/
function addition(number1, number2){
    return number1 + number2;
}

function subtraction(number1, number2){
    return number1 - number2
}

function calculate(number1, number2, callback){
    return callback(number1, number2);
}

console.log(calculate(5, 2, addition)); //Se pasa la función sin paréntesis ya que caso se pase con paréntesis de puede ejecutar 
                              //la función y dar errores tener cuidado  
console.log(calculate(5, 3, subtraction));                              

setTimeout(function () {
    console.log('Hola JavaScript');
}, 3000);

//Ejecutando callbacks con tiempo
function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 3000, 'Jorge');