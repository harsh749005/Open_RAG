import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    reached:{type:String, required:true},
    description:{type:String, required:true},
    timing:{type:Date, default: Date.now},
});

const userModel = mongoose.models.user || mongoose.model("User", userSchema)

export default userModel;
