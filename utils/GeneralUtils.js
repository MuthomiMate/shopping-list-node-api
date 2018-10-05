const {MissingParamsError} = require("./errorHandlers")
const validateFields = (params,res) => {
    for(i=0; i<params.length; i++){
        const fieldArray = Object.keys(params[i])
        const field = fieldArray[0]
        if(params[i][field]== ""){
           const error = new MissingParamsError("Please fill " + field +" field")
           res.json({error: error.message})
        }
    }

}
const splitObjects = (objectParams, res) =>{
    const newArray = []
    for (obj in objectParams) {
        const newObject = {[obj]:objectParams[obj]}
        newArray.push(newObject)
    }
    validateFields(newArray, res)
}

module.exports = {
    splitObjects
}