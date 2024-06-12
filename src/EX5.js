function calcularProduto(numeros) {
    return numeros.reduce((acumulador, numero) => acumulador * numero, 1);
}

export default calcularProduto;