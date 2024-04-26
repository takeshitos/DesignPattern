const readline = require('readline');
const Contato = require('./Contato');
const { ContatoRepository, Logger,ContatoService } = require('./GerenciadorContatos');
const BuscaPorNomeStrategy = require('./buscaStrategy');

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const buscaPorNomeStrategy = new BuscaPorNomeStrategy();

const contatoRepository = new ContatoRepository();
const logger = new Logger();
const contatoService = new ContatoService(contatoRepository, logger);


// Função para adicionar um novo contato
function adicionarContato() {
    rl.question('Nome: ', (nome) => {
        rl.question('Telefone: ', (telefone) => {
            rl.question('Email: ', (email) => {
                const novoContato = new Contato(nome, telefone, email);
                // Adiciona o novo contato usando o contatoService de contatos com log
                contatoService.adicionarContato(novoContato);
                console.log('Contato adicionado com sucesso!');
                rl.prompt();
            });
        });
    });
}

// Função para remover um contato existente
function removerContato() {
    rl.question('Nome do contato a ser removido: ', (nome) => {
         contatoService.removerContato(nome);
        console.log('Contato removido com sucesso!');
        rl.prompt();
    });
}

// Função para listar todos os contatos
function listarContatos() {
    const contatos = contatoService.listarContatos();
    console.log("Contatos:");
    contatos.forEach(contato => {
        console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
    });
    rl.prompt();
}

// Função para buscar um contato por nome
function buscarContato() {
    rl.question('Nome do contato a ser buscado: ', (nome) => {
         // Usa a estratégia de busca por nome para buscar o contato
        const contatosEncontrados = buscaPorNomeStrategy.buscar(contatoService.listarContatos(), nome);
        if (contatosEncontrados.length > 0) {
            console.log("Contatos encontrados:");
            contatosEncontrados.forEach(contato => {
                console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
            });
        } else {
            console.log('Nenhum contato encontrado.');
        }
        rl.prompt();
    });
}

// Função para sair do programa
function sair() {
    console.log('Saindo do programa.');
    rl.close();
}

// Configura o prompt inicial
rl.setPrompt(`
1- Adicionar Contato
2- Remover Contato
3- Listar Contatos
4- Buscar Contato
5- Sair
Escolha uma opção: `);

rl.prompt();

// Evento que escuta a entrada do usuário
rl.on('line', (input) => {
    switch (input.trim()) {
        case '1':
            adicionarContato();
            break;
        case '2':
            removerContato();
            break;
        case '3':
            listarContatos();
            break;
        case '4':
            buscarContato();
            break;
        case '5':
            sair();
            break;
        default:
            console.log('Opção inválida!');
            rl.prompt();
            break;
    }
});
