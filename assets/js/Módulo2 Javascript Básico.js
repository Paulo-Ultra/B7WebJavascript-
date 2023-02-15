/*function gravidade () {
    console.log("A gravidade do planeta é: ")
    console.log(9.8);
}

console.log("Chamando a função gravidade ")
gravidade(); */
/*
function somar(n1, n2) {
    let resultado = n1 + n2;
    console.log('Resultado: ' + resultado);
}
somar(10, 15);

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
    console.log(`Testando 1,2,3`);
}

let completo = nomeCompleto('Paulo', 'Ricardo');
console.log("Completo:" + completo);
console.log(nomeCompleto('Paulo', 'Ricardo'));
//ENTRADA -> PROCESSAMENTO -> SAÍDA

// Função com retorno condicional
function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 65;
let verificacao = maiorDeIdade(idade);

if (verificacao) {
    console.log("É maior de idade");
} else {
    console.log("É menor de idade");
}
*/

/* Calcule a porcentagem de dois números.
Exemplo: 25% de 40 é 10
Fórmula da porcantagem (y / x) *100
Uso da função: 

function porcentagem (x, y) {
    return (y / x) * 100;
}

let x = 30;
let y = 10;
let pct = porcentagem(x, y);
console.log(`${pct}% de ${x} é ${y}`); */

/* Calcule o preço do ímovel
 - m2 = 3000
 - Se tiver 1 quarto, o m2 é 1x 
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x
Uso da função: 

function precoImovel(m2, qtdQuartos) {
    let preco = m2 * 3000;
    if (qtdQuartos == 1) {
        preco = preco * 1;
    } else if (qtdQuartos == 2) {
        preco = preco * 1.2;
    } else if (qtdQuartos == 3) {
        preco = preco * 1.5;
    }
    return preco;
}

let metragem = 100;
let quartos = 1;
let valor = precoImovel(metragem, quartos);
console.log(`a casa custa R$ ${valor}`);
*/
 
/* Cria uma função que valide usuário e senha
Usuário correto: pedro
Senha correta: 123 
Uso da função:


function validarUsuario(usuario, senha) {
    if (usuario === 'pedro' && senha === '123') {
        return true;
    } else {
        return false;
    }
}

let usuario = 'pedro';
let senha = '123';
let validacao = validarUsuario(usuario, senha);
if(validacao) {
    console.log("Usuário válido");
} else {
    console.log("Usuário inválido");
} */

// Arrow function
/*
function somar (x, y) {
    return x + y;
}
console.log(somar(10, 20));
*/
/*
//primeira forma
const somar = (x, y) => {
    return x + y;
}
console.log(somar(10, 20));

//segunda forma
const somar2 = (x, y) => x + y;
console.log(somar2(10, 20));

//terceira forma sem dois parâmetros
function nome (nome) {
    return nome + " Ricardo";
}
const sobrenome = sob => sob + " Ricardo";
console.log(nome("Paulo"));*/
/*
//Variáveis dentro de funções
//Escopo local tem preferencia com variaveis

let count = 0;

function add (){
    let count = 0;
    count++;
}

add();
add();;
console.log(count); */

/*
//Funções dentro de funções
//Com arrow function


function addSquares(a, b) {
    const square = (x) => {
        return x * x;
    }

    return square(a) + square(b);
}
console.log(addSquares(2, 3));

//Função sem arrow function
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }

    return square(a) + square(b);
}
*/

/*
//Introdução a Arrays

let colors = ['blue', 'red', 'green'];
console.log(colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

let lista = ['algo', 30, true, colors];
let listaComArray = ['algo', ['blue', 'red', 'green']];

console.log(lista);
console.log(listaComArray[1][0]);*/
/* 
//Operações básicas em Arrays

let ingredientes = [
    'água',
    'farinha',
    'ovo',
    'sal'
];
//no array simples para colocar novo item não é o add e sim o push
ingredientes.push('leite');
//remove o último item do array
ingredientes.pop();
//remove o primeiro item do array
ingredientes.shift();
console.log(ingredientes);
console.log(`Total de ingredientes: ${ingredientes.length}`); */

/*
// No array abaixo, qual o número
let carros = ['BMW', 'Ferrari', 'Fiat', 'Ford', 'Volkswagen'];
let x = carros.indexOf('Ferrari');
console.log('1. ' + carros[x]);

//Troque a Ferrari por Audi

carros[carros.indexOf('Ferrari')] = 'Audi';
console.log(carros);

// Adicione Volvo a lista

carros.push('Volvo');
console.log(carros);

//Exiba quantos itens tem no array

console.log(`Itens no array: ${carros.length} `); */
 /*
// O que são objetos

let nome = 'Paulo';
let nomes = ['Paulo', 'Ricardo', 'Silva'];
let personagem = {
    nome: 'Paulo',
    idade: 36,
    pais: 'Brasil'
}

console.log(personagem);
console.log(personagem.nome);
console.log(personagem.idade);
console.log(personagem.pais);

console.log(`${personagem.nome} tem ${personagem.idade} anos e mora no ${personagem.pais}`); */
/*
//Acessando e alterando objetos

let personagem = {
    nome: 'Paulo',
    idade: 36,
    pais: 'Brasil',
    olhos: ['preto', 'castanho'],
    caracteristicas: {
        forca: 20,
        magia:50,
        stamina: 10
    }
}

personagem.nome = 'Pedro';
personagem.caracteristicas.forca += 5;

console.log(`Força: ${personagem.caracteristicas.forca}`);

personagem.olhos.push('azul');

console.log(personagem.olhos);

let personagem = {
    nome: 'Paulo',
    idade: 36,
    carros: [
        {modelo: 'Fiat', cor: 'preto'},
        {modelo: 'Ferrari', cor: 'vermelho'},
    ]
}

console.log(personagem.carros[0].cor); */
 /*
//Função dentro de objeto

let pessoa = {
    nome: 'Paulo',
    sobrenome: 'Ricardo',
    idade: 36,
    nomeCompleto: function () {
        return this.nome + ' ' + this.sobrenome;
    }
}

console.log(pessoa.nomeCompleto()); */

/*
//O loop for

for (let i = 0; i <= 10; i++) {
    console.log('Frase qualquer ' + i);
}
*/

/*
//Dando loop em arrays

let cores = [
    {nome: 'preto', qt: 10},
    {nome: 'vermelho', qt: 20},
    {nome: 'azul', qt: 30}
];

//cores.push('roxo');

for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}

console.log('---------------------');

for(let i in cores){
    cores[i].nome = cores[i].nome.toUpperCase();
    console.log(cores[i].nome);
}

console.log('---------------------');

for(let cor of cores){
    console.log(cor.nome);
}*/
/*
//O loop while

let numero = 0;

while(numero < 10){
    console.log(`O número da vez é ${numero}`);
    numero++;
}

//Mesma coisa do while com for
console.log('---------------------');

for (let i = 0; i < 10; i++) {
    console.log(`O número da vez é ${i}`);
}
*/

/*
//Exercícios de loops

//1. Faça um loop que mostre todas as frutas
let fruits = ['banana', 'maçã', 'pera', 'uva', 'mamão'];

for(let i in fruits){
    console.log(fruits[i]);
}

//2. Faça um loop que mostre todos os números pares de 0 a 100
for (let i = 0; i <= 100; i++) {
    if(i % 2 == 0){
        console.log(i);
    }
}

//3. Conte de 1 até 100 através de um WHILE
let numero = 1;
while(numero <= 100){
    console.log(numero);
    numero++;
}
*/

/*
//Funções de array

let fruits = ['banana', 'maçã', 'pera', 'uva'];
fruits.pop(); //deleta último item do array
fruits.shift(); //deleta primeiro item do array
fruits.push('kiwi');
console.log(fruits.join(' ')); //Gera uma string no array com separador escolhido
fruits.indexOf('maçã'); //Retorna o índice do item escolhido

fruits[fruits.length -1] = 'mamão'; //Substitui o último item do array

console.log(fruits);
console.log(fruits.length); */

/*
//Ordenação de Arrays

let fruits = ['banana', 'uva', 'maçã', 'pera', 'mamão'];

fruits.sort(); //Ordena o array em ordem alfabética
console.log(fruits);
fruits.reverse(); //Ordena o array em ordem alfabética inversa
console.log(fruits);

let cars =[
    {brand: 'Fiat', year: 2022},
    {brand: 'Bmw', year: 2018},
    {brand: 'Ferrari', year: 2020},
];

//cars.sort((a, b) => a.year - b.year); //Ordena o array de acordo com o ano (menor para maior))
//cars.sort((a, b) => b.year - a.year); //Ordena o array de acordo com o ano (maior para menor))
//Faz o mesmo que isso:
cars.sort((a, b) => {
    if(a.year > b.year){
        return 1;
    }else if (a.year < b.year){
        return -1;
    } else {
        return 0;
    }
});

console.log(cars);*/
/*
//Iteração de Array

let fruits = ['banana', 'uva', 'maçã', 'pera', 'mamão'];

//let bigFruits = fruits.filter((item) => {
   // if(item.length > 4){
    //    return true;
   // }
//});

//let bigFruits = fruits.filter((value) => value.length > 4); //Pode nomear como quiser
//let bigFruits = fruits.filter(value, index, array); -- Dentro do filter tem essas propriedades
let okEvery = fruits.every((value) => {
    return value.length > 3;
});

if(okEvery){
    console.log('Todos os itens são maiores que 3');
} else {
    console.log('Não são todos os itens maiores que 3');
}

let okSome = fruits.some((value) => {
    return value.length > 3;
});

if(okSome){
    console.log('Algum item é maior que 3');
} else {
    console.log('Nenhum item maior que 3');
}

if(fruits.includes('banana')){
    console.log('Tem banana');
} else {
    console.log('Não tem banana');
}*/