//Orientação a Objetos com JavaScript

// - Programação Orientada a Objetos (POO)
// - Programação Procedural (PP) - Javascript é isso, mas suporta POO
// - Programação Funcional(PF - FP) (Functional Programming)

// Prototype-based procedural programming language -> Javascript

//--CLASSES
//--FUNÇÕES/OBJETOS

/*
// Classes: Construtor e This & //Action

class Person {
    age = 0;
    steps = 0;

    constructor(name) {
        this.name = name;
    }

    takeAStep() {
        this.steps++;
    }

    setAge (newAge) {
        if(typeof newAge === 'number'){
            this.age = newAge;
        } else {
            console.log('Idade não aceita. (Só números)');
        }
    }
}
//Instância
let p1 = new Person('João', 6);
let p2 = new Person('Maria', 30);
let p3 = new Person('Pedro', 40);

p1.age = 6;

console.log(`P1 = ${p1.name} tem ${p1.age} anos`);
console.log(`P2 = ${p2.name} tem ${p2.age} anos`);
console.log(`P3 = ${p3.name} tem ${p3.age} anos`);

p1.takeAStep();
p1.takeAStep();
console.log(`Passos de ${p1.name}: ${p1.steps}`);

p1.setAge('10');

console.log(`${p1.name} tem ${p1.age} anos`);*/

/*
//Getter e Setter

class Person {
    _age = 10;
    steps = 0;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    takeAStep() {
        this.steps++;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get age () {
        return this._age;
    }

    set age (x) {
        if(typeof x === 'number') {
        this._age = x;
        }
    }
}

let p1 = new Person('João', 'Gabriel');
let p2 = new Person('Maria', 'Aparecida');
let p3 = new Person('Pedro', 'de Alcantara');

p1.age = 20;
console.log(`${p1.name} tem ${p1.age} anos`);
console.log(`${p1.fullName}`);
*/

/*
// Herança

class Person {
    age = 0;

    constructor(name) {
        this.name = name;
    }
    sayHi (){
        console.log(`${this.name} diz OI!`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    //O método na classe filha sobrescreve o método da classe pai
    //sayHi() {
        //console.log(`${this.name} é um estudante e diz OI!`);
    //}

    //Assim o método da classe pai é chamado
    sayHello() {
        super.sayHi();
    }
}

let p1 = new Student('Paulo', 1);
p1.age = 37;
let p2 = new Student('Pedro', 2);


console.log(`${p1.name} tem ${p1.age} anos e matrícula #${p1.id}`)
p1.sayHi();*/

/*
//Variável/Método Estático

class Person {

    static hands = 2;
    age = 0;

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Oi eu sou ${this.name} e tenho ${Person.hands} mãos`);
    }

    static sayHello(){
        console.log(`Oi eu sou ${this.name} e tenho ${this.hands} mãos`);
    }
}

let p1 = new Person('Paulo');
p1.sayHi();
Person.sayHello();// Aqui vai trazer a classe e não o seu objeto já que não é especificado no método static*/

// Factory


class Person {
    age = 0;

    constructor(name) {
        this.name = name;
    }
}
function createPerson(name, age) {
    let p = new Person(name);
    p.age = age;
    return p;
}

let p1 = createPerson('Paulo', 37);

console.log(`${p1.name} tem ${p1.age} anos`);
