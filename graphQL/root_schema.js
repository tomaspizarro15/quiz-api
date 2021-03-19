const { buildSchema } = require('graphql')
const types = require('./types/types')
const mySchema = buildSchema(
    `${types}
    input userQuery {
        email : String!
        name : String
    }
    type rootMutation {
        findUser(input : userQuery) : User!
        createUser(input : userQuery) : User!
    }
    type rootQuery {
        hello : String
    }
    schema {
        mutation : rootMutation
        query : rootQuery
    }`
)
module.exports = mySchema;