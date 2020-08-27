// let mongoose = require('mongoose');
// let userSchema = new mongoose.Schema({
//     firstName : String,
//     lastName : String
// })

// module.exports = mongoose.model('User',userSchema)


// userSchema.virtual('fullName').get(function(){
//     return this.firstName + '' + this.lastName
// })

// userSchema.virtual('fullName').set(function(name){
//     let str = name.split('')
//     this.firstName = str[0]
//     this.lastName = str[1]
// })

// let model = new UserModel()
// model.fullName ='Aziz lkh '
// console.log(model.toJSON())
// console.log(model.fullName)

let mongoose = require('mongoose');

let userModel = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        maxlength:60
    },
    age:{
        type: Number,
        required : true,
        max:75
    },
    favoriteFood:[String]

});
module.exports = mongoose.model('Users',userModel);