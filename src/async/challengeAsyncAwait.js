import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function functionData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const functionWithAsyncAwait = async (urlApi) => {
    try{
        const products = await functionData(`${urlApi}/products`);
        const product = await functionData(`${urlApi}/products/${products[0].id}`);
        const category = await functionData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log('El título del producto: ' + product.title);
        console.log('El nombre de la categoría: ' + category.name);

    }catch(error){
        console.error(error);
    }
}

functionWithAsyncAwait(API);