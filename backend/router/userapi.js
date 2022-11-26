const express = require('express')
const { findById } = require('../models/user')
const router = express.Router() //routing function
const DATA = require('../models/user') // DB of blg
var jwt = require('jsonwebtoken');
const { application } = require('express');

// //view full list of posts 
// router.get('/userlist',async(req,res)=>{
// try{
// const list=await DATA.find()
// res.send(list)
// console.log(list)

// }catch(error){
//     console.log(error);
// }

// })

// //single post
// router.get('/blog/:id',async(req,res)=>{
//     try{

//     }catch(error){

//     }
// })
router.post('/login',(req,res)=>{
    let userData=req.body;
    var flag=false;

    DATA.find().then(function(user){
        console.log("user",user);
        
        for(let i=0;i<user.length;i++){
            if(userData.email==user[i].email && userData.password==user[i].password){

                flag=true;
                break;
            }else{
                flag=false;
            }
        }
        if(flag==true){
            let payload={subject:userData.email+userData.password}
            let token =jwt.sign(payload,"secretKey");
            res.status(200).send({token});
            }
            else{
                res.status(401).send("invalid credentials")
            }
        
    });


});




//post nre user
router.post('/user', async (req, res) => {
    try {

        console.log(req.body)
        let item = {  //to fetch and save data from front end in server
            email: req.body.email,
            password: req.body.password
        }


        const newUser = new DATA(item) //to check incoming data
        const saveUser = await newUser.save() //mongoDB save

        res.send(saveUser)


    } catch (error) {

        console.log(error)
    }
})
// router.post('/login', async (req, res) => {
//     try {
// let data=req.body;
// let email=req.body.e1;
// let password=req.body.p1;
//        // console.log("from frontend",req.body);
//  let payload ={
//     'email':email,
//     'password':password,
//     'date':Date.now()
//  }      
//  let token=await jwt.sign(payload,'secretCode')

//         res.send({token});
       
//         }


      
//     catch (error) {

//         console.log(error)
//     }
// })

module.exports=router;