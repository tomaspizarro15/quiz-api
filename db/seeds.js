const UserModel = require('./../graphQL/services/users/model')
const faker = require('faker')
module.exports.seedUsers = async (res, req, next) => {

    const seedRoot = [];

    for (let i = 0; i < 20; i++) {
        seedRoot.push({
            name: faker.name.firstName(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: "seed",
            games: []
        })
    }
    try {
        const seededCollection = await UserModel.insertMany(seedRoot)
        return seededCollection;
    } catch (error) {
        return error;
    }
}