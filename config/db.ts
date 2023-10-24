import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import config from "config";

async function connect() {
   const dbUri = config.get<string>("dbUri");

   try {
      await mongoose.connect(dbUri);
      console.log("conectado ao banco de dados");
   } catch (e) {
      console.log("Não foi possível conectar!");
      console.log(e);
   }
}

export default connect;
