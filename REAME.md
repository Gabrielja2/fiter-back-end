# Sejam bem vindos ao repositório backend do projeto fiter-lottery!

Este projeto foi completamente desenvolvido em TypeScript, utilizando Node.js,
Express.js, MongoDB e outras bibliotecas auxiliares como, jsonwebtoken,
bcryptjs, jest, entre algumas outras. 🚀

Foi totalmente desenvolvido seguindo os pilares da programação orientada a
objeto (POO), e seguindo alguns padrões de projeto e arquitetura, como separação
dos casos de uso em use-cases, para o nosso domínio da aplicação foi criadas as
entidade no formato de object-value, também separei as camadas em layers e main.
A camada Layer está toda a parte das entidades, as controladoras na camada
presentation, tudo que for biblioteca externa está na camada external, assim
como os repositórios, qualquer import feito de módulos external são feitos na
camada external. A camada main está todas as nossas factories para atender a
camada layer, além de conter todas as rotas e configurações rest.

# Orientações

## Antes de começar a desenvolver

👀 Leia essa parte atentamente, pois aqui você encontrará informações
importantes para rodar corretamente o projeto.

<details>
<summary><strong> 🔰 Instruções </strong></summary><br />

1. Clone o repositório

- `git clone https://github.com/Gabrielja2/fiter-back-end.git`

2. Entre na pasta do repositório que você acabou de clonar:

- `cd pasta-do-repositório`

3. Instale as dependências

- `npm install`

4. Configure as variáveis de ambiente, é <strong>Obrigatório</strong> para
   funcionar corretamente:

- Confira o arquivo .env na raiz do projeto e preencha com as variáveis de
  ambiente caso seja necessário, mas ja vou deixar elas preenchidas nesse
  exemplo, lembre que é obrigatório algumas dessas váriaveis para conseguir
  rodar o servidor como PORT, eu utilizei a porta`3030` mas pode ser qualquer
  uma que não esteja sendo usada na sua máquina, e MONGO_URL, eu utilize um
  banco postgress que criei na vercel:
  `postgres://default:4Mv6qsblwaJL@ep-twilight-morning-a4zygmwo.us-east-1.postgres.vercel-storage.com:5432/verceldb`

6. Dentro do diretório FITER-LOTTERY-BACKEND, abra um terminal, suba o
   docker-compose e depois no mesmo terminal rode o projeto:

- `docker-compose up`

- `npm run dev`

</details><br />

# Rotas

## Autenticação

São as rotas para logar ou registrar um novo usuário

<details>
<summary><strong>Rota de Login</strong></summary>

- Método: POST
- URL: API_BASE_URL/users/login
- Descrição: Realiza o login de um usuário cadastrado.
- Parâmetros de entrada:
  - email: String (obrigatório) - E-mail do usuário.
  - password: String (obrigatório) - Senha do usuário.
- Resposta de sucesso:
  - Código: 200
  - Corpo: Objeto contendo o token de autenticação do usuário e algumas
  informações.
  </details><br />

<details>
<summary><strong>Rota de Registro</strong></summary>

- Método: POST
- URL: API_BASE_URL/users/register
- Descrição: Registra um novo usuário.
- Parâmetros de entrada:
  - email: String (obrigatório) - E-mail do usuário.
  - password: String (obrigatório) - Senha do usuário.
- Resposta de sucesso:
  - Código: 201
  - Corpo: String com o email do usuário criado.
  </details><br /><br />

# ⚠️ Rotas Protegidas por Autenticação (`falta implementar`)

<details>
<summary><strong>Rota de Registro de tickets</strong></summary>

- Método: POST
- URL: API_BASE_URL/tickets/register
- Descrição: Registra um novo bilhete.
- Exemplo dos parâmetros de entrada: { "tickets": [ { "ticketId": 1, "price":
  3.00, "selectedNumbers": [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20] }, { "ticketId": 2, "price": 25000, "selectedNumbers": [ 1, 2, 3, 4, 5, 6,
  7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] } ] }
- Resposta de sucesso:
  - Código: 201
  - Corpo: String com a mensagem de criação com sucesso.
  </details><br />

<details>
<summary><strong>Rota de Registro de tickets</strong></summary>

- Método: POST
- URL: API_BASE_URL/tickets/register
- Descrição: Registra um novo bilhete.
- Exemplo dos parâmetros de entrada: { "tickets": [ { "ticketId": 1, "price":
  3.00, "selectedNumbers": [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20] }, { "ticketId": 2, "price": 25000, "selectedNumbers": [ 1, 2, 3, 4, 5, 6,
  7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] } ] }
- Resposta de sucesso:
  - Código: 201
  - Corpo: String com a mensagem de criação com sucesso.
  </details><br />

<details>
<summary><strong>Rota de busca de configuração dos tickets</strong></summary>

- Método: GET
- URL: API_BASE_URL/ticket-config
- Descrição: Lista as configurações do bilhete.
- Resposta de sucesso:
  - Código: 200
  - Corpo: Um array com as configuração de preço e numeros selecionados.
  </details><br />

<details>
<summary><strong>Rota de busca de configuração dos sorteios e os premios</strong></summary>

- Método: GET
- URL: API_BASE_URL/prize-draw-config
- Descrição: Lista as configurações do sorteio.
- Resposta de sucesso:

  - Código: 200
  - Corpo: Um array com as configuração de prêmio e numeros sorteados.
  </details><br />

<details>
<summary><strong>Rota de busca de configuração dos sorteios e os premios</strong></summary>

- Método: POST
- URL: API_BASE_URL/prize-draw-result
- Descrição: Cria o sorteio faz todas as açoes necessárias nesse fluxo.
- Resposta de sucesso:
  - Código: 201
  - Corpo: String com a mensagem de criação com sucesso do sorteio.
  </details><br />
