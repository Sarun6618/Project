const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const LaptopSchema=new Schema({
    Make:String,
    City:String,
    Hostname:String,
    Model:String,
    TagID:String,
    SerialNumber:{
        type:String,
        required:true,
        unique:true
    },
    Processor:String,
    Generation:String,
    os:String,
    RAM:String,
    Storage:String,
    Graphics:String,
    User:{
        type:String,
        required:true,
        unique:true
    },
    Status:String,
    Remarks:String
})
const Laptop=mongoose.model('Laptop',LaptopSchema);
module.exports=Laptop
