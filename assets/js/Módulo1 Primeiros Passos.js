//alert('Hello World');
//console.log('Hello World');

/* let idade = 90; //number
let nome = "Paulo"; //string
let logado = true; //booblean
let lista = ["ovo", "farinha", "leite"]; //array
let nomeCompleto = {nome: "Paulo", sobrenome: "Ricardo", idade: 37}; //object
console.log(typeof nomeCompleto);

//Este é um comentário
/* Comentário 
    de 
    Bloco */
/* Exercícios: */
 /*
let nomeCarro = "Ferrari";
console.log(nomeCarro);

let precoBolo = 19.99;
console.log(precoBolo);

let cidade = "São Paulo";
console.log(cidade);
*/
//--------------------------

/*
const nome = "Paulo";
console.log(nome);
nome = "João";
console.log(nome); */

/*
let nome = "Paulo";
let sobrenome = "Ricardo";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

let n1 = 15;
let n2 = 20;
let n3 = 10;

let soma = n1 + n2 + n3;
console.log(soma); */

/*
let nome = "Paulo";
let sobrenome = "Ricardo";

// let nomeCompleto = nome + ' ' + sobrenome;
let nomeCompleto = `${nome} ${sobrenome} Freire Ultra`;

console.log(nomeCompleto);

let idade = 90;

let idadeString = `${idade} anos`;

console.log(idadeString); */

/*
let idade = 15;

if(idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

let idadeCondicionalIgual = "18";

if(idadeCondicionalIgual == 18) {
    idadeCondicionalIgual = idadeCondicionalIgual + 5;
    console.log(idadeCondicionalIgual);
    console.log("Você tem 18 anos");
}

let idadeCondicionalTresIguais = 18;

if(idadeCondicionalTresIguais === 18) {
    idadeCondicionalIgual = idadeCondicionalIgual + 5;
    console.log(idadeCondicionalIgual);
    console.log("Você tem 23 anos");
} */
/*
let idade = 90;


//if(idade >= 18) { 
//    if (idade < 60) {
//    console.log("Você é um adulto");
//    }
//} 

//if(idade >= 18 || idade < 60) {
//    console.log("Você é um adulto");
//} 

if (idade < 18) {
    console.log("Você é uma criança");
} else if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto");
} else if(idade >= 60) {
    console.log("Você é um idoso");
} 

let adulto = idade >= 18 && idade < 60;

if (adulto) {
    console.log("Você é um adulto");
} else {
    console.log("Você não é um adulto");
}
*/

/* Exercícios: */
/*
// Substitua o @ pela condicional correta para que seja o resultado seja TRUE
let x = 10;
let y = 5;
//console.log(x @ y);
console.log(x > y);


// Substitua o @ pela condicional correta para que seja o resultado seja FALSE
let w = "10";
let z = 10;
//console.log(w @ z);
console.log(w === z);

// Substitua o @ pela condicional correta para que seja o resultado seja TRUE
let a = 10;
let b = 5;  
//console.log(a @ b);
console.log(a != b);

//Crie uma condicional para verificar se o preço da carne está caro. PS: Até 45 está barato.
let preco = 40.3;

if(preco > 45) {
    console.log("Caro");
} else {
    console.log("Barato");
}*/

/*

let isMember = false;

let shipping = isMember ? 2 : 10;

console.log(isMember ? "Você é membro" : "Você não é membro")
console.log("Frete: " + shipping);

let age = 90;

let isAdult = (age >= 18 && age < 100) ? true : false;

console.log(isAdult);*/

let profession = "Agente";

switch (profession) {
    case 'fiscal':
        console.log("Sua camisa será VERDE");
    break;
    case 'bombeiro':
        console.log("Sua camisa será VERMELHA");

    break;
    case 'policial':
        console.log("Sua camisa será AZUL");
    break;
    default:
        console.log("Sua camisa será PRETA");
    break;
}