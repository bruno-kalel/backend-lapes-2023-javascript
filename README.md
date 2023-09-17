# backend-lapes

# Antes de tudo, uma palavrinha do autor
O horário da criação deste repositório foi quando comecei a trabalhar no projeto e, do mesmo modo, o horário do último commit foi a hora que parei.<br>
Sei bem que a janela disponibilizada para o desenvolvimento do projeto foi bem maior, porém foi isto que ocorreu.<br>
Em algumas horas, fui capaz de desenvolver o que estão vendo. Tenho certeza que poderei fazer muito mais caso seja aceito na equipe!<br>
Agradecimentos especiais ao professor Isaac por ter me recomendado buscar por ORM em um projeto anterior e, assim, ter contribuído muito ao conhecimento prévio que apliquei aqui. Podem pedir recomedações minhas pra ele!<br>
Sem mais, desejo um bom debug! Fico à disposição para quaisquer esclarecimentos.
 
## O que utilizei para desenvolver este projeto
+ WebStorm 2023.2.1
+ pgAdmin 4
+ Postman 10.18.2
+ Nescau Achocolatado em Pó, 370G

## Framework escolhido
Node.js 20.6.1

## Banco de dados escolhido
PostgreSQL 16.0

## ORM escolhido
Sequelize

## Dependências do Node.js utilizadas no projeto
### body-parser v1.20.2
Gerir os formatos de dados retornados e convertê-los em json
### express" v4.18.2
Subir um servidor local
### path v0.12.7
Gerir o caminho das pastas para o sequelize, já que usei uma estrutura diferente da padrão mencionada na documentação, seu uso pode ser visto no arquivo .sequelizerc
### pg v8.11.3
Gerenciar o postgres
### pg-hstore v2.3.4
Converter e desconverter json em um formato que o postgres entenda
### sequelize v6.33.0
ORM escolhida
### sequelize-cli v6.6.1
Command-line-interface do sequelize para fazer algumas coisas que precisaria fazer no pgadmin já no terminal, como criar tabelas e atualizar seus valores
### nodemon v3.0.1
Recarregar o servidor sempre que uma atualização no código fosse feita, e não precisar derrubá-lo e subi-lô de novo toda vez

## Documentação de rotas (Swagger)
Vou ficar devendo essa por motivos de: uma palavrinha do autor (o primeiro parágrafo desse README).
De todo modo, aqui vão as rotas que podem ser utilizadas por uma ferramenta como o Postman para fazer requisições, que também podem ser conferidos em ./api/routes/produtosRoute.js:
### Listar todos os produtos (GET)
`http://localhost:3000/produtos`

### Encontrar um produto por nome (GET)
`http://localhost:3000//produtos/:nome`<br><br>
<u>:nome</u> é o nome do produto

### Encontrar um produto por categoria (GET)
`http://localhost:3000//produtos/categoria/:categoria`<br><br>
<u>:categoria</u> é o nome da categoria

### Adicionar um produto novo (POST)
`http://localhost:3000/produtos`

### Remover um produto (DELETE)
`http://localhost:3000//produtos/:id`<br><br>
<u>:id</u> é o id do produto

### Buscar produto por intervalo de preço (GET)
`http://localhost:3000/produtos/:precoMinimo/:precoMaximo`<br><br>
<u>:precoMinimo</u> é o preço mínimo da busca e <u>:precoMaximo</u> é o preço máximo da busca, ambos em formato int (ex:1) ou float (ex: 1.99)

### Ordenar produtos por mais relevantes (GET)
`http://localhost:3000/ordenarPorMaisRelevante`

### Ordenar produtos por menos relevantes (GET)
`http://localhost:3000/ordenarPorMenosRelevante`

### Na pasta <u>capturas-de-tela</u>-postman aqui do repositório tem capturas de tela utilizando todos estes! Vale a pena conferir!

## Diagrama ER (Entidade-Relacionamento)
Criei apenas uma tabela para ser utilizada no projeto por motivos de: uma palavrinha do autor (o primeiro parágrafo desse README).
Então não tem motivo para eu linkar o diagrama aqui. A ideia era criar pelo menos outras tabelas como categorias, carrinho, etc. e depois linká-las (foreign e primary key).

## Diagrama UML de Classes
Disponível em ./diagramas/uml-classes.png

## Estrutura de pastas
MVC (Model-View-Controller)<br>
Controladores podem ser vistos em ./api/controllers/ProdutosControllers.js