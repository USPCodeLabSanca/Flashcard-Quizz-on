# Flashcard-Quizz-on
On boarding 2022 USPCodeLabSanca 1° semestre 2022

## Aplicação
Flashcard-Quizz é um jogo usado para te ajudar a revisar qualquer coisa que você queira memorizar! Basta criar uma coleção de cards, adicionar cards com perguntas e respostas e então iniciar seu quizz. 

### Requerimentos minimos

- **Tela com decks**
A tela com decks mostra todas coleções de cards atuais. Deve ser possível adicionar, excluir e editar um deck.

  - Objetivo: Criar coleções de decks personalizados por temas (e.g. biologia, inglês ou história).
  - Sugestão: Uma simples lista das coleções criadas. Ao clicar em um deck

- **Tela dos cards**
Ao editar um deck, pode-se adiconar, excluir e editar um card. Um card consiste de uma pergunta/charada e com uma resposta associada.

  - Opicional: Um card pode ser de diferentes tipo: pergunta-alternativas, pergunta-resposta, associação de imagens ou qualquer padrão a mais que acharem legal. 

  - Objetivo: Criar coleções de cards relacionados ao tema do deck.
Sugestão: Uma simples lista de cards criadas. Ao clicar em um card, ele mostra o card. Pode-se mostra imediatamente a pergunta. A resposta pode ser revelada ao clicar em um botão.

- **Tela do quizz**
Quando um deck tem mais de 10 cards, pode-se iniciar um quizz! Ele consiste de uma grade 3x3 de cards, em que se deve responder os cards de forma cronometrada.

  - Opicional: O cronometro deve ser pensado pelo grupo: cada card pode ter o seu, ou pode-se adiconar um cronometro por "round". A grade pode variar para nxm, sendo n e m da escolha do grupo. Assim, pode-se mostra um card por vez (1x1 com cronometro). Seria interessante criar um score também. 
  
  - Sugestão: Usar o display grid do css. 

### Backend (Bonus)
Um jogador criou vários decks e adicionou vários cards! Ele está se preparando para um periodo de provas e precisa dessas informações quando entrar de novo, onde serão salvas essas informações? Ele também gostaria os scores dos quizzes anteriores fossem salvos, para saber seu progresso.

Parece que vamos precisar de um banco de dados agora.

Funcionalidades:
- Autenticação (usar o ip do usuário ou criar uma login simples). 
- Storage decks e cards
- Storage score 

Tecnologias: Usar [Node.js](https://nodejs.org/en/) e [Mongoose](https://mongoosejs.com/docs/) como banco.

## Tecnologias utilizadas
Será utilizado **node.js** e **mongoose** para coordenar o processo. 

## Sobre os módulos utilizados

### node.js
Node é um ambiente de execução de javascript em servidores. Historicamente javascript roda nos browsers, cada um com sua engine que processa os scripts. Por exemplo, o Firefox utiliza a SpiderMonkey, e o Chrome utiliza o V-8. 


O node encapsula a V-8, engine do chrome, e adiciona funções relevantes ao ambiente do servidor. 


As engines devem implementar as funcionalidades básicas do javascript (Chamado muitas vezes de Vanilla Js) de acordo com as especificações de EcmaScript. 


A EcmaScript é uma entidade de padronização responsável por definir as atuais e futuras funcionalidades básicas do Javascript. Apesar de terem o mesmo comportamento esperado, cada funcionalidade pode ser implementada de maneira diferente em cada engine. Não apenas isso, cada Engine pode ter funcionalidades extras que não estão definidas na Ecma. 


Por exemplo, a versão EcmaScript2015 (Muitas vezes chamada de ES6) definiu uma série de funcionalidades que melhoraram o uso do Javascript:


![ES6 Features](https://i.imgur.com/8Rm7MRD.png)

Um browser atualizado possui as funções mais novas do javascript (Atualmente EcmaScript 2020 - ES11). É por isso que browsers antigos ou desatualizados não conseguem utilizar estas funcionalidades, o javascript evolui continuamente. 

![Browser Hierarchy](https://i.imgur.com/Ndv4IES.png)

Além das funcionalidades da engine, cada ambiente de execução tem funções específicas que fazem sentido naquele contexto. Por exemplo, a função
```javascript
    document.getElementById()
```
Não faz parte do JS Vanilla. É uma função extra implementada nos browsers que permite acesso a elementos HTML do DOM. No ambiente de execução do browser isso faz sentido. 

Já o node é um ambiente de execução de servidor. Ele não possui essa função, pois no backend não há nenhum HTML-DOM sendo renderizado. Mas possui funções que fazem sentido em seu contexto, por exemplo:  
```node
fs.readFile()
```
Lê um arquivo e não existe no navegador, apenas no Node. 

A documentação guiada do Node é amigável e disponível em [nodejs.dev](https://nodejs.dev/learn/introduction-to-nodejs)

### Mongoose

O mongoose é uma biblioteca para modelar dados da sua aplicação. Ele utiliza o banco MongoDB para salvar seus dados e traduz unidirecionalmente os dados entre o banco e javascript. Assim, você pode salvar um objeto js no banco, e depois recuperar o objeto do banco em javascript. 

Tutorial expresso: [tutstus](https://www.luiztools.com.br/post/tutorial-nodejs-com-mongodb-mongoose-express-ejs/)


