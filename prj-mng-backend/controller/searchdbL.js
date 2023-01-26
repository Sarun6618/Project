const Laptop = require('../models/Laptop.js')
module.exports = (req,res)=>{
        let reg=req.body.Model;
        console.log(reg);
    Laptop.find({Model: {$regex: reg, $options:"$i"}}, (error, Laptop) => {
        if(error){
            //console.log(Laptop)
            res.render('search',{stuData:Laptop});
        }
        else{
            //console.log(Laptop)
            res.render('search',{stuData:Laptop, view:true});
        }

    })
}

//{post_text:{$regex:"tutorialspoint"}})