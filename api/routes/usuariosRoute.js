// chamando ferramenta do express para facilitar
const { Router } = require('express')
// chamando a classe que controla os Usuarios
const UsuarioController = require('../controllers/UsuariosController')

// iniciar o conjunto de métodos do express que foi importado
const router = Router()
// rota get pra pegar Usuarios
router.get('/usuarios', UsuarioController.listarTodosOsUsuarios)

// exportar tudo para ficar disponível no resto do código, para as rotas ficarem disponíveis
module.exports = router