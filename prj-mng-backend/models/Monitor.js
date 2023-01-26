const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const MonitorSchema=new Schema({
    Make:String,
    City:String,
    Model:String,
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
const Monitor=mongoose.model('Monitor',MonitorSchema);
module.exports=Monitor
