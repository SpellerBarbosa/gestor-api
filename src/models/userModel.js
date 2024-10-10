import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    empresa:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    acesso:{
        type: String,
        required: true
    }
});

userSchema.pre('save', async function(next) {
    const user = this;

    if(!user.isModified('password')) return next();

    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);

        user.password = hash;
        next();
    }catch(error){
        next(error)
    }
});

const User = mongoose.model("User", userSchema);

export default User;
