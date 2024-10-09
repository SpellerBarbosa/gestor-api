import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) =>{
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
 

   
    if(!token) return res.status(403).json({msg: "Não foi enviado o Token"});

    jwt.verify(token, process.env.SECRET, (err, decoded) =>{
        if(err) return res.status(401).json({msg: "Acesso nao autorizado"});


        req.user = decoded
        next()
    });

}

export default verifyToken;