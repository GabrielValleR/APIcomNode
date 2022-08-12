const { response } = require('express');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const login = require('../middleware/login')

const ProdutoController = require('../controllers/produtos-controller')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace('-', '').replace('-', '')
        .replace('T', '').replace(':', '').replace(':', '').replace('.', '')
        .replace('Z', '') + file.originalname);
    }
});


const upload = multer({
    storage: storage,
    limits:{
        filesSize:1024 * 1024 * 5
    }
});


//RETORNA TODOS OS PRODUTOS
router.get('/',ProdutoController.getProdutos ); 
//INSERE UM PRODOTO
router.post('/',login.obrigatorio, upload.single('imagem_produto'), ProdutoController.postProdutos ); 
//RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produtos', ProdutoController.getUmProduto )
//ALTERA UM PRODUTO
router.patch('/',login.obrigatorio, ProdutoController.patchAlteraProduto ); 
//DELETA UM PRODUTO
router.delete('/',login.obrigatorio, ProdutoController.delete); 

module.exports = router;