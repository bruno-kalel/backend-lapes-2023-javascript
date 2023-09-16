// chamando ferramenta do express para facilitar
const { Router } = require('express')
// chamando a classe que controla os Produtos
const ProdutoController = require('../controllers/ProdutosController')

// iniciar o conjunto de métodos do express que foi importado
const router = Router()

// LISTAR TODOS OS PRODUTOS
// rota get para listar Produtos
router.get('/produtos', ProdutoController.listarTodosOsProdutos)

// LISTAR PRODUTO ESPECÍFICO POR ID
// rota get para pegar Produto Específico
// id indica que terá um parâmetro
router.get('/produtos/:id', ProdutoController.listaProdutoEspecifico)

// ADICIONAR UM PRODUTO NOVO
// agora é post para criar um registro novo
router.post('/produtos', ProdutoController.adicionarProduto)

// REMOVER UM PRODUTO
// agora é delete para remover um registro existente
router.delete('/produtos/:id', ProdutoController.removerProduto)

// exportar tudo para ficar disponível no resto do código, para as rotas ficarem disponíveis
module.exports = router