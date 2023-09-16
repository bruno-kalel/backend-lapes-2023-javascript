// subir servidor local com express
const express = require('express')

// chamar a pasta de rotas, para esse código aqui acessar lá
const routes = require('./routes')

// para iniciar o express
const app = express()

// porta 3000 será utilizada no servidor local
const port = 3000

// importando métodos de routes, mandando o express lá para routes
routes(app)

// colocar o express para ficar ouvindo o servidor, se rola algum erro etc
// método listen receber o número da porta
// recebe também um callback, que será usado para imprimir mensagem
// obs: crase e não aspas simples
app.listen(port, () => console.log(`servidor ok na porta ${port}`))

// deixar tudo acima disponível pro resto da aplicação
module.exports = app