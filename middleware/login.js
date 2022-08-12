const jwt = require('jsonwebtoken');

exports.obrigatorio = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.usuario = decode;
        next()
    }catch(error){
        return res.status(401).send(
            {
                mensagem: 'Falha na autenticação',
                request: {
                    tipo: 'GET',
                    descricao: 'Faça o logim para ter acesso a está função',
                    url: 'http://localhost:3000/usuarios/login '
                }
            });
    }
}

exports.opcional = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.usuario = decode;
        next()
    }catch(error){
        next();
    }
}