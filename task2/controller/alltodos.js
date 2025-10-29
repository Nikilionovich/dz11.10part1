const { getalltodo } = require("../utils/utilget")
const alltodo = (req, res) => {
    const arr = getalltodo();
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify({ arr }))
}
module.exports = { alltodo }