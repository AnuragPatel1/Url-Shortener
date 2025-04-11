import express from "express";
import {shortenerRoutes} from "./routes/shortener.routes.js";
import { authRoutes } from "./routes/auth.routes.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");

// express router
app.use(shortenerRoutes);
app.use(authRoutes);

app.listen(PORT,()=>{
    console.log("Server running at port ", PORT);
})
