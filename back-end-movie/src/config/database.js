import mongoose from "mongoose";


  /*   const db=mongoose.connection;
    db.on("conecting",()=>{
        console.log("conectado a la base de datos🟡");
    });
    db.on("connected",()=>{
        console.log("Se ha conectado en la base de datos 🟢");
    });
    db.on("error",()=>{
        console.log("Error al conecctarse en la base🔴");
    })
    export default ()  => {
        mongoose.connect(config.database.uri)
    } */

    const uri = "mongodb+srv://admin:LhOQhyxu2g5x6RQr@cluster0.zzp5lst.mongodb.net/test";

export default async function(){
    try{
       await mongoose.connect( uri, {
    useNewUrlParser: true,
     useUnifiedTopology: true
 } ) 
 console.log("Cnectad en la base de datos");
    }catch(error){
        return console.log(error);
    }

    



} 

    