import mongoose  from 'mongoose'

const dbconnction =  async()=>{
      
    mongoose.set('strictQuery', true);
     try{
        const mongoURL = process.env.MONGO_CONNECTION as string;
        const connect = await mongoose.connect(mongoURL)
        if(connect){
            console.log("connected sucessfull mongo ")
           
        }
     
     }catch(error){

        
         console.log("MONGO nOT conneted")
         console.log(error)
         console.error(error);
     }
    
}

export default dbconnction