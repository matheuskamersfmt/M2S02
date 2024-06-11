function filtrarMaioresDeIdade(pessoas) {
   return pessoas.filter(pessoa => pessoa.idade >= 18).map(pessoa => pessoa.nome);
}

export default filtrarMaioresDeIdade;