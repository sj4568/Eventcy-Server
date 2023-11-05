const {User,PrivateEvents, Guest, PublicEvent, Blogs, Order} = require("./model")
//User Section Start


exports.SaveUser = (req,res) =>
{
    const {fname,email,phone,pass1,img} = req.body

    if(fname && email && phone && pass1)
    {
        User.create({
            fname,
            email,
            phone,
            pass1,
            img:img
        })
         .then(data=>res.json(data))
        console.log(req.body);
    }
    else
    {
        console.log("Fill All Data");
    }
}
exports.FindUser = (req,res) =>
{
    User.find()
     .then(user=>res.json(user))
}
exports.UpdateUser = (req, res) =>
{
    const id = req.params.id
    User.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data => res.send(data))
        .catch(err=>console.log(err))

}
//User Section End

//Private Event Section Start
exports.createPrivateEvents= (req,res) =>
{
    const {id,fname,email,phone,event_name,event_type,g_num,rand_id}=req.body
    if(fname && email && phone && event_name && event_type && g_num)
    {
        PrivateEvents.create({
            id,
            fname,
            email,
            phone,
            event_name,
            event_type,
            g_num,
            rand_id
            
        })
        .then(user=>res.json(user))
        console.log(req.body);
    }
}
exports.getPrivateEvents = (req,res) =>
{
    PrivateEvents.find()
     .then(data=>res.json(data))
}

// Private Event Section End

//Guest Secton Start
exports.createGuestList = (req,res) =>
{
    const {id,guest} = req.body
    Guest.create({
        id,
        guest
    })
     .then(data=>res.json(data))

}
exports.CreateGuestData = (req,res) =>
{
    const id = req.params.id
    Guest.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
     .then(data=>res.json(data))
}
exports.getGuest = (req,res) =>
{
    Guest.find()
     .then(data=>res.json(data))
}
exports.AuthGuest = (req,res)=>
{
    const id = req.params.id
    const data = JSON.parse(req.body.data)
    Guest.findByIdAndUpdate(id,data,{useFindAndModify:false})
     .then(data=>res.json(data))
    
    
}
//Guest Section End

//Public Event Section Start
exports.CreatePublicEvents = (req,res)=>
{
    const data = req.body
    PublicEvent.create(data)
     .then(dat=>res.json(dat))

}
exports.FindPublicEvents = (req,res) =>
{
    PublicEvent.find()
     .then(data=>res.send(data))
}
exports.updatePublicEvents = (req, res) =>
{
    const id = req.params.id
    PublicEvent.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => res.send(data))
        .catch(err=>console.log(err))

}
exports.deletePublicEvent = (req, res) =>
{
    const id = req.params.id
    PublicEvent.findByIdAndDelete(id)
        .then(data => res.send(data))
        .catch(err => console.log(err))
    
    
}
exports.privateEventDelete = (req,res)=>
{
    const id = req.params.id
    PrivateEvents.findByIdAndDelete(id)
     .then(user=>res.send(user))
     .catch(err=>console.log(err))
}
exports.guestDeleteData=(req,res) =>
{
    const id = req.params.id
    Guest.findByIdAndDelete(id)
     .then(data=>res.send(data))
     .catch(err=>console.log(err))
}
exports.createBlogs = (req,res) =>
{
    const data = req.body
    Blogs.create(data)
     .then(blog=>res.json(blog))
     .catch(err=>console.log(err))
}
exports.findBlogs = (req,res) =>
{
    Blogs.find()
     .then(blog=>res.json(blog))
     .catch(err=>console.log(err))
}
exports.updateBlogs = (req,res) =>
{
    const id = req.params.id
    Blogs.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
     .then(blog=>res.send(blog))
     .catch(err=>console.log(err))
}
exports.DeleteBlog = (req, res) => {
    const id = req.params.id
    Blogs.findByIdAndDelete(id)
        .then(blog => res.send(blog))
        .catch(err => console.log(err))
    
}
exports.CreateOrder = (req,res) =>
{
    Order.create(req.body)
        .then(data=>res.json(data))
        .catch(err=>console.log(err))
}
exports.findOrder = (req,res) =>
{
    Order.find()
        .then(data=>res.json(data))
}
exports.updateOrder = (req,res) =>
{
    const id = req.params.id
    Order.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data=>res.send(data))
}
exports.CencelOrder = (req,res)=>
{
    const id = req.params.id
    Order.findByIdAndDelete(id)
        .then(data=>res.json(data))
}
