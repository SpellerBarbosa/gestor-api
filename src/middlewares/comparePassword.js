import bcrypt from 'bcrypt';

const comparePassword = async (password, hashPassword) =>{
    try {
        const isMatch = await bcrypt.compare(password, hashPassword);

        return isMatch;
    } catch (error) {
        console.error("Erro ao comparar senhas: ", error);
        throw error;
    }
};

export default comparePassword;