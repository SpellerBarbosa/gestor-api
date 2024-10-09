import express from "express";
import cors from 'cors';
import connectToDB from "./config/connectToDB.js";
import router from "./routes/routes.js";

class App{
    constructor(){
        this.server = express();
        this.port = process.env.PORT || 3001;
        connectToDB();

        this.middlewares();
        this.routes();

    }

    middlewares(){
        this.server.use(express.json());
        this.server.use(cors());
    }

    routes(){
        this.server.use(router);
    }

    start(){
        this.server.listen(this.port,()=>{
            console.log(`http://localhost:${this.port}/api`);
        });
    }
}

export default App;