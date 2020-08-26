const express = require('express');
const router = express.Router();

var {
    getbyName,
    getCharactersfor,
    getStafffor,
    getSimilarfor,
    getallbyName,
}=require('../lib/anime')
var {getTop100}=require('../lib/topAnime')
var {getSeasonal}= require('../lib/seasonal') //only in anime
var {searchbyName}=require('../lib/search')

router.get('/basicDeatils/:name' , async( req, res )=>{
    let result = await getbyName(req.params.name);
    res.send(result);
})
router.get('/Charactersof/:name' , async( req, res )=>{
    let result = await getCharactersfor(req.params.name);
    res.send(result);
})
router.get('/Staffof/:name' , async( req, res )=>{
    let result = await getStafffor(req.params.name);
    res.send(result);
})
router.get('/Similarto/:name' , async( req, res )=>{
    let result = await getSimilarfor(req.params.name);
    res.send(result);
})
router.get('/fullDeatils/:name' , async( req, res )=>{
    let result = await getallbyName(req.params.name);
    res.send(result);
})
router.get('/top100/:timing' , async( req, res )=>{
    let result = await getTop100( req.params.timing );
    res.send(result);
})
router.get('/seasonal/:season' , async( req, res )=>{
    let result = await getSeasonal( req.params.season );
    res.send(result);
})
router.get('/searchbyName/:name' , async( req, res )=>{
    let result = await searchbyName( req.params.name );
    res.send(result);
})
module.exports = router;