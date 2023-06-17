import express,{Express,Request,Response} from "express";
const app : Express = express();


app.get("/", (req: Request,res:Response)=>{res.send("v0 api")})

 
app.listen(5000,()=>{console.log("XServer Running on port 5k!")})

module.exports = app