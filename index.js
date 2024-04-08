const readline = require('readline');
const Contato = require('./Contato');
const { GerenciadorContatos, GerenciadorContatosComLog } = require('./GerenciadorContatos');
const BuscaPorNomeStrategy = require('./buscaStrategy');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const gerenciador = new GerenciadorContatos();
const gerenciadorComLog = new GerenciadorContatosComLog(gerenciador);
const buscaPorNomeStrategy = new BuscaPorNomeStrategy();

function adicionarContato() {
    rl.question('Nome: ', (nome) => {
        rl.question('Telefone: ', (telefone) => {
            rl.question('Email: ', (email) => {
                const novoContato = new Contato(nome, telefone, email);
                gerenciadorComLog.adicionarContato(novoContato);
                console.log('Contato adicionado com sucesso!');
                rl.prompt();
            });
        });
    });
}

function removerContato() {
    rl.question('Nome do contato a ser removido: ', (nome) => {
        gerenciadorComLog.removerContato(nome);
        console.log('Contato removido com sucesso!');
        rl.prompt();
    });
}

function listarContatos() {
    const contatos = gerenciador.listarContatos();
    console.log("Contatos:");
    contatos.forEach(contato => {
        console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
    });
    rl.prompt();
}

function buscarContato() {
    rl.question('Nome do contato a ser buscado: ', (nome) => {
        const contatosEncontrados = buscaPorNomeStrategy.buscar(gerenciador.listarContatos(), nome);
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

rl.setPrompt(`
1. Adicionar Contato
2. Remover Contato
3. Listar Contatos
4. Buscar Contato
Escolha uma opção: `);

rl.prompt();

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
        default:
            console.log('Opção inválida!');
            rl.prompt();
            break;
    }
});
