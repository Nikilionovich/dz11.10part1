const { createnewtodo } = require("../utils/postunti");
const { getdataparsed } = require("../utils/postunti");
const controllernewtodo = (req, res) => {
    let data = "";
    req.on("data", (chunk) => data += chunk);
    req.on("end", () => {
        const { title, completed } = JSON.parse(data);
        const arr = createnewtodo(title, completed);
        res.writeHead(200, { "Content-type": "application/json" });
        
        res.end(JSON.stringify({ arr }))
    })
}
module.exports = { controllernewtodo }