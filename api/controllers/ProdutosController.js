// controlador vai se conectar com o modelo
// é preciso dizer onde estão os modelos
const database = require('../models')
const Sequelize = require('sequelize');
const { Op } = Sequelize;

class ProdutosController
{
    // static para ser chamado sem a necessidade de uma nova instância
    // async para esperar resolver cada método interno para devolver
    static async listarTodosOsProdutos(req, res)
    {
        try
        {
            // método findAll() do Sequelize consulta tabela e traz tudo
            // o que seria select * from blá blá blá vira findAll(), te amo Sequelize
            // sendo assim, única coisa necessária é tratar os dados
            const todosOsUProdutos = await database.Produtos.findAll()
            return res.status(200).json(todosOsUProdutos)
        }
        catch (error)
        {
            // se der errado, o erro aparece na própria requisição (postman)
            return res.status(500).json(error.message)
        }
    }

    static async buscarProdutoPorNome(req, res)
    {
        const { nome } = req.params
        try
        {
            // método findAll() do Sequelize consulta tabela
            // SELECT * FROM tabela WHERE nome = nome1; vira findAll() com parâmetro, te amo Sequelize
            const produtoEspecifico = await database.Produtos.findAll(
                {
                    where:
                        {
                            // primeiro id daqui é a coluna, segundo id na linha é o valor que vai com a url (postman)
                            nome:String(nome)
                        }
                }
            )
            return res.status(200).json(produtoEspecifico)
        }
        catch (error)
        {
            // se der errado, o erro aparece na própria requisição (postman)
            return res.status(500).json(error.message)
        }
    }

    static async buscarProdutoPorCategoria(req, res)
    {
        const { categoria } = req.params
        try
        {
            const produtosPorCategoria = await database.Produtos.findAll(
                {
                    where:
                        {
                            categoria:String(categoria)
                        }
                }
            )
            return res.status(200).json(produtosPorCategoria)
        }
        catch (error)
        {
            // se der errado, o erro aparece na própria requisição (postman)
            return res.status(500).json(error.message)
        }
    }

    static async adicionarProduto(req, res)
    {
        const novoProduto = req.body
        try
        {
            const novoProdutoCriado = await database.Produtos.create(novoProduto)
            return res.status(200).json(novoProdutoCriado)
        }
        catch (error)
        {
            // se der errado, o erro aparece na própria requisição (postman)
            return res.status(500).json(error.message)
        }
    }

    static async removerProduto(req, res)
    {
        const { id } = req.params
        try
        {
            await database.Produtos.destroy(
                {
                    where:
                        {
                            // primeiro id daqui é a coluna, segundo id na linha é o valor que vai com a url (postman)
                            id:Number(id)
                        }
                }
            )
            return res.status(200).json({mensagem: `id ${id} deletado`}
            )
        }
        catch (error)
        {
            // se der errado, o erro aparece na própria requisição (postman)
            return res.status(500).json(error.message)
        }
    }

    static async buscarPorIntervaloPreco(req, res)
    {
        const { precoMinimo } = req.params
        const { precoMaximo } = req.params

        try
        {
            const listaDeProdutos = await database.Produtos.findAll(
                {
                    where: {preco: {[Op.between]: [precoMinimo, precoMaximo]}}
                }
            )
            return res.status(200).json(listaDeProdutos)
        }
        catch (error)
        {
            // se der errado, o erro aparece na própria requisição (postman)
            return res.status(500).json(error.message)
        }
    }

}



// deixar tudo disponível para ser usado em outros lugares do código
module.exports = ProdutosController