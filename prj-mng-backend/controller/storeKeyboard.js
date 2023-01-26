const Student = require('../models/Keyboard.js')
const path = require('path')

module.exports = (req,res)=>{     console.log(req.body)

    Student.create(req.body, (error, student) => {
        if(error){
            console.log(error)
            data='Can Not Insert Coustomer Details Please Try Agin';
            res.render('Keyboard',{status:data});
        }
        else{
            data = 'Keyboard Details Inserted Successfully'
            res.render('Keyboard',{status:data});
        }

    })
}
