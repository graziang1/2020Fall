const mysql = require('./mysql');

//const data = [{ name: 'Moshe', age: 43}, { name: 'Biden', age: 78 }] //array of objects

async function getAll(){
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM Users`);
}
async function get(id){
    return await mysql.query(`SELECT * FROM Users WHERE id = ?`,[id]);
}
async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM Types WHERE Type_id = 2`);
}
async function add(name, age){
    data.push({name, age});
}
/*
async function rand(){ // or use a callback function, cb
    var someVal = 0
    for (let index = 0; index < 999 * 999; index++) {
        someVal = index * Math.random();
    }
    if (someVal < 999 * 999 * .5) {
        throw{ status: 501, message: "This is a fake error" }
    }
    return someVal; 
}
*/
const search = async q => await mysql.query(`SELECT id, FirstName, LastName FROM Users WHERE LastName LIKE ? OR FirstName LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = { getAll, get, add, getTypes, search }