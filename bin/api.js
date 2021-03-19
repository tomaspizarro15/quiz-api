const app = require('../app');
const { graphqlHTTP } = require('express-graphql')
const rootSchema = require('./../graphQL/root_schema')
const rootResolver = require('./../graphQL/root_resolver');
const  Mongoose  = require('mongoose');
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
Mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology : true , useNewUrlParser : true}).then(() => {
    app.listen(process.env.PORT)
}).catch(err => {
    app.use((req , res) => {
        res.status(200).json({
            status : 500,
            message : "Database connection failed",
            error : err,
        })
    })
})
app.listen(process.env.PORT)