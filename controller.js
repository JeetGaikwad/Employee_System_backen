// Setting the middleware using router for every 
const exp = require('express')
const service = require('./execution')

router = exp.Router()

// Middleware to get every employee in the employees table
router.get('/', async(req,res)=>{
    const employees = await service.getAllEmployees()
    res.send(employees)
})

// Middleware to get employee with id
router.get('/:id', async(req,res)=>{
    const employee = await service.getEmployeeById(req.params.id)
    if (employee.length == 0){
        res.status(404).json('no records found')
    }
    else{
        res.send(employee)
    }
})

// Middleware to delete employee with id
router.delete('/:id', async(req,res)=>{
    const affectedRows = await service.deleteEmployee(req.params.id)
    if (affectedRows == 0){
        res.status(404).json('no records found')
    }
    else{
        res.send('employee removed successfully')
    }
})

// Middleware to update employee with id
router.put('/:id', exp.urlencoded({extended:true}) ,async(req,res)=>{
    const data = await service.updateEmployee(req.body,req.params.id)
    res.send(data)
})


module.exports = router