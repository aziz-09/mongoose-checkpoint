 const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
let userModel = require('./src/models/user');
// const user = require('./src/models/user');


// Parse Data 
// app.use(express.json())



//connect the DB 
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = mongoose.connection
        db.on('error', error => console.error(error))
        db.once('open', MONGO_URI => console.log('Connected to Database'))




// app.get("/" , (req , res)=>{

// userModel.find({} , (err , data)=>{
//     if(err) res.send({err})
//     res.send({data})
// })

// })

//add User 

// app.post("/addUser" , (req, res)=>{
//     console.log(req.body) // { name :"azziz" , age: 20}
//     // logique mta3 el add 
//     res.send("result")
// })

// //edit user 
// app.put("/edit/:id" , (req, res)=>{
//     let id = req.params.id
//     //findby id and update logique 
//     res.send("result")
// })




    //     let user = new userModel({
    //         name : 'Mohamed',
    //         age : 15,
    //         favoriteFood : ['pizza','borritos','fish']

    //     })

    // user.save(function(err,res){
    //     if(err){
    //         console.log('Your error',err)
    //     } else{
    //         console.log('save Done ......');
    //         console.log(res);
    //     }
    // })



        // var userslist =  [
        //            { 
        //             name : 'Aziz',
        //                 age : 18,
        //               favoriteFood : ['spaghetti','lobster','borritos']
        //              },
        //              {
        //                  name : 'yassir',
        //                 age : 19,
        //                  favoriteFood :["3ejja","loubia","patte"]
        //             },
        //              {
        //                 name:'elyess',
        //                  age : 20,
        //                 favoriteFood :['borritos','jelbana','ftayer']
         
        
        //              }
        
        //         ]
        //         userModel.create(userslist)
        //                 .then((userslist) =>{
        //            console.log("model.create()",userslist);
        //             })
        //                  .catch(err =>{
        //                  console.error("Your Error is ",err);
        //                })



                //  userModel.find({name :'yassir'})
                //   .then((user)=> {
                //       console.log(user)

                //   })
                //   .catch(err =>{
                //       console.log(err)
                //   })
                


                // userModel.findOne({favoriteFood :['borritos','jelbana','ftayer']})
                // .then((res)=>{
                //     console.log(res)
                // })
                // .catch((err)=>{
                //     console.log(err)
                // })

                // userModel.findById({_id:'5f468e7cc4412649f870cef0'},function(err,data){
                //     if(data){
                //         console.log(data)
                //     } 
                //     else{
                //         console.log(err)
                //     }
                // })


            // userModel.findOne({_id :"5f468e7cc4412649f870cef0"},function(err,res){
            //     if(res){
            //         res.favoriteFood.push('hambuger')
            //         console.log(res) 
                    
            //     }
            //     res.save(function(err,res){
            //         if(res){
            //             console.log('hamburger has been inserted')

            //         } else{
            //             console.log(err)
            //         }
            //     })
                
                
            // })
           


            // const nama = {name : 'yassir'}
            // const newAge = {age : 20}
            // userModel.findOneAndUpdate(nama,newAge, {new: true, runValidators: true})
            // .then((res)=>{
            //     console.log(res)
            // })
            // .catch(err => {
            //     console.log(err)
            // })
           
            
            // let id = '5f468e7cc4412649f870cef2';
            // UserModel.findByIdAndRemove(id)
            //     .then(res => {
            //         console.log("Elyess has been removed");
            //         console.log(res);
            //     })
            //     .catch(err => {
            //         console.error(err);
            //     })

        
            // let nama = {name :'Mohamed'}
            // userModel.remove(nama)
            // .then(res => {
            //     console.log("Mohamed has been deleted");
            //     console.log(res);
            //     if(res.n === 0){
            //         console.log("No persons deleted");
            //     }else
            //     {
            //         console.log(`${res.n} Person deleted`);
            //     }
            // })
            // .catch(err => {
            //     console.error(err);
            // })

        
// userModel.find({favoriteFood: 'borritos' })
//     .sort({name: 1})
//     .limit(2)
//     .select({age: false})
//     .exec(function(err, data){
//         if(err){ 
//             console.error(err)
//         }else{
//         console.log(data)}
//     })












app.get('/',function(req, res){
    res.send('hello world')
})






app.listen(port, ()=>{
    console.log(`the server is running at http://localhost:${port}`)
})
