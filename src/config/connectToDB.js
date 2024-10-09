import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectToDB = async() =>{
    try {
        const respose = await mongoose.connect(process.env.URI,{
            dbName:"gestor",
            serverSelectionTimeoutMS: 5000
        });

        console.log("Banco de dados conectado.");
    } catch (error) {
        console.log("Erro ao conectar ao banco de dados: ", error);
    }
}

export default connectToDB;