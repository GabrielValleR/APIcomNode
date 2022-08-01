const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}))// apenas dadaos simples
app.use(bodyParser.json());//so aceitamos json de entrada no body

app.use((req,res,next)=>{
    res.header('Accens-Control-Allow-Origin','*');
    res.header(
        'Acces_Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accpet, Authorization'
    );

    if (req.method === 'OPTIONS'){
         res.header('Access-Control_Allow-Methods','PUT, POST, PATCH, DELETE, GET');
         return res.status(200).send({}); 
    }

    next();
})

app.use('/produtos', rotaProdutos); 
app.use('/pedidos', rotaPedidos); 

//QUANDO NÃO ENCONTRA ROTA
app.use((req,res,next)=>{
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error,req,res,next) =>{
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

module.exports = app;