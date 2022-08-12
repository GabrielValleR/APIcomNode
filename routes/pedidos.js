const express = require('express');
const router = express.Router();

const PedidosController = require('../controllers/pedidos-cotroller')


//RETORNA TODOS OS PEDIDO
router.get('/', PedidosController.getPedidos); 
//INSERE UM PEDIDO
router.post('/', PedidosController.postPedidos); 
//RETORNA OS DADOS DE UM PEDIDO
router.get('/:id_pedidos', PedidosController.getUmPedido)
//DELETA UM SERVICO
router.delete('/', PedidosController.delete); 

module.exports = router;