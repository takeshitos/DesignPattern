// Strategy 
class BuscaPorNomeStrategy {
    buscar(contatos, nome) {
        return contatos.filter(contato => contato.nome.toLowerCase().includes(nome.toLowerCase()));
    }
}

module.exports = BuscaPorNomeStrategy;
