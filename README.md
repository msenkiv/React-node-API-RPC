# Teste aplicação Node.js + ReactJS

### Requisitos:

    - Node.js 8+
    - Npm 6+
  
### Descrição do desafio:
Na RPC trabalhamos diariamente com dados provenientes da Rede Globo. Um exemplo comum é a nossa grade de programação, que traz informações relevantes sobre horários de programa, título, sinopse, entre outros.
Como desenvolvedor de aplicações para web, você precisa construir uma aplicação para que nossos telespectadores possam acessar a grade de programação da RPC. Para isso, você deverá consumir a API "EPG" da Globo. A aplicação deve mostrar os programas do dia, dispostos de 00:00 até 23:59, mostrando qual programa estará no ar em determinada data e hora.

### Como executar:

    - Clone o repositorio na maquina
    - Acesse o diretÃ³rio raiz do projeto, e use o comando no terminal : "npm install"
    - Acesse a pasta /client e use o comando no terminal : "npm install"
    - Volte para o diretorio raiz do projeto e rode o projeto com o comando "npm run dev"
    - A PÃ¡gina no browser abrirÃ¡ automaticamente na porta localhost:3000

### biliotecas utilizadas
#### Node 13.6.0:
  - Moment - trabalhar com as horas do projeto
  - axios - realiza as chamadas http
  - concurrently - dependencia para rodar os react e o node no mesmo comando
#### React 16.12.0:
  - axios - chamadas API
 -   material-icons - Icones do material
    -   moment - trabalhar com horas
    -   react-datepicker - input de hora
    -   react-rainbow-components": "^1.12.0

#### Notas do desenvolvimento

Realizei o desenvolvimento construindo um backend em node para consumir e tratar dos dados que precisaria para o front. No front me basiei no site :
https://redeglobo.globo.com/rpc/programacao/ para construir o layout. Não vi a nescessidade de utilizar MySQL confome pedido. por esse motivo não foi inserido no projeto. Creio que a maior dificuldade do meu projeto foi trabalhar corretamente com as datas. Algumas lógicas e funções ficaram mal estruturadas pela pressa que acabei tendo para realizar as correções. Porém espero que meu teste tenha atendido os requisitos para a vaga. 