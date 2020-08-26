var cheerio = require('cheerio')
var { rp } = require('./request')
var { gethover } = require('./namemagic')

base_url = 'https://www.anime-planet.com/anime/seasons/'

async function getSeasonal(season) {
    var result = { resultPresent: false, response: false }
    url = 'https://www.anime-planet.com/anime/seasons/' + season;
    try {
        let data = await rp(url);
        var $ = cheerio.load(data)
        scrape = {}
        target = $('.cardDeck.cardGrid').each(function (i) {
            elements = []
            subtarget = $(this).find('.card').each(function () {
                anime = {}
                anime.name = $(this).find('.cardName').text()
                anime.img = 'https://www.anime-planet.com' + $(this).find('.crop').children().attr('data-src')
                x = gethover(cheerio.load($(this).find('.tooltip').attr('title')))
                anime = { ...anime, ...x }
                elements.push(anime)
            })
            if (i == 0) { scrape.anime = elements }
            if (i == 1) { scrape.movies = elements }
            if (i == 2) { scrape.OVA = elements }
        })
        result = { resultPresent: true, response: scrape }
        return result
    } catch (error) {
        result = { resultPresent: false, response: 'Something went Wrong ', err: error }
        return (result);
    }
}

module.exports =
{
    getSeasonal
}