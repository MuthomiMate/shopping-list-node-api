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
res ={
    json: jest.fn()
}
describe("generalUtils", ()=>{
    it("splits the object provided", () => {
        splitObjects(userInputs, res)
        const error= { "error": "Please fill email field" }
        expect(res.json).toBeCalledWith(error)
    })
})
