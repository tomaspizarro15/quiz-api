module.exports = `
    type User {
        name : String!
        email : String!
        password : String!
        id : ID!
    }
    type Game {
     id : ID!
     label : String! 
     mode : String!
     theme : String!
    }
`