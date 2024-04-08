# DesignPattern

<h1 align="center"> Ricardo Takeshi Outi Miyamoto RA:2348144 </h1>

Lista 1 - Implementação Design Pattern

Decorator (Estrutural):
Por que foi usado: O padrão Decorator foi escolhido para permitir que a funcionalidade de log seja adicionada à adição e remoção de contatos sem modificar o código existente na classe GerenciadorContatos. Permitindo estender o comportamento desses métodos sem modificar sua implementação original.
Como foi usado: Criei a classe GerenciadorContatosComLog, que age como um decorador para a classe GerenciadorContatos. Essa classe adiciona a funcionalidade de log aos métodos adicionarContato e removerContato, delegando a execução dos métodos originais e adicionando o log conforme necessário.

Strategy (Comportamental):
Por que foi usado: O padrão Strategy foi escolhido para implementar a funcionalidade de busca de contatos, permitindo que os algoritmos de busca variem independentemente da implementação principal da funcionalidade de busca de contatos. Isso é útil porque torna a funcionalidade de busca de contatos mais flexível e reutilizável, permitindo que diferentes algoritmos de busca sejam facilmente intercambiáveis.
Como foi usado: Criamos a classe BuscaPorNomeStrategy para representar o algoritmo de busca de contatos por nome. Isso permite que outras estratégias de busca possam ser adicionadas no futuro, mantendo a interface comum buscar para realizar a busca. Em seguida, utilizamos a estratégia de busca por nome no método buscarContato do arquivo index.js, permitindo que os usuários busquem contatos por nome.

