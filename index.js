const express = require("express")
const app = express()
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const ConnectDB = require("./database/connect")
const controller= require("./database/controller")
const { default: mongoose } = require("mongoose")
const cors = require("cors")
const PORT = process.env.PORT || 3000
mongoose.Promise = global.Promise

dotenv.config()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

console.log(process.env.PORT);

ConnectDB()

app.use(cors())
app.get("/",(req,res)=>{
    res.send("Server is Runnig")
})
app.post("/api/saveuser",controller.SaveUser)
app.post("/api/saveprivateevents",controller.createPrivateEvents)
app.get('/api/getusers',controller.FindUser)
app.get("/api/privateevents",controller.getPrivateEvents)
app.post("/api/createguest",controller.createGuestList)
app.post("/api/updateguest/:id",controller.CreateGuestData)
app.get("/api/getguest",controller.getGuest)
app.post("/api/authguest/:id",controller.AuthGuest)
app.post("/api/createpublicevent",controller.CreatePublicEvents)
app.get("/api/getpublicevents",controller.FindPublicEvents)
app.delete("/api/deleteevent/:id",controller.privateEventDelete)
app.delete("/api/deleteguestdata/:id",controller.guestDeleteData)
app.post("/api/createblogs",controller.createBlogs)
app.get("/api/getblogs",controller.findBlogs)
app.post("/api/updateblogs/:id", controller.updateBlogs)
app.post("/api/updatepublicevent/:id", controller.updatePublicEvents)
app.delete("/api/deletepublicevent/:id", controller.deletePublicEvent)
app.post('/api/updateuser/:id',controller.UpdateUser)
app.post("/api/createorder",controller.CreateOrder)
app.get("/api/getorder",controller.findOrder)
app.post("/api/updateorder/:id",controller.updateOrder)
app.delete('/api/deleteorder/:id',controller.CencelOrder)
app.listen(PORT,()=>{
    console.log(`Server is runnig on ${PORT}` );
})

