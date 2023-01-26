const Student = require('../models/Mouse.js')
const path = require('path')

module.exports = (req,res)=>{     console.log(req.body)

    Student.create(req.body, (error, student) => {
        if(error){
            console.log(error)
            data='Can Not Insert Coustomer Details Please Try Agin';
            res.render('Mouse',{status:data});
        }
        else{
            data = 'Mouse Details Inserted Successfully'
            res.render('Mouse',{status:data});
        }

    })
}
