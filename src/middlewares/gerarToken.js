import jwt from 'jsonwebtoken';

const gerarToken = (empresa, acesso) => {
    const token = jwt.sign(
        {empresa: empresa, acesso: acesso},
        process.env.SECRET,
        {expiresIn: "2h"}
    )
    return token;
};

export default gerarToken;