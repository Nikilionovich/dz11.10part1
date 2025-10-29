const {getmessbyusername}=require("../utils/utilget");
const url=require("url")
const messegebyusername=(req,res)=>{
    const {username}=url.parse(req.url,true).query;
    const arr=getmessbyusername(username);
    res.writeHead(200,{"Content-type":"application/json"});
    res.end(JSON.stringify({arr}));
}
module.exports={messegebyusername};