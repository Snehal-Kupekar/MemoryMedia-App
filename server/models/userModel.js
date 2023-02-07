import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name : {
        type : String,
        require: true,
        min : 3 ,
        max : 20        
    },
    password : {
        type : String,
        require: true,
    },
    passwordConf : {
        password : {
            type : String,
            require: true,
        },
    }

});

const UserModel = mongoose.model('UserModel' , userSchema);

export default UserModel;