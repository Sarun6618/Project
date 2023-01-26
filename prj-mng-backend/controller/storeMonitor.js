const Student = require('../models/Monitor.js')
const path = require('path')

module.exports = (req,res)=>{     console.log(req.body)

    Student.create(req.body, (error, student) => {
        if(error){
            console.log(error)
            data='Can Not Insert Coustomer Details Please Try Agin';
            res.render('Monitor',{status:data});
        }
        else{
            data = 'Monitor Details Inserted Successfully'
            res.render('Monitor',{status:data});
        }

    })
}
