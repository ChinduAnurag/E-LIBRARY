const express = require('express')
const { findById } = require('../models/book')
const router = express.Router() //routing function
const DATA = require('../models/book') // DB of books
var jwt = require('jsonwebtoken');



module.exports = {
    getBookList: (callback) => {
        Book.find(callback);
    }
}




//view full list of books 
router.get('/book',async(req,res)=>{
try{
const list=await DATA.find()
res.send(list)
console.log(list)

}catch(error){
    console.log(error);
}

})

// //single post
// router.get('/blog/:id',async(req,res)=>{
//     try{

//     }catch(error){

//     }
// })
//Add new book
router.post('/book', async (req, res) => {
    try {

        console.log(req.body)
        let item = {  //to fetch and save data from front end in server
            title: req.body.title,
            author: req.body.author,
            genre:req.body.genre,
            year:req.body.year,
            description:req.body.description
        }


        const newBook = new DATA(item) //to check incoming data
        const saveBook = await newBook.save() //mongoDB save

        res.send(saveBook)


    } catch (error) {

        console.log(error)
    }
})

router.delete('/book/:id', async (req, res) => {
    try {
        let id = req.params.id
        const deleteBook = await DATA.findByIdAndDelete(id)
        res.send(deleteBook)


    } catch (error) {
        console.log(error)

    }
})


// Book update 


router.put('/book', async (req, res) => {
    try {

        let id = req.body.id
        let item = {  //to fetch and save data from front end in server
            title: req.body.title,
            author: req.body.author,
            genre:req.body.genre,
            year:req.body.year,
            description:req.body.description
        }
        let updateData = { $set: item }
        let updateBook = await DATA.findByIdAndUpdate({ '_id': id })
        res.send(updateData)
        console.log(updateData);
    } catch (error) {
        console.log(error)

    }
})


// Single Book detail 


router.get('/book/:id', async (req, res) => {
    try {

        let id = req.params.id
        const singleBook = await DATA.findById(id)
        res.send(singleBook)

    } catch (error) {
        console.log(error)

    }
})





module.exports=router;