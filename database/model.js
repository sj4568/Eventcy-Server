const mongoose = require('mongoose')

const user = mongoose.Schema({
    img:String,
    fname:String,
    email:String,
    phone:String,
    pass1:String
})
const privateEvents = mongoose.Schema({
    id:String,
    fname:String,
    email:String,
    phone:String,
    event_name:String,
    event_type:String,
    g_num:String,
    rand_id:Number
})

const guest = mongoose.Schema({
    id:Number,
    guest:Array
})
const publicEvent = mongoose.Schema({
    userName:String,
    userImg:String,
    postedTime:String,
    name:String,
    place:String,
    time:String,
    date:String,
    price:String,
    eventImg:String,
    eventType:String,
    des:String,
    status:String,
    id:String
})
const blogs = mongoose.Schema({
    userName:String,
    userId:String,
    userImg:String,
    postedTime:String,
    des:String,
    blogImg:String,
    name:String,
    like:Array,
    comment:Array,
    share:Array
})
const order = mongoose.Schema({
    order:Object
})
const User = mongoose.model("user",user)
const PrivateEvents =mongoose.model("Private_Events",privateEvents)
const Guest = mongoose.model("Guest",guest)
const PublicEvent = mongoose.model("PublicEvents",publicEvent)
const Blogs = mongoose.model("Blogs",blogs)
const Order = mongoose.model("Order",order)
module.exports = {User,PrivateEvents,Guest,PublicEvent,Blogs,Order}