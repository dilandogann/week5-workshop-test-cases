const { get } = require("lodash");
const f = require("./functions");

async function getRes() {
    let resp= await f.getUserPosts() 
    console.log(resp)
}
getRes()
