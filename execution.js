// This file contains function for Read, Update and Delete Operations
// Importing the connection file 
const conn = require('./db')

// Read all the employees
module.exports.getAllEmployees = async() =>{
    const [records] = await conn.query("select * from `employees`")
    return records;
}

// Read the employees by id
module.exports.getEmployeeById = async(id) =>{
    const [record] = await conn.query("select * from `employees` where id = ?",id)
    return record;
}

// Delete the employees by id
module.exports.deleteEmployee = async(id) =>{
    const [record] = await conn.query("delete from `employees` where id = ?",id)
    return record.affectedRows;
}

// Update the employees by id
module.exports.updateEmployee = async(obj,id=0) =>{
    const [data] = await conn.query("update `employees` set emp_name ='"+ obj.emp_name +"', job_title ='"+ obj.job_title +"', contact_main = '"+ obj.contact_main +"', email = '"+ obj.email +"', address = '"+ obj.address +"', city = '"+ obj.city +"', state = '"+ obj.state +"', emg_contact1 = '"+ obj.emg_contact1 +"', contact1 = '"+ obj.contact1 +"', relation1 = '"+ obj.realtion1 +"', emg_contact2 = '"+ obj.emg_contact2 +"', contact2 = '"+ obj.contact2 +"', relation2 = '"+ obj.realtion2 +"' where id =?",id)
    
    return data;
} 