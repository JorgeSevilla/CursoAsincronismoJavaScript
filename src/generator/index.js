/*Los generadores son funciones de las que se puede salir y volver a entrar. 

La llamada a una función generadora no ejecuta su cuerpo inmediatamente; 
se devuelve un objeto iterador para la función en su lugar. Cuando el metodo next() del iterador es llamado , 
el cuerpo de la función generadora es ejecutado hasta la primera expresión yield, 
la cual especifica el valor que será retornado por el iterador o con, yield*, delega a otra función generadora. 
El método next() retorna un objeto con una propiedad value que contiene el valor bajo el operador yield y 
una propiedad done que indica, con un booleano, si la función generadora ha hecho yield al último valor.
*/

function* generator(){
    yield 1;
    yield 2;
    yield 3;
}

const callGenerator = generator();
console.log(callGenerator.next().value);
console.log(callGenerator.next().value);
console.log(callGenerator.next().value);

function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['Jorge', 'Lucia', 'Juan', 'Pedro', 'Ana']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


