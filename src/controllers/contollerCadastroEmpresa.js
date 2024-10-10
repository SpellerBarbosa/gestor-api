import User from "../models/userModel.js";

const controllerCadastroEmpresa = async (req, res) =>{
    const {empresa, email, password, acesso } = req.body;

    if(!empresa || !email || !password || !acesso){
        return res.status(404).json({mensagem:"Todos os campos são obrigatorios"});
    }

    try {
        const user = await User.findOne({email});

        if(!user){
            return res.status(401).json({mensagem: "Empresa não cadastrada."});
        }

        const newUser = await User.create({
            empresa: empresa.toLowerCase().trim(),
            email: email.toLowerCase().trim(),
            password:password.toLowerCase().trim(),
            acesso: acesso.toLowerCase().trim(),
        });

        if(newUser){
            return res.status(200).json({mensagem:"Empresa cadastrada com sucesso."});
        }else{
            return res.status(400).json({mensagem:"Não foi possivel efetuar o cadastro"});
        }
    } catch (error) {
        console.log("Erro ao conectar ao servidor: ", error)
        return res.status(500).json({mensagem:"Error ao se conectar ao servidor."});
    }
}

export default controllerCadastroEmpresa;