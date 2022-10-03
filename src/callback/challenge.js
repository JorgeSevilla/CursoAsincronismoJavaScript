const XLMHttpRequest = require('xmlhttprequest');
const API = 'http//api.ecuelajs.co/api/v1';

function fetchData(urlApi, callback){
    let xhttp = new XLMHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event){
        if(xhttp.readystate === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.resposeText));
            }
        }else {
            const error = new Error('error' + urlApi);
            return callback(error, null);
        }
    }
    xhttp.send();
}