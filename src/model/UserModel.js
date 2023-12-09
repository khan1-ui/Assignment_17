const mongoose = require('mongoose')
const UserDataSchema = mongoose.Schema({
    FirstName:{type:Sring ,required:true},
    LastName:{type:Sring ,required:true},
    Email:{type:Sring ,required:true},
    Password:{type:Sring ,required:true},
    Address:{type:Sring },
    PhoneNumber:{type:Sring}
},{timestamps:true,versionKey:false})
const UserProfileModel = mongoose.model('profile',UserDataSchema)
module.exports=UserProfileModel