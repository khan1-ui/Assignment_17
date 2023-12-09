const mongoose = require('mongoose')
const ItemDataSchema = mongoose.Schema({
    user: {type:mongoose.Schema.Types.ObjectId,required:true},
    product: {type:mongoose.Schema.Types.ObjectId,required:true},
    quantity:{type:Number, required:true ,value:positive}

},{timestamps:true,versionKey:false})
const CartItemModel=mongoose.model('Carts',ItemDataSchema)
module.exports=CartItemModel