const app = require('../app');
const mongoose = require('mongoose')

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
mongoose.connect(process.env.MONGO_URI , {useNewUrlParser : true , useUnifiedTopology : true}).then(() => {
}).catch(err => {
    app.use((req ,res) => {
        res.status(500).json({
            message : "Not available to connect to Mongodb cluster",
            status : 500,
            err : err,
        })
    })
})