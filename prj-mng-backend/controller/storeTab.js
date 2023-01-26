const Student = require('../models/Tab.js')
const path = require('path')

module.exports = (req,res)=>{     console.log(req.body)

    Student.create(req.body, (error, student) => {
        if(error){
            console.log(error)
            data='Can Not Insert Coustomer Details Please Try Agin';
            res.render('Tab',{status:data});
        }
        else{
            data = 'Tab Details Inserted Successfully'
            res.render('Tab',{status:data});
        }

    })
}
