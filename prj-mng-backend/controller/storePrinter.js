const Student = require('../models/Printer.js')
const path = require('path')

module.exports = (req,res)=>{     console.log(req.body)

    Student.create(req.body, (error, student) => {
        if(error){
            console.log(error)
            data='Can Not Insert Coustomer Details Please Try Agin';
            res.render('Printer',{status:data});
        }
        else{
            data = 'Printer Details Inserted Successfully'
            res.render('Printer',{status:data});
        }

    })
}
