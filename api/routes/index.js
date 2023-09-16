// importar biblioteca que vai gerir os formatos dos dados
const bodyParser = require('body-parser')
const produtos = require('./produtosRoute')

module.exports = app =>
{
    // rota de teste, primeiro teste
    // método get do express funciona de forma parecida ao método get do http
    // recebe dois parâmetros,
    // parâmetro 1 nome da rota que será testada
    // parâmetro 2 função callback que recebe requisição e passa resposta
    // uma dessas informações vai ser a situação da requisição
    // depois se envia uma informação de volta
    app.get('/teste', (req, res) => res
        .status(200)
        .send({mensagem: 'boas-vindas'}))

    app.use(bodyParser.json())
    app.use(produtos)
    // teste, segundo teste
    app.get('/', (req, res) => res.send('aqui'))
}