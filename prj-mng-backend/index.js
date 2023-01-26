console.log('Hello from the other side');
const mongoose=require('mongoose');
const express=require('express');
const app=express();
const path=require('path');
const html=require('ejs');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.set('views', path.join(__dirname, 'view'))
app.set('view engine','ejs')
const dbURI='mongodb://127.0.0.1:27017/AssetsData';
mongoose.connect(dbURI,{useNewUrlParser: true,/*useCreateIndex:true*/useUnifiedTopology: true,/*useFindAndModify:false*/})
.then(function(result){
    console.log("Database is connected");
})
.catch((err)=>console.log(err));
/*
const middleware=(req,res,next)=>{
    console.log('hello my middleware');
    next();
}
app.get('/',(req,res)=>{
    res.send("Mongodb altas is connected");
})
app.get('/Desktop',(req,res)=>{

})
app.get('/about',middleware,(req,res)=>{
    console.log("middleware about");
    res.send("It is about middleware");
})
app.listen(3000,()=>{
    console.log("running on 3000");
})*/

//home

const homeController = require('./controller/index');  //index page

//Desktop

const newDesktopController = require('./controller/newDesktop')   // new Desktop js
const storeDesktopController = require('./controller/storeDesktop')
//const searchDesktopController = require('./controller/searchDesktop')
//const fetchController= require('./controller/searchdb');
//const fetchControllerSerialNumber= require('./controller/searchdbserialno');
//const updateController= require('./controller/updatedoc')
//const updateDesktopController = require('./controller/updateDesktop')
app.get('/',homeController);
app.get('/desktop.ejs',newDesktopController)   // register ejs page
app.post('/Desktop/register',storeDesktopController)
//app.get('/page/search',searchDesktopController)
//app.post('/Desktop/fetch',fetchController);
//app.get('/page/update',updateDesktopController);
//app.post('/Desktop/update',updateController);
//app.post('/Desktop/fetchSerialNumber',fetchControllerSerialNumber);

//Laptop

const newLaptopController = require('./controller/newLaptop')   // new Laptop js
const storeLaptopController = require('./controller/storeLaptop')
//const fetchControllerL= require('./controller/searchdbL');
app.get('/Laptop.ejs',newLaptopController)   // register ejs page
app.post('/Laptop/register',storeLaptopController)
//app.get('/page/search',searchLaptopController)
//app.post('/Laptop/fetch',fetchControllerL);
//app.get('/page/update',updateLaptopController);
//app.post('/Laptop/update',updateController);
//app.post('/Laptop/fetchSerialNumber',fetchControllerSerialNumber);

//Tab

const newTabController = require('./controller/newTab')   // new Tab js
const storeTabController = require('./controller/storeTab')
app.get('/Tab.ejs',newTabController)   // register ejs page
app.post('/Tab/register',storeTabController)

//Mouse

const newMouseController = require('./controller/newMouse')   // new Mouse js
const storeMouseController = require('./controller/storeMouse')
app.get('/Mouse.ejs',newMouseController)   // register ejs page
app.post('/Mouse/register',storeMouseController)

//Keyboard

const newKeyboardController = require('./controller/newKeyboard')   // new Keyboard js
const storeKeyboardController = require('./controller/storeKeyboard')
app.get('/Keyboard.ejs',newKeyboardController)   // register ejs page
app.post('/Keyboard/register',storeKeyboardController)

//Monitor

const newMonitorController = require('./controller/newMonitor')   // new Monitor js
const storeMonitorController = require('./controller/storeMonitor')
app.get('/Monitor.ejs',newMonitorController)   // register ejs page
app.post('/Monitor/register',storeMonitorController)

//Printer

const newPrinterController = require('./controller/newPrinter')   // new Printer js
const storePrinterController = require('./controller/storePrinter')
app.get('/Printer.ejs',newPrinterController)   // register ejs page
app.post('/Printer/register',storePrinterController)

app.listen(3000, () => console.log("App listening on port 3000!"));