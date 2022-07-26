const yargs=require('yargs')(process.argv);
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")

const rootdir = (() => {
    temp = __dirname.split("/");
    temp.pop();
    return temp.join("/");
})()

const port = process.env.PORT || yargs.port || 3000;

(async () => {
    await mongoose.connect(process.env.MONGODB || "mongodb://localhost/database", { useNewUrlParser: true, useUnifiedTopology: true });
    const app = express();

    let mode=process.env.NODE_ENV||process.env.mode||((yargs.argv.dev)?"development":"production");
    if(mode==="development"){
        const livereload = require("livereload");
        const connectLivereload = require("connect-livereload");
        const server=livereload.createServer();
        server.watch(rootdir+"/public");
        app.use(connectLivereload());
    }
    
    app.set("view engine", "twig")
        .set("views", rootdir + "/views");

    app.use(bodyParser.json())
        .use(bodyParser.urlencoded({ extended: true }))
        .use(cors())
        .use(express.static(rootdir + "/public"));

    app
        .route('/')
        .get(async (req, res) => {
            res.render("index.twig",{
                project:{
                    title:"Your has been configured to run in "+mode+" mode",
                }
            })
        })
        .post(async (req, res) => {
            res.json({ status: "success", message: "Not implemented" })
        })
        .put(async (req, res) => {
            res.json({ status: "success", message: "Not implemented" })
        })
        .patch(async (req, res) => {
            res.json({ status: "success", message: "Not implemented" })
        })
        .delete(async (req, res) => {
            res.json({ status: "success", message: "Not implemented" })
        })
    app.listen(port,()=>{
        console.log("App has been started on port "+port);
    });
})();