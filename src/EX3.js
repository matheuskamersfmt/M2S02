function agruparPorCategoria(produtos) {
    return produtos.reduce((acc, produto) => {
        const { categoria, preco } = produto;
        if (!acc[categoria]) {
            acc[categoria] = 0;
        }
        acc[categoria] += preco;
        return acc;
    }, {});
}

export default agruparPorCategoria;