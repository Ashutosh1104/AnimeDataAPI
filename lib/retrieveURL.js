var request = require('request');

function requestJson(extra){
    return new Promise((resolve,reject)=>{
        request({
            url: `https://anime2211.herokuapp.com/anime/SpecificSearch/${extra}`,
            json: true
        },function(error, response, body) {
            if(!error && response.statusCode==200){
                resolve(body)
            }
            else{
                reject(error)
            }
        });
    }) 
}

async function getURL(searchParameter){
    return new Promise(async (resolve,reject)=>{
        try {
            let response = await requestJson(searchParameter);
            returnVal = { hasUrl: true , message : response };
            if( response == undefined ){ 
                returnVal.hasUrl = false
            }
            resolve (returnVal)
        } catch(err) {
            reject(err);
        }
    })
}

module.exports = {getURL}