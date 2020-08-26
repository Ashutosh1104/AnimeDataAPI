// already from db

// can make a request at anime.2211.herokuapp.com/anime/GeneralSearch/:name (name == words that are presnt anywhere in name so look for it )

var {rp} = require('./request')
var cheerio = require('cheerio')
var {gethover} =require('./namemagic')
var anime=require('./anime')

base_url="https://www.anime-planet.com"

function searchbyName(name,filter='anime'){
    y=name.replace(/ /g,'%20')
    url=base_url+'/'+filter+'/all?name='+y
    return rp(url).then((data)=>{
        var $=cheerio.load(data)
        let cond=$('h1[itemprop="name"]').text()
        result=[]
        if(cond=='Browse anime' || cond=='Browse manga'){
            searches=$('.card').each(function(){
            search={name:'',img:''}
            search.name=$(this).find('img').attr('alt')
            search.img=base_url+$(this).find('img').attr('data-src')
            x=gethover(cheerio.load($(this).find('.tooltip').attr('title')),filter)
            search={...search,...x}
            result.push(search)
        })
        return result
        }
        else{
            return anime.getAnime(cond).then((xyz)=>{
                delete xyz.rank
                xyz.year=xyz.season.year
                delete xyz.season
                result.push(xyz)//rank,season.time
                return result
            })                       
        }        
    }).catch(err=> console.log(err))    
}

module.exports={searchbyName}
