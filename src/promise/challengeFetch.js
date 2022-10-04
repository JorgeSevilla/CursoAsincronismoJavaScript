/*
Fetch sirve para relaizar peticiones http asíncronas pro medio de promesas
*/ 

import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi);
};

//Traer todos los productos
/*fetchData(`${API}/products`)
    .then(reponse => reponse.json())
    .then(products =>{
        console.log(products);
    })
    .then(() =>{
        console.log('Test Fetch');
    })
    .catch(error => console.log(error));
*/
//Traer un productos y categorías
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(productId => {
        console.log(productId)
        return fetchData(`${API}/products/${productId[0].id}`)
    })
    .then(response => response.json())
    .then(productCategory =>{
        console.log('Producto por título: ' + productCategory.title);
        return fetchData(`${API}/categories/${productCategory.category.id}`)
    })
    .then(response => response.json())
    .then(category =>{
        console.log('Producto por nombre: ' + category.name);
    })
    .catch(error => console.log(error));


