//Es una declaración que define una función asíncrona que devuelve un objeto. 
//Permite ejecutar funciones sin interrumpir su proceso
const functionWithAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
            ? setTimeout(() => resolve('Async!!'), 2000)
            : reject(new Error('Error'));
    })
}

const functionWithAsyncAwait = async () => {
    const something = await functionWithAsync();
    console.log(something);
    console.log('Test ');
}

console.log('Before');
functionWithAsyncAwait();
console.log('After');
