// ContatoRepository.js
class ContatoRepository {
    constructor() {
        this.contatos = [];
    }

    // Adiciona um novo contato ao repositório
    adicionarContato(contato) {
        this.contatos.push(contato);
    }

    // Remove um contato do repositório com base no nome
    removerContato(nome) {
        this.contatos = this.contatos.filter(contato => contato.nome !== nome);
    }

    // Retorna uma lista de todos os contatos no repositório
    listarContatos() {
        return this.contatos;
    }

    // Retorna um contato do repositório com base no nome
    buscarContatoPorNome(nome) {
        return this.contatos.find(contato => contato.nome === nome);
    }
}

// ContatoService.js
class ContatoService {
    constructor(contatoRepository, logger) {
        this.contatoRepository = contatoRepository;
        this.logger = logger;
    }

    // Adiciona um novo contato ao repositório
    adicionarContato(contato) {
        this.logger.log(`Adicionando contato: ${contato.nome}`);
        this.contatoRepository.adicionarContato(contato);
    }

    // Remove um contato do repositório com base no nome
    removerContato(nome) {
        this.logger.log(`Removendo contato: ${nome}`);
        this.contatoRepository.removerContato(nome);
    }

    // Retorna uma lista de todos os contatos no repositório
    listarContatos() {
        return this.contatoRepository.listarContatos();
    }

    // Retorna um contato do repositório com base no nome
    buscarContatoPorNome(nome) {
        return this.contatoRepository.buscarContatoPorNome(nome);
    }
}

// Registra uma mensagem de log
class Logger {
    log(message) {
        console.log(message);
    }
}

module.exports = {
    ContatoRepository,
    Logger,
    ContatoService
};


/*O que foi refatorado? 

Utilizando (SRP)

A classe GerenciadorContatos tem várias responsabilidades: gerenciar contatos, adicionar contatos, 
remover contatos, listar contatos e buscar contatos por nome. Isso viola o princípio de responsabilidade única.
Refatoração: Foi dividida a classe GerenciadorContatos em várias classes, cada uma com uma responsabilidade única.

ContatoRepository: responsável por armazenar e recuperar contatos.
ContatoService: responsável por realizar operações de negócios com contatos, como adicionar, remover e buscar.

Utilizando (OCP)

A classe GerenciadorContatosComLog é um decorator que adiciona funcionalidade de log à 
classe GerenciadorContatos. No entanto, isso viola o princípio de aberto-fechado, 
pois a classe GerenciadorContatos precisa ser modificada para adicionar a funcionalidade de log.

Refatoração: Em vez de criar um decorator, adicionei uma interface Logger que pode ser injetada 
na classe GerenciadorContatos. Isso permite que a classe GerenciadorContatos seja fechada para 
modificações e aberta para extensões.

Utilizando (DIP)

A classe GerenciadorContatosComLog depende da classe GerenciadorContatos. 
Isso viola o princípio de inversão de dependência, pois a classe GerenciadorContatosComLog não pode ser testada isoladamente.

Refatoração: Inverti a dependência, fazendo com que a classe GerenciadorContatos 
dependa de uma interface ContatoRepository em vez de uma implementação específica.

Itilizando (ISP)

A classe GerenciadorContatos tem métodos que não são utilizados por todos os clientes. 
Isso viola o princípio de segregação de interface, pois os clientes são forçados a 
implementar métodos que não são necessários.

Refatoração: Dividi a interface GerenciadorContatos em várias interfaces, cada uma com métodos específicos para cada cliente.

*/