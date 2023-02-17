//Programação Funcional

/*
//Criando objeto e função de forma direta
//Objeto não tem construtor mas há como emular isso

let person = {
        name: 'Paulo',
        lastName: 'Ricardo',
        age: 37,
        getFullName () {
            return `${this.name} ${this.lastName}`;
        },

        start() {
            console.log('Iniciando...');
        }
    
}

person.start();

console.log(person1.getFullName());*/
 /*
//Herança

const defaultUser = {
    name: '',
    email: '',
    level: 1
}

let user1 = {
    //clone do objeto defaultUser dentro do objeto user1(Uma forma de Herança na Programação funcional)
    ...defaultUser,
    name: 'Paulo',
    email: 'paulo@email.com'
}

let adm1 = {
    ...defaultUser,
    name: 'Adm',
    email: 'adm@email.com',
    level: 2
}
console.log(adm1); */

//Jogo

const char = createSorcerer('Paulo');
const monster = createBigMonster();

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);