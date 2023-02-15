//O que é DOM?

//DOM = Document Object Model;


//Eventos de clique
/*
function clicou() {
    console.log("Clicou no botão");
}
/*
let botao = document.querySelector('.botao');

botao.addEventListener('click', clicou);

//ou

/*botao.addEventListener('click', function () {
    clicou();
});

//ou

botao.addEventListener('click', ()=> {
    clicou();
});*/

/*
//Manipulando elementos 1

function clicou() {
    const teste = document.querySelector('#teste');
    //console.log(teste.children[1].children);
    const ul = teste.querySelector('ul');
    //ul.innerHTML += "<li>Item Alterado</li>";
    //ul.children[0].innerHTML = "Item Alterado"; //Aqui altera todo conteudo do elemento para adicionar o que queremos
    console.log(ul.outerHTML); //retorna o html inteiro
}*/

/*
//Manipulando elementos 2

function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');
    //ul.children[0].append("(alterado)"); //Aqui ele adiciona o texto no final do elemento sem alterar o conteudo
    
    // Duas formas de fazer a mesma coisa, porém usando o append é a melhor forma para performance
    //ul.innerHTML += "<li>Item Adicionado</li>"; 
    let newLi = document.createElement('li');
    newLi.innerText = "Item adicionado";
    ul.appendChild(newLi);
    ul.prepend(newLi); //Adiciona no inicio da lista    
}
*/

/*
//Manipulando elementos 3

function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    let newUl = document.createElement('ul');
        
    //ul.after(newUl); Pode ser usado aqui antes da criação do li no exemplo
    for(let i = 0; i < 5; i++) {
        let newLi = document.createElement('li');
        newLi.innerHTML = "Item add " + (i + 1);
        newUl.append(newLi);
    }
    //ul.after(newUl); Pode ser usado aqui após a criação do li no exemplo
    const newButton = document.createElement('button');
    newButton.innerHTML = "Botão";
    ul.before(newButton); 
}*/
 /*
//Manipulando atributos

function clicou() {

    const input = document.querySelector('input');
    const botao = document.querySelector('.botao');
    //console.log(input.getAttribute('placeholder'));


    if(input.hasAttribute('placeholder')) {
        console.log('Tem placeholder SIM');
    } else {
        console.log('NÃO tem placeholder');
    }
    
    //Forma de mostrar ou não a senha
    if(input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
        botao.innerText = "Mostrar senha";
    } else {
        input.setAttribute('type', 'text');
        botao.innerText = "Ocultar senha";
    }
}*/

/*
//Manipulando CSS

function clicou() {
    const li = document.querySelector('li');

    li.style.backgroundColor = '#00F';
    li.style.fontSize = '20px';
}*/

/*
//Manipulando Classes

function clicou() {
    const button = document.querySelector('button');
    //console.log(button.classList); //Responsável pelas classes do elemento
    //button.classList.add('verde'); //Adiciona uma classe
    //button.classList.remove('azul'); //Remove uma classe

    //if(button.classList.contains('azul')) {
    //    button.classList.remove('azul');
    //    button.classList.add('verde');
    //} else {
    //    button.classList.add('azul');
    //    button.classList.remove('verde');
    //}

    //button.classList.toggle('azul'); // Faz o mesmo do if acima
    if(button.classList.contains('azul')) {
        button.classList.replace('azul', 'verde');
    } else {
        button.classList.replace('verde', 'azul');
    }
}*/

/*
//Eventos de teclado 1

function apertou() {
    console.log('APERTOU!');
}

function segurou() {
    console.log('SEGUROU!');
}

function soltou() {
    console.log('SOLTOU!');
}
// Para colocar eventos de teclado no input ou qualquer outro elemento
//const input = document.querySelector('input');
//input.addEventListener();

    //Para colocar na página toda 
    
document.addEventListener('keydown', apertou);
document.addEventListener('keypress', segurou);
document.addEventListener('keyup', soltou);

document.addEventListener('keyup', soltou);*/

/*
//Eventos de teclado 2

function soltou(event) {
    //console.log(event.code);//Mais detalhado
    //console.log(event.key);//Mais simplório
    //console.log(event.shiftKey);//Verifica se a tecla shift está pressionada
    console.log(event.ctrlKey);//Verifica se a tecla ctrl está pressionada
    console.log(event.altKey);//Verifica se a tecla alt está pressionada
   
}
const input = document.querySelector('input');
input.addEventListener('keyup', soltou);
*/

//Exercício: Lista de Tarefas Simples
    //Elementos
const input = document.querySelector('input');
const lista = document.querySelector('ul');
    //Funções
function handleKeyUp(event) {
    if(event.key === 'Enter') {
        //lista.innerHTML += '<li>' + input.value + '</li>'; -- Forma menos usual por renderizar todo html
        const newLi = document.createElement('li');
        newLi.innerText = input.value;
        lista.appendChild(newLi);

        //Limpa o campo de texto do input
        input.value = '';
    }
}
    //Eventos
input.addEventListener('keyup', handleKeyUp);

