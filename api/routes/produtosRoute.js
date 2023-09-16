// chamando ferramenta do express para facilitar
const { Router } = require('express')
// chamando a classe que controla os Produtos
const ProdutoController = require('../controllers/ProdutosController')

// iniciar o conjunto de métodos do express que foi importado
const router = Router()

// rota get pra pegar Produtos
router.get('/produtos', ProdutoController.listarTodosOsProdutos)

// rota get para pegar Produto Específico
// :id indica que terá um parâmetro
router.get('/produtos/:id', ProdutoController.listaProdutoEspecifico)

// exportar tudo para ficar disponível no resto do código, para as rotas ficarem disponíveis
module.exports = router