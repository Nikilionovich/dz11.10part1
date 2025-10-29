const { createnewmassange } = require("../utils/postunti")
const lastcontrollerpost = (req, res) => {
    let data = "";
    req.on("data", (chunk) => data += chunk);
    req.on("end", () => {
        let parseddata = JSON.parse(data);
        const { text, author } = parseddata;
        const mess = createnewmassange(text, author);
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify({arr}));
    })
}
module.exports = { lastcontrollerpost };