// controlador vai se conectar com o modelo
// é preciso dizer onde estão os modelos
const database = require('../models')

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

    static async listaProdutoEspecifico(req, res)
    {
        const { id } = req.params
        try
        {
            // método findOne() do Sequelize consulta tabela e traz uma entrada específica
            // SELECT * FROM tabela WHERE id = 4; vira findAll() com parâmetro, te amo Sequelize
            const produtoEspecifico = await database.Produtos.findOne(
                {
                    where:
                        {
                            // primeiro id daqui é a coluna, segundo id na linha é o valor que vai com a url (postman)
                            id:Number(id)
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
}



// deixar tudo disponível para ser usado em outros lugares do código
module.exports = ProdutosController