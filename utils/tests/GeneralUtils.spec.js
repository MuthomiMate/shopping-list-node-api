const http =require("http")
const response = http.createServer(function(req, res){
    return res;
}).listen(8124, "127.0.0.1")
const {splitObjects } = require("../GeneralUtils")

const userInputs = {
    name: "test",
    pasword: "testpass",
    email: ""
};
res =response;
describe("generalUtils", ()=>{
    it("splits the object provided", () => {
        const validateResult = splitObjects(userInputs, res)
        expect(validateResult).toEqual("")
    })
})
