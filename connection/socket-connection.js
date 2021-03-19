const socketIO  = require('socket.io')
module.exports = {
    init : (httpServer) => {
        connection = socketIO(httpServer , {
            cors : {
                methods : ["GET" , "POST" , "PATCH"]
            }
        })
    }
}