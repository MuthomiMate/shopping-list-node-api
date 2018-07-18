const validateFields = (params) => {
    for(i=0; i<params.length; i++){
        const fieldArray = Object.keys(params[i])
        const field = fieldArray[0]
        if(params[i][field]== ""){
            throw new Error("Please fill " + field +" field")
        }
    }

}
const splitObjects = (objectParams) =>{
    const newArray = []
    for (obj in objectParams) {
        const newObject = {[obj]:objectParams[obj]}
        newArray.push(newObject)
    }
    validateFields(newArray)
}

module.exports = {
    splitObjects
}