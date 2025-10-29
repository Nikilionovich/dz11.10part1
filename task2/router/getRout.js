const url = require("url")
const { defaultconroll } = require("../controller/defaulteconroller");
const { alltodo } = require("../controller/alltodos");
const methodget = (req, res) => {
    const parsedname = url.parse(req.url, true);
    switch (parsedname.pathname) {
        case "/":
            res.writeHead(302, { location: "/index.html" })
            res.end();
            break;
        case "/api/todos":
            alltodo(req, res);
            break;
        default:
            defaultconroll(req, res)
            break;
    }
}
module.exports = methodget;