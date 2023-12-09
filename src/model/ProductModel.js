const mongoose = require('mongoose')
const ProductDataSchema = mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String},
    price:{type:Number,required:true,value:positive},
    stock:{type:Number,required:true,value:non-negative-integer},
    category:{type:Number,required:true,value:non-negative-integer},
    imageURL:{type:String}
},{timestamps:true,versionKey:false})
const ProductModel = mongoose.model("products",ProductDataSchema)
module.exports = ProductModel