var request = require('request');

function rp(url){
    return new Promise((resolve,reject)=>{
        request(url,function(error,response,html){
            if(!error && response.statusCode==200){
              resolve(html)
            }
            else{
                reject(err=>console.log(err))
            }
        })
    }).catch(err=> console.log(err))
}

module.exports={rp}

