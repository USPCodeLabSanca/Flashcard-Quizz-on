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

### Backend (Opcional)
Um jogador criou vários decks e adicionou vários cards! Ele está se preparando para um periodo de provas e precisa dessas informações quando entrar de novo, onde serão salvas essas informações? Ele também gostaria os scores dos quizzes anteriores fossem salvos, para saber seu progresso.

Parece que vamos precisar de um banco de dados agora.

Funcionalidades:
- Autenticação (usar o ip do usuário ou criar uma login simples). 
- Storage decks e cards
- Storage score 

Sugestão: Usar [Node.js](https://nodejs.org/en/) e [Mongoose](https://mongoosejs.com/docs/) como banco.
