const userResolver = require('./services/users/resolver')

module.exports = {
    findUser: ({ input }) => {
        console.log("Reached resolver")
        return ({ name: input.email, email: input.email })
    },
    findAll: (input) => userResolver.getAll({input}),
    seed : () => {userResolver.seedUsers()}
}

