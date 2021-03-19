const app = require('../app');
const { graphqlHTTP } = require('express-graphql')
const rootSchema = require('./../graphQL/root_schema')
const rootResolver = require('./../graphQL/root_resolver')
app.use('/graphql', graphqlHTTP({
    schema: rootSchema,
    rootValue: rootResolver,
    graphiql: true
}))
app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Hello world",
        status: 200,
    })
})
app.listen(process.env.PORT)