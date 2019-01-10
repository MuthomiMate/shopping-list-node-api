const http = require("http")
const {
    splitObjects
} = require("../GeneralUtils")

const userInputs = {
    name: "test",
    pasword: "testpass",
    email: ""
};
res = {
    json: jest.fn()
}
describe("generalUtils", () => {
    it("splits the object provided", () => {
        splitObjects(userInputs, res)
        const error = {
            "error": "Please fill email field"
        }
        expect(res.json).toBeCalledWith(error)
    })
})