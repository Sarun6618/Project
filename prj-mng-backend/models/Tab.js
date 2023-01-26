const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const TabSchema=new Schema({
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
const Tab=mongoose.model('Tab',TabSchema);
module.exports=Tab
