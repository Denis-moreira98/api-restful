import express from "express";
import config from "config";

const app = express();

//JSON middleware
app.use(express.json());

//Router
import router from "./router";

app.use("/api/", router);

// app port
const port = config.get<Number>("port");

app.listen(port, async () => {
   console.log("Aplicação funcionando");
});