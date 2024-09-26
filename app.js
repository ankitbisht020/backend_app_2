const express = require('express');
const app =express();
const user =require('./monogose')
const fs =require('fs'); 
require('dotenv').config()

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine','ejs');

app.get('/', (req, res) => {
    console.log(`app started on port : ${process.env.port}`);
    res.render('index.ejs');
});


app.post('/create',  async(req, res) => {
 
    try{
        let {name,email,age,imageurl}=req.body;
        const usercreate=await user.create({
            name,
            email,
            age,
            imageurl
        });
        res.redirect('/');
    } catch (err) {
       res.send("Error detected");
    }
});

app.post('/update/:id',  async(req, res) => {
 
    try{
        let {name,email,age,imageurl}=req.body;
        const usercreate=await user.findOneAndUpdate({_id:req.params.id},{
            name,
            email,
            age,
            imageurl
        });
        res.redirect('/users');
    } catch (err) {
       res.send("Error detected");
    }
});

app.get('/users',async(req,res)=>{
    const users = await user.find();
    res.render(('Users'),{users});
    
})

app.get('/delete/:id',async(req,res)=>{
    let users = await user.findOneAndDelete({_id:req.params.id});
    res.redirect('/users');
    
})

app.get('/edit/:id',async(req,res)=>{
    let users = await user.findOne({_id:req.params.id});
    res.render('edit',{users});
    
})

app.listen((process.env.port),()=>{
    console.log(`app startded on port:${process.env.port}`);
}
);