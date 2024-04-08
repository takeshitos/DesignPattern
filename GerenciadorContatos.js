class GerenciadorContatos {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(contato) {
        this.contatos.push(contato);
    }

    removerContato(nome) {
        this.contatos = this.contatos.filter(contato => contato.nome !== nome);
    }

    listarContatos() {
        return this.contatos;
    }

    buscarContatoPorNome(nome) {
        return this.contatos.find(contato => contato.nome === nome);
    }
}

// Decorator para adicionar funcionalidade de log à adição e remoção de contatos

class GerenciadorContatosComLog {
    constructor(gerenciadorContatos) {
        this.gerenciadorContatos = gerenciadorContatos;
    }

    adicionarContato(contato) {
        console.log(`Adicionando contato: ${contato.nome}`);
        this.gerenciadorContatos.adicionarContato(contato);
    }

    removerContato(nome) {
        console.log(`Removendo contato: ${nome}`);
        this.gerenciadorContatos.removerContato(nome);
    }

    listarContatos() {
        return this.gerenciadorContatos.listarContatos();
    }

    buscarContatoPorNome(nome) {
        return this.gerenciadorContatos.buscarContatoPorNome(nome);
    }
}

module.exports = {
    GerenciadorContatos,
    GerenciadorContatosComLog
};
