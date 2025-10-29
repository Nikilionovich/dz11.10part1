const { deletebyid, getdataparsed } = require("../utils/postunti");
const conrollerdelbyid = (req, res) => {
    let data = "";
    req.on("data", (chunk) => data += chunk);
    req.on("end",()=>{
    const { id } = JSON.parse(data);
    deletebyid(id);
    })
}
module.exports={conrollerdelbyid};