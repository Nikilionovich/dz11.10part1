const { controllernewtodo } = require("../controller/createnewtodo")
const { editconroll } = require("../controller/controlleredit");
const { conrollerdelbyid } = require("../controller/deletebyid");
const methodpost = (req, res) => {
    switch (req.url) {
        case "/api/todos":
            controllernewtodo(req, res);
            break;
        case "/api/todos/edit":
            editconroll(req, res);
            break;
        case "/api/todos/delete":
            conrollerdelbyid(req, res);
            break;
        default:
            break;
    }
}
module.exports = methodpost;