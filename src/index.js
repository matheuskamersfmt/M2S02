import filtrarPares from "./EX1.js";
import filtrarMaioresDeIdade from "./EX2.js";
import agruparPorCategoria from "./EX3.js";

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

// Exercício 3
let produtos = [
    { categoria: 'eletrônicos', preco: 99.99 },
    { categoria: 'livros', preco: 19.99 },
    { categoria: 'eletrônicos', preco: 199.99 },
    { categoria: 'livros', preco: 29.99 },
    { categoria: 'roupas', preco: 49.99 }
];

console.log(agruparPorCategoria(produtos));