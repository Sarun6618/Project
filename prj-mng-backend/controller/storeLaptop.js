const Student = require('../models/Laptop.js')
const path = require('path')

module.exports = (req,res)=>{     console.log(req.body)

    Student.create(req.body, (error, student) => {
        if(error){
            console.log(error)
            data='Can Not Insert Coustomer Details Please Try Agin';
            res.render('Laptop',{status:data});
        }
        else{
            data = 'Laptop Details Inserted Successfully'
            res.render('Laptop',{status:data});
        }

    })
}
