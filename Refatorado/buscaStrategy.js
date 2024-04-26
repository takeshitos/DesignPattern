// Strategy 
class BuscaPorNomeStrategy {
    buscar = (contatos, nome) =>
    contatos.filter(
      (contato) =>
        contato.nome.toLowerCase().includes(nome.toLowerCase())
    );
}

module.exports = BuscaPorNomeStrategy;

/* Princípio da Inversão de Dependência (DIP): 
O código refatorado segue o princípio da inversão de 
dependência, pois a classe BuscaPorNomeStrategy depende de
 uma abstração (a interface Strategy) e não de uma 
 implementação concreta.
 
 Princípio da Segregação de Interface (ISP): O código 
 refatorado segue o princípio da segregação de interface, 
 pois a classe BuscaPorNomeStrategy tem uma interface simples 
 e específica, que é buscar contatos por nome.
 
 Princípio da Responsabilidade Única (SRP): O código 
 refatorado segue o princípio da responsabilidade única, 
 pois a classe BuscaPorNomeStrategy tem apenas uma 
 responsabilidade, que é buscar contatos por nome.

 */