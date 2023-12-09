const mongoose= require('mongoose')
const OrderDataSchema = mongoose.Schema({
    user: {type:mongoose.Schema.Types.ObjectId,required:true},
    items:[{type:mongoose.Schema.Types.ObjectId,required:true},
        {type:mongoose.Schema.Types.ObjectId,required:true},{type:mongoose.Schema.Types.ObjectId,required:true}],
    totalAmount:{type:Number, required:true ,value:positive},
    shippingAddress:{type:String,required:true},
    status:{type:String,required:true,default:"pending"}
},{timestamps:true,versionKey:false})
const OrderModel = mongoose.model("orders",OrderDataSchema)
module.exports=OrderModel