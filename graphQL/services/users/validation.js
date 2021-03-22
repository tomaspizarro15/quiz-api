const validator = require('validator')

module.exports = (value, type, props) => {
    console.log(value ,type ,props)
    if (type === 'email') {
        if (validator.isEmail()) {
            return true
        }
        return false
    }
    if (type === 'length') {
        if (validator.isLength(value, { ...props })) {
            return true
        }
        return false
    }
    if (type === 'password') {
        if (validator.isLength(value, { min: 8, max: 64 })) {
            return true
        }
        return false
    }
    return new Error("the type passed as argument 2 is not defined")
}
