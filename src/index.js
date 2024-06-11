import filtrarPares from "./EX1.js";
import filtrarMaioresDeIdade from "./EX2.js";

// Exercício 1
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filtrarPares(numeros));


// Exercício 2
let pessoas = [
    { nome: 'Alice', idade: 17 },
    { nome: 'Bob', idade: 22 },
    { nome: 'Charlie', idade: 16 },
    { nome: 'David', idade: 19 }
    ];

console.log(filtrarMaioresDeIdade(pessoas));

