const { buildSchema } = require('graphql')
const types = require('./types/types')
const userQuery = require('./query/user')
const mySchema = buildSchema(
    `${types}
    input userQuery {
        email : String!
        name : String
    }
    input userSeed {
        name : String
    }
    type rootMutation {
        seed(input : userSeed) : User
    }
    type rootQuery {
      ${userQuery}
    }
    schema {
        mutation : rootMutation
        query : rootQuery
    }`
)
module.exports = mySchema;