//Tipos primitivos 

//Boolean
var vOf = false;
console.log(typeof(vOf));

//Number

var numero = 1;
console.log(typeof(numero));


//String

var nome = "Daniel";
console.log(typeof(nome));


// Declarando variaveis

var variavel = "sou uma string";
variavel = 'Óla';
console.log(variavel);


let lete= 'sou uma variavel de escopo local ';
lete = 'fui alterada';
console.log(lete);


const constante = 'sou imutavel hahaha';



var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocal = 'local';
    console.log(escopoLocal);
}
escopoLocal();