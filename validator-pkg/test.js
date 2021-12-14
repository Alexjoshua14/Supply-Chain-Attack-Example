//import { validateUser } from "./index.js";
var validate = require("./index.js").validateUser;

const test = () => {
    const uname = "testing";
    const pword = "password";
    validate(uname, pword);
}

test();