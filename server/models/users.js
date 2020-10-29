const mysql = require('./mysql');

const data = [{ name: 'Moshe', age: 43}, { name: 'Biden', age: 78 }] //array of objects

async function getAll(){
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM Users`);
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

module.exports = { getAll, add, search: async q => data.filter(x=> x.name == q) }