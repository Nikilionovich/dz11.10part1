const fs=require("fs")
const path=require("path")
let {arrmassege}=require("../data/data");
const createnewmassange = (text1,author1) => {
const massange={
    id:arrmassege.length+1,
    text:text1,
    author:author1,
    timestamp: new Date().toISOString()
}
arrmassege.push(massange)
fs.writeFileSync(path.join(__dirname,"../data/massage.json"),JSON.stringify(arrmassege,null,2),"utf-8");
return massange;
}
module.exports={createnewmassange};