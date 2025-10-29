const { getdataparsed } = require("../utils/postunti");
const { changeindata } = require("../utils/postunti");
const editconroll = (req, res) => {
    let data = "";
    req.on("data", (chunk) => data += chunk);
    req.on("end", () => {
        const { id, title, completed } = JSON.parse(data);
        changeindata(id, title, completed);
        res.writeHead(200,{"Content-type":"application/json"})
        res.end();
    })
}
module.exports = { editconroll };