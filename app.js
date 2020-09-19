var express= require('express')
var app = express()
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET');
        return res.status(200).json({});
    }
    next();
});

const PORT = process.env.PORT || 8000 ;

var {getTopCharacters}= require('./lib/characterby')

app.get('/animeAndManga/topCharacters/:no/:orderedBy' , async(req,res)=>{
    let no = parseInt(req.params.no)
    let result = await getTopCharacters(no);
    res.send(result);
})

app.use('/anime', require('./routes/anime'));

app.use('/manga', require('./routes/manga'));

app.listen(PORT,function(){
    console.log('server started on 8000');
})
