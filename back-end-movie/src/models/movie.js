 import mongoose from "mongoose";
const movieSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    Like:{
        type:String,
        required:true
    },
    img:{
type:String,
required:true
    },
    Date_of_released:{
type:String,
required:true
    }

})

export default mongoose.model("movie",movieSchema)

 
