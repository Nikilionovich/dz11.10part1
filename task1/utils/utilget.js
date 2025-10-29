const {arrmassege}=require("../data/data");
const getallmessseng=()=>
{
    const dublicate= arrmassege;
    return dublicate;
}
const getmessbyusername=(username)=>{
const dublicate=arrmassege.filter((obj)=>obj.author==username);
return dublicate;
}
module.exports={getallmessseng,getmessbyusername};