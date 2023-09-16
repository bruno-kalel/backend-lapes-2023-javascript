// controlador vai se conectar com o modelo
// é preciso dizer onde estão os modelos
const database = require('../models')

class UsuariosController
{
    // static para ser chamado sem a necessidade de uma nova instância
    // async para esperar resolver cada método interno para devolver
    static async listarTodosOsUsuarios(req, res)
    {
        try
        {
            // método findAll() do Sequelize consulta tabela e traz tudo
            // o que seria select * from blá blá blá vira findAll(), te amo Sequelize
            // sendo assim, única coisa necessária é tratar os dados
            const todosOsUsuarios = await database.Usuarios.findAll()
            return res.status(200).json(todosOsUsuarios)
        }
        catch (error)
        {
            // se der errado, o erro aparece na própria requisição (postman)
            return res.status(500).json(error.message)
        }
    }
}

// deixar tudo disponível para ser usado em outros lugares do código
module.exports = UsuariosController