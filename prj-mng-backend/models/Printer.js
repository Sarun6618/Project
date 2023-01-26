const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const PrinterSchema=new Schema({
    Make:String,
    City:String,
    Model:String,
    Desktop:String,
    TagID:String,
    SerialNumber:{
        type:String,
        required:true,
        unique:true
    },
    User:{
        type:String,
        required:true,
        unique:true
    },
    Status:String,
    Remarks:String
})
const Printer=mongoose.model('Printer',PrinterSchema);
module.exports=Printer
