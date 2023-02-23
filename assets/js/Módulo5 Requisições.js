/* 
O que é Síncrono e Assíncrono?

Síncrono: O código é executado linha a linha, uma após a outra, de cima para baixo, assim que a requisição é feita ela retorna seu response e e só aí vai para a próxima requisição


let nome = "Paulo";
let sobrenome = "Ricardo";
let nomeCompleto = nome + " " + sobrenome;

/*Assincrono: O código é executado de uma vez, as requisições são todas feits juntas para depois retornar o response
*/

/* Como a Web funciona (Requisição e Resposta)? 
Request = Requisição
-> Cabeçalhos = Headers -- Informações Principais da requisição
-> Corpo = Body -- Informações Secundárias da requisição

Response = Resposta
-> Cabeçalhos = Headers 
-> Corpo = Body
*/

/* Como uma API funciona? 
API = Application Programming Interface

JSON = Javascript Object Notation

https://jsonplaceholder.typicode.com/posts
*/


/* O que é um CALLBACK?
No código é uma função passada para ser usada quando um evento/resultado for acontecer
Ligado a requisição a URL enviada
--Quando tiver a resposta ele chama o callback e executa a função


function clickCallback () {
    alert('Clicou no botão');
}

document.querySelector('#botao')
    .addEventListener('click', clickCallback);
    */

/*
// Fazendo uma requisição na prática

function clicou () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data[0]);
    }); 
}

document.querySelector('#botao').addEventListener('click', clicou);
*/
/*
//Entendendo Promise

//Promise = Promessa

function clicou () {
    let req = fetch('https://jsonplaceholder.typicode.com/posts')
    
    req.then((response) => {
        return response.json();
    })
    .then((data) => {
        alert(data[0].title);
    });

    alert("Opa Clicou!");
    
    //fetch('https://jsonplaceholder.typicode.com/posts')
    //.then((response) => {
    //    return response.json();
    //})
    //.then((data) => {
    //    console.log(data[0]);
    //}); 
}

function somar (x, y) {
    return x + y;
}

document.querySelector('#botao').addEventListener('click', clicou); */

/*
//Gerenciando erros na Promise

function clicou () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            alert(data[0].title);
        })
        .catch(() => {
            alert('Erro na requisição');
        })
        .finally(() => {
            alert('Finalizou a requisição')
        });  
}

function somar (x, y) {
    return x + y;
}

document.querySelector('#botao').addEventListener('click', clicou); */

/*
//Tipos de status de um requisição

function clicou () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(`Status: ${response.status}`)
            return response.json();
        })
        .then((data) => {
            alert(data[0].title);
        })
        .catch(() => {
            alert('Erro na requisição');
        })
        .finally(() => {
            alert('Finalizou a requisição')
        });  
}

document.querySelector('#botao').addEventListener('click', clicou); */

/*
//Métodos de envio de requisição
//Por padrão o método fetch usa o método GET

function clicou () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(`Status: ${response.status}`)
            return response.json();
        })
        .then((data) => {
            alert(data[0].title);
        })
        .catch(() => {
            alert('Erro na requisição');
        })
        .finally(() => {
            alert('Finalizou a requisição')
        });  
}

function inserir () {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Título de Teste',
            body: 'Corpo de teste',
            userId: 2
            })
        })
        .then((response) => {
            console.log(`Status: ${response.status}`)
            return response.json();
        })
        .then((data) => {
            console.log(data);
       
        })
}

document.querySelector('#botao').addEventListener('click', clicou); 
document.querySelector('#inserir').addEventListener('click', inserir); */

//Promises com async/await
//As requisições são feitas de forma assincrona, mas o código é executado de forma síncrona

async function clicou () {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    alert(json[0].title);
    
    alert('Clicou!!!');
}

async function inserir () {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Título de Teste',
            body: 'Corpo de teste',
            userId: 2
            })
        });
    let json = await response.json();
    console.log(json);
}

document.querySelector('#botao').addEventListener('click', clicou); 
document.querySelector('#inserir').addEventListener('click', inserir);