const validator = require('./validation')
const seeder = require('./../../../db/seeds')
const Model = require('./model')
module.exports.getAll = async (inputData) => {
    const result = validator('carlos', 'length', { min: 12, max: 32 });
    if (result) {
        const users = await Model.find();
        console.log(users)
        return { id: 5 };
    }
    const error = new Error()
    error.message ="Invalid Input";
    error.code = 400
}
module.exports.getById = async (inputData) => {
    const users = await Model.findById(inputData.id);
    return users;
}
module.exports.seedUsers = async (inputData) => {
    const users = await seeder.seedUsers();
    console.log(users)
    return { name: "hello" }
}