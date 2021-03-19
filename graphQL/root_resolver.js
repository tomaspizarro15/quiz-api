module.exports = {
    findUser: ({ input }) => {
        console.log("Reached resolver")
        return ({ name: input.email, email: input.email })
    },
}

