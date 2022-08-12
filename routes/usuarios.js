const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UsuarioController = require('../controllers/usuarios-controller')

router.post('/cadastro', UsuarioController.cadastrarUsuario)

router.post('/login', UsuarioController.loginUsuario)

module.exports = router;