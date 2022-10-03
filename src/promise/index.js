/*Las promesas son asíncronas, por lo que el código continuará su ejecución normalmente y 
luego dirá si la promesa se resolvió o se rechazó. 
Por lo que varias promesas pueden llegar a entrar en ejecución al mismo tiempo.
Las promesas pueden suceder:

Ahora
En el futuro
Nunca
*/

//Estrcutura base
const promise = new Promise(function (resolve, reject){
    resolve('Ok');
});

const cows = 11;

const countCows = new Promise(function (resolve, reject){
    if(cows > 10){
        resolve(`We have ${cows} cows on the farm`);
    }else {
        reject("There's not cows on the farm");
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) =>{
    console.log(error);
}).finally(() => console.log('Finally'));