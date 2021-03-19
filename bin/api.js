const app = require('../app');

app.get('/',(req, res, next) => {
    res.status(200).json({
        message : "Hello world",
        status : 200,
    })
})
app.listen(process.env.PORT)