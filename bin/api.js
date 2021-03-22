const app = require('../app');
const mongoose = require('mongoose')
const seeder = require('./../db/seeds')
const { graphqlHTTP } = require('express-graphql')
const rootSchema = require('./../graphQL/root_schema')
const rootResolver = require('./../graphQL/root_resolver');
const Mongoose = require('mongoose');

app.use('/graphql', graphqlHTTP({
    schema: rootSchema,
    rootValue: rootResolver,
    graphiql: true,
    formatError(err) {
        console.log(err)
        return err;
    }
}))
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(8080)
}).catch(err => {
    app.use((req, res) => {
        res.status(500).json({
            message: "Not available to connect to Mongodb cluster",
            status: 500,
            err: err,
        })
    })
})
