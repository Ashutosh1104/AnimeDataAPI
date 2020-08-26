function change(anime){
    string = anime.replace(/[^a-zA-Z0-9]/g, ' ');
    string = string.replace(/ /g,'-') 
    return(string.toLowerCase())
}

function Split(x,using){
    y=[]
    try {
        y=x.split(using)
        return y
    } catch (e) {
        if (e instanceof TypeError) {
            return []
        }
    }
}

function camelCaseToWords(str){
    return str.match(/^[a-z]+|[A-Z][a-z]*/g).map(function(x){
        return x[0].toUpperCase() + x.substr(1).toLowerCase();
    }).join(' ');
};

function gethover (x,filter="anime"){
    res={}
    res.altName=Split(x('h6').html(),": ")[1]
    if(filter=="anime"){
        res.type=Split(x('.type').text()," (")[0]
        res.episode=parseInt(Split(Split(x('.type').text()," (")[1],' ')[0])
    }
    if(filter=="manga"){
        res.vol=parseInt(Split(Split(x('.iconVol').text(),";")[0],': ')[1])
        res.chapters=parseInt(Split(Split(x('.iconVol').text(),";")[1],':')[1])
        if(!res.vol){
            res.vol="One-shot"
        }
    }
    res.rating=parseFloat(x('.ttRating').text())
    res.plot=x('p').eq(0).text()
    res.source=Split(x('p').eq(1).text(),':')[1]
    res.year=parseInt(x('.iconYear').text())
    res.tags=[]
    m=x('ul').eq(1).find('li').each(function(){
        res.tags.push(x(this).text())        
    })
    return res   
}

function voiceactor (x){
    var count=0
    res1=[]
    if(x){
        a=x('a').each(function(i){
            if(i%2==0){
                y={voiceof:'',from:''}
                y.voiceof=x(this).text()
                y.from=x(this).next().text()
                res1.push(y)
            }
        })
        return res1
    }
}

module.exports={
    Split,
    change,
    camelCaseToWords,
    gethover,
    voiceactor,
}