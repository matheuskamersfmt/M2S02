import filtrarPares from "./EX1.js";
import filtrarMaioresDeIdade from "./EX2.js";
import agruparPorCategoria from "./EX3.js";
import contador from "./EX4.js";
import calcularProduto from "./EX5.js";
import transformarArray from "./EX6.js";

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

// Exercício 4
let contador1 = contador();

console.log(contador1());
console.log(contador1());
console.log(contador1());

let contador2 = contador();

console.log(contador2());
console.log(contador2());

// Exercício 5
let numeros2 = [1, 2, 3, 4, 5];
console.log(calcularProduto(numeros2));

// Exercício 6
let numeros3 = [1, 2, 3, 4, 5];
function dobrar(numero) {
    return numero * 2.
}
console.log(transformarArray(numeros3, dobrar));