function sum(number1, number2){
    return number1 + number2;
}

function calc(number1, number2, callback){
    return callback(number1, number2);
}

console.log(calc(2, 2, sum)); //Se pasa la función sin paréntesis ya que caso se pase con paréntesis de puede ejecutar 
                              //la función y dar errores tener cuidado  

setTimeout(function () {
    console.log('Hola JavaScript');
}, 3000);

//Ejecutando callbacks con tiempo
function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 3000, 'Jorge');