import User from "../models/userModel.js";
import comparePassword from "../middlewares/comparePassword.js";
import gerarToken from "../middlewares/gerarToken.js";
import dontenv from 'dotenv';
dontenv.config();

const loginController = async (req, res) => {
    const {email, password} =req.body;
    

  if (!email || !password) {
    return res
      .status(400)
      .json({ mensagem: "Todos os campos devem ser preenchidos corretamente" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user)
      return res.status(404).json({ mensagem: "Empresa nao cadastrada" });

    const compararSenha = await comparePassword(password, user.password);

    if (compararSenha) {
      const token = gerarToken(user.empresa, user.acesso);
      return res.status(200).json({
        mensagem: "Login bem-sucedido",
        token: token,
      });
    } else {
      return res.status(404).json({ mensagem: "Senha invalida." });
    }
  } catch (error) {
       res.status(500).json({ mensagem: "Erro ao se conectar com o servidor: ", error });
       console.error(error)
       return
    }
};

export default loginController;
