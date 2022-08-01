const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next)=>{
    
    res.status(200).send({
        mensagem: 'retorna os produtos'
    });
}); 

//INSERE UM PRODOTO
router.post('/', (req, res, next)=>{
    const produto = {
        nome: req.body.nome,
         preco: req.body.preco
     }
    res.status(201).send({
        mensagem: 'Produto criado',
        produtoCriado: produto
    });
}); 

//RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next) =>{
    const id = req.params.id_produto;
    res.status(200).send({
        mensagem: 'Detalhes do produto',
        id: id
    })
})

//ALTERA UM PRODUTO
router.patch('/', (req, res, next)=>{
    res.status(201).send({
        mensagem: 'Editar produtos'
    });
}); 

//DELETA UM PRODUTO
router.delete('/', (req, res, next)=>{
    res.status(201).send({
        mensagem: 'Produto excluido'
    });
}); 

module.exports = router;