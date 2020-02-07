# Teste aplica��o Node.js + ReactJS

### Requisitos:

    - Node.js 8+
    - Npm 6+
  
### Descri��o do desafio:
Na RPC trabalhamos diariamente com dados provenientes da Rede Globo. Um exemplo comum � a nossa grade de programa��o, que traz informa��es relevantes sobre hor�rios de programa, t�tulo, sinopse, entre outros.
Como desenvolvedor de aplica��es para web, voc� precisa construir uma aplica��o para que nossos telespectadores possam acessar a grade de programa��o da RPC. Para isso, voc� dever� consumir a API "EPG" da Globo. A aplica��o deve mostrar os programas do dia, dispostos de 00:00 at� 23:59, mostrando qual programa estar� no ar em determinada data e hora.

### Como executar:

    - Clone o repositorio na maquina
    - Acesse o diretório raiz do projeto, e use o comando no terminal : "npm install"
    - Acesse a pasta /client e use o comando no terminal : "npm install"
    - Volte para o diretorio raiz do projeto e rode o projeto com o comando "npm run dev"
    - A Página no browser abrirá automaticamente na porta localhost:3000

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
https://redeglobo.globo.com/rpc/programacao/ para construir o layout. N�o vi a nescessidade de utilizar MySQL confome pedido. por esse motivo n�o foi inserido no projeto. Creio que a maior dificuldade do meu projeto foi trabalhar corretamente com as datas. Algumas l�gicas e fun��es ficaram mal estruturadas pela pressa que acabei tendo para realizar as corre��es. Por�m espero que meu teste tenha atendido os requisitos para a vaga. 