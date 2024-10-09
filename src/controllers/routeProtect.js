
const  routerProtect =  (req, res) =>{
    res.status(201).json({msg: " Voce acessou a rota protegida",  user: req.user})
}

export default routerProtect;