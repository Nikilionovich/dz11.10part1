const url=require("url");
const {filterstrok}=require("../utils/utils.")

const stadycontroller=(req,res)=>{
const {minrate, maxrate, sort}=url.parse(req.url,true).query;
const filteredobj=filterstrok(minrate, maxrate, sort=="true");
 res.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
  });
  res.end(
    JSON.stringify({
     filteredobj: filteredobj,
    }))
}
module.exports={stadycontroller};