// subir servidor local com express
const express = require('express')
// importar biblioteca que vai gerir os formatos dos dados
const bodyParser = require('body-parser')

// para iniciar o express
const app = express()

// métodos do express
// avisar o express do método json do bodyParser
app.use(bodyParser.json())

// porta 3000 será utilizada no servidor local
const port = 3000

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

// colocar o express para ficar ouvindo o servidor, se rola algum erro etc
// método listen receber o número da porta
// recebe também um callback, que será usado para imprimir mensagem
// obs: crase e não aspas simples
app.listen(port, () => console.log(`servidor ok na porta ${port}`))

// deixar tudo acima disponível pro resto da aplicação
module.exports = app