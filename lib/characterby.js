var { rp } = require('./request')
var cheerio = require('cheerio')

async function getTopCharacters(no, by = "loved") {
    z = Math.ceil(no / 15)
    outlist = []
    var x = 0
    while ( outlist.length <= no) {
        url = "https://www.anime-planet.com/characters/top-" + by + "?page=" + x     // for weekly add /week and for today add /today here.
        let resp = await getCharacters(url)
        if( resp.resultPresent ){
            if (x == 0) { outlist = resp.response }
            else {
                outlist = outlist.concat(resp.response)
            }
            x++
        }
        else{
            return resp;
        }
    }
    outlist.splice(no , outlist.length - 50 )
    var result = { resultPresent: true, response: outlist }
    return (result)
}

async function getCharacters(url) {
    var result = { resultPresent: false, response: false }
    try {
        let data = await rp(url);
        characters = []
        var $ = cheerio.load(data)
        tbody = $('tbody').children().each(function () {
            character = { name: '', anime: [], rank: '', img: '', manga: [], traits: [], upvotes: '' }
            character.rank = $(this).find('.tableRank').text()
            character.upvotes = parseInt($(this).find('.heartOn').parent().text().replace(',', ''))
            character.img = 'https://www.anime-planet.com' + $(this).find('.tableAvatar').children().children().attr('src')
            character.name = $(this).find('.name').text()
            tag = $(this).find('.tags').find('ul').find('a').each(function () {
                b = $(this).text()
                character.traits.push(b)
            })
            anime = $(this).find('.tableAnime').find('div').eq(0).find('ul').find('li').each(function () {
                b = $(this).text()
                character.anime.push(b)
            })
            anime = $(this).find('.tableAnime').find('div').eq(1).find('ul').find('li').each(function () {
                b = $(this).text()
                character.manga.push(b)
            })
            characters.push(character)
        })
        result = { resultPresent: true, response: characters }
        return result
    } catch (error) {
        result = { resultPresent: false, response: 'Something went Wrong ', }
        return (result);
    }
}

module.exports = { getTopCharacters }

