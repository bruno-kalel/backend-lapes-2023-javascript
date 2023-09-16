// chamando ferramenta do express para facilitar
const { Router } = require('express')
// chamando a classe que controla os Produtos
const ProdutoController = require('../controllers/ProdutosController')

// iniciar o conjunto de métodos do express que foi importado
const router = Router()

// LISTAR TODOS OS PRODUTOS
// rota get para listar Produtos
router.get('/produtos', ProdutoController.listarTodosOsProdutos)

// ENCONTRAR UM PRODUTO POR NOME
// rota get para pegar Produtos Específicos,
// nome indica que terá um parâmetro
router.get('/produtos/:nome', ProdutoController.buscarProdutoPorNome)

// ENCONTRAR UM PRODUTO POR CATEGORIA
router.get('/produtos/categoria/:categoria', ProdutoController.buscarProdutoPorCategoria)

// ADICIONAR UM PRODUTO NOVO
// agora é post para criar um registro novo
router.get('/produtos', ProdutoController.adicionarProduto)

// REMOVER UM PRODUTO
// agora é delete para remover um registro existente
router.delete('/produtos/:id', ProdutoController.removerProduto)

// BUSCAR PRODUTO POR INTERVALO DE PRECO
router.get('/produtos/:precoMinimo/:precoMaximo', ProdutoController.buscarPorIntervaloPreco)

// exportar tudo para ficar disponível no resto do código, para as rotas ficarem disponíveis
module.exports = router