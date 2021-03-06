import * as mongoose from "mongoose";
import User from "./user.interface";


const userSchema = new mongoose.Schema({
    uuid: String,
    name: String,
    email: String,
    password: String,
    rg: String,
    CPF: Number,
    historic: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        require: false
    }]
});

const userModel = mongoose.model<User & mongoose.Document>('User', userSchema);

export default userModel;