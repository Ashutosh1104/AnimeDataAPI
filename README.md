Make Sure to pass full anime names to filters where names of anime are required such as cast and anime details functions 

<h1>ANIME SCRAPPER</h1>

This is one package that provides you with every bit of data you need to know about anime it scrapers anime planet and my anime list together alongside future addtions of fandom and other major anime websites to give you the data you need to build amazing tools and databses around anime.
It has the following funtions:

<ul>
<li>`getbyName('name','filter'): `name` refers to name of the anime you want details for make sure to get the correct english version of name here. and `filter` is either you want to details for anime or the manga. This function gives you the basic details including no of episodes , season when it aired along with year when it ended, an image link and much more such as genre and traits.</li>
<li>`getCharactersfor('name','filter')`: `name` refers to name of the anime you want to charcaters for and `filter` is either you want to details for anime or the manga. This function gives you all the characters and their pictures that are in the anime whose name is passed along with who did the voice acting for them and small portfolio for the voice actor in case you want to make a hover event </li>
<li>`getStafffor('name','filter')`: `name` refers to name of the anime you want to staff for and `filter` is either you want to details for anime or the manga. This function gives you all the staff memebers including directors , character designers, mangaka's as well as music if its on anime planet also it gives a small list of other projects that these people have worked on </li>
<li> `getSimilarfor('name','filter')`: `name` refers to name of the anime you want similar anime for and `filter` is either you want similar anime or simialr manga. This function gives you a list of 9 similar anime or manga to given anime as rated by the community.</li>
<li>`getallbyName('name','filter')`: This function gives you all the four funtions mentioned above as a single result so once loaded your product works much faster.</li>
<li>getTop100('filter',timing)`:`filter` refers to either you want anime or manga while timing is wheter you want top anime of `all` time ,`week` or `today` .This function gives you a list of atmost 100 anime for the spicifired timing. (all, week or today) </li>
<li>`ggetSeasonal('season')`: `season` refers to whichever season you want the its given like 'fall-2018'</li>
<li>`getTopCharacters(no,'by')`: `no` refers to no of no of characters you want and by is either `loved` which gives top loved characters or `hated` which gives the top hated characters. chose wisely.</li>
<li> searchbyName('term','filter')`: `term` refers to name or part of name of the anime you want to search for and `filter` is either you want search for anime or manga. This function gives you a list of all the anime that have the term in thier title.</li>
</ul>

<h2>Defaults</h2> 
<li>keep almost every input lowercase</li>
<li>deafult for filter is <b>'anime'</b></li>
<li>deafult for timing in getTop 100 is <b>'all'</b></li>


NOTE: all outputs statemts are as follows 
```javascript
  {
    resultPresnt : true or false // 

    response : 'any output shown below is put here'
  }
}
```

Examples: 

```javascript
getbyName('black clover').then((result)=>{
    console.log(result)
})

async function x (){
    let x = await getbyName('black clover');
    console.log(x);
}
```
output:
```
{ name: 'Black Clover',
  img: 'https://www.anime-planet.com/images/anime/covers/black-clover-8317.jpg?t=1506626011',
  alternativeName: undefined,
  season: { time: 'Fall', start: 2017, end: '?' },
  type: 'TV',
  episodes: 64,
  stuOrpub: 'Studio Pierrot ',
  rating: 3.721,
  rank: 2214,
  plot: 'In a world where magic is everything, Asta and Yuno are both found abandoned at a church on the same day. While Yuno is gifted with exceptional magical powers, Asta is the only one in this world without any. At the age of fifteen, both receive grimoires, magic books that amplify their holder’s magic. Asta’s is a rare Grimoire of Anti-Magic that negates and repels his opponent’s spells. Being opposite but good rivals, Yuno and Asta are ready for the hardest of challenges to achieve their common dream: to be the Wizard King. Giving up is never an option!',
  source: ' Crunchyroll',
  tags:
   [ 'Action',
     'Adventure',
     'Fantasy',
     'Shounen',
     'Childhood Promise',
     'Guilds',
     'Magic',
     'Based on a Manga' ] }
```

```javascript
getCharactersfor('black clover').then((result)=>{
    console.log(result)
})
```
output:
```
[ { name: 'Asta',
    image: 'https://www.anime-planet.com/images/characters/thumbs/asta-black-clover-92579.jpg?t=1509725981',
    voiceActors: { English: [Array], Japanese: [Array] } },
  { name: 'Noelle SILVA',
    image: 'https://www.anime-planet.com/images/characters/thumbs/noelle-silva-92585.jpg?t=1517597042',
    voiceActors: { English: [Array], Japanese: [Array] } },
  { name: 'Yuno',
    image: 'https://www.anime-planet.com/images/characters/thumbs/yuno-black-clover-92580.jpg?t=1509724451',
    voiceActors: { English: [Array], Japanese: [Array] } },
  { name: 'Charmy PAPPITSON',
    image: 'https://www.anime-planet.com/images/characters/thumbs/charmy-pappitson-129860.jpg?t=1513456856',
    voiceActors: { English: [Array], Japanese: [Array] } },
  { name: 'Finral ROULACASE',
    image: 'https://www.anime-planet.com/images/characters/thumbs/finral-roulacase-129858.jpg?t=1511982087',
    voiceActors: { English: [Array], Japanese: [Array] } },
    .
    .
    .
  { name: 'Zuta',
    image: 'https://www.anime-planet.com/images/characters/thumbs/zuta-151565.jpg?t=1537051336',
    voiceActors: { English: [Array], Japanese: [Array] } } ]
```

```javascript
getStafffor('black clover').then((result)=>{
    console.log(result)
})
```
output:
```
[ { name: 'Itsuko TAKEDA',
    image: 'https://www.anime-planet.com/images/characters/blank_char.gif',
    field: 'Character Design',
    otherworks:
     [ 'Level E',
       'Blue Drop: Tenshi-tachi no Gikyoku',
       'Boys Be...',
       'Kingdom 2',
       'Black Clover' ] },
  { name: 'Tatsuya YOSHIHARA',
    image: 'https://www.anime-planet.com/images/characters/blank_char.gif',
    field: 'Director',
    otherworks:
     [ 'Monster Musume OVA',
       'Yatterman Night',
       'Namiuchigiwa no Muromi-san',
       'Black Clover',
       'Monster Musume no Iru Nichijou' ] },
  { name: 'Minako SEKI',
    image: 'https://www.anime-planet.com/images/people/thumbs/minako-seki-22469.jpg?t=1505086010',
    field: 'Music',
    otherworks: [ 'Kingdom', 'Kingdom 2', 'The Silver Guardian', 'Black Clover' ] },
  { name: 'Yuuki TABATA',
    image: 'https://www.anime-planet.com/images/characters/blank_char.gif',
    field: 'Original Manga Creator',
    otherworks:
     [ 'Black Clover Gaiden: Quartet Knights',
       'Hungry Joker (Pilot)',
       'Hungry Joker',
       'Black Clover',
       '4-Koma Gekijou!!' ] } ]
```

```javascript
getSimilarfor('black clover').then((result)=>{
    console.log(result)
})
```
output:
```
[ { name: 'Fairy Tail',
    img: 'https://www.anime-planet.com/images/anime/covers/thumbs/fairy-tail-2703.jpg?t=1429317311',
    type: 'TV',
    episodes: 175,
    details: 'Lucy is a seventeen-year-old mage with the power to summon stellar spirits, but what she really wants to do is join a guild - and not just any guild. She has hereyes set on Fairy Tail, a notoriously reckless and outrageous group of magic ing the same Anime.Fantasy magic show with a badass group of people who use unique magic as the main protagonists.',
    run: { from: 2009, to: 2013 },
    tags:
     [ 'Action',
       'Adventure',
       'Comedy',
       'Fantasy',
       'Shounen',
       'Guilds',
       'Magic',
       'Based on a Manga' ] },
  .,
  .,
  .,
  .,
  { name: 'My Hero Academia',
    img: 'https://www.anime-planet.com/images/anime/covers/thumbs/my-hero-academia-7585.jpg?t=1490303988',
    type: 'TV',
    episodes: 13,
    details: 'Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially challenging for a kid with no superpowers. That’s right, in a world where eighty percent of the population has some kind of super-powered “quirk,” Izuku was unlucky enough to be born completely normal. But that’s not going to stop him from enrolling in one of the world’s most prestigious hero academies. Now, the only thing standing between him and his first class is the academy’s formidable entrance exam—nothing a little private tutoring from the world’s mightiest hero can’t solve.3 votesI agree Watch onlineIn both animes main character is non-gifted personin magical world. both rivals are especialy gifted ones.I am currently following both series and wnjoy them both a great deal. If someone has similar taste they might enjoy the other one.There are a few similarities between the shows, though there are also differences. In Black Clover, the MC is an orphan, unlike Izuku, who was raised in the church where he was found alongside another boy of the same age at infanthood. In the world of Black Clover, everyone has magic, and magic is everything. However, Asta, the MC, is the only person in the entire kingdom, possibly the world, with no magic to speak of what so ever. He has trained his body every of the fifteen years he\'s been alive so that he can fulfill his dream of becoming a magic knight, the protectors of the realm, and becoming Wizard King, the most powerful wizard in the kingdom. Ring any bells? Whats more, the boy who was discovered with Asta by the church is a boy named Yuno who also aspires to become the Wizard King, and has been gifted with incredibly powerful magic. Once a year, ever 15-year-old in the kingdom is givena grimoire, a magical book that records spells and enhances the user\'s magical powers. Asta\'s rival, Yuno, is given an incredibly rare, powerful, and legendary grimoire while Asta, hoping that his grimoire will finally allow him to use magic is instead gifted with a strange and unknown power that carries him through the Magic Nights Exams and intoknighthood. However, his adventures have only just begone and trouble is stirring deep within the Kingdom. To me, this show is both exremely similar to MHA, and yet unique as well.',
    run: { from: 2016, to: NaN },
    tags:
     [ 'Action',
       'Adventure',
       'Comedy',
       'Fantasy',
       'Shounen',
       'Guilds',
       'Magic',
       'Based on a Manga' ] },
   ]
```

```javascript
getTop100().then((result)=>{
    console.log(result)
})
```
output:
```
[ 
    ...
    ...
    ...
    { title: '',
    rank: '51',
    type: 'TV',
    name: 'The Disastrous Life of Saiki K. 2nd Season',
    altName: 'Saiki Kusuo no Psi Nan 2nd Season',
    episode: 24,
    rating: 4.5,
    plot: 'Second season of The Disastrous Life of Saiki K.',
    source: undefined,
    year: 2018,
    tags: 
     [ 'Comedy',
       'Shounen',
       'Slice of Life',
       'Breaking the Fourth Wall',
       'Gag',
       'Psychic Powers',
       'School Life',
       'Supernatural',
       'Superpowers',
       'Based on a Manga' ] },
  { title: '',
    rank: '52',
    type: 'Movie',
    name: 'Kizumonogatari Movie 2: Nekketsu',
    altName: 'Kizumonogatari Movie 2',
    episode: 1,
    rating: 4.5,
    plot: 'Part 2 of the Kizumonogatari trilogy.',
    source: undefined,
    year: 2016,
    tags: 
     [ 'Action',
       'Ecchi',
       'Psychological',
       'Supernatural',
       'Vampires',
       'Explicit Violence',
       'Based on a Light Novel' ] },
  { title: '',
    rank: '53',
    type: 'TV',
    name: 'Bunny Drop',
    altName: 'Usagi Drop',
    episode: 11,
    rating: 4.5,
    plot: 'When Daikichi\'s grandfather dies he leaves behind a young daughter named Rin. However, as most of the family is embarrassed at the idea of a 79-year-old man having a six-year-old child, they can\'t seem to figure out what to do with her. Disgusted by this behavior, Daikichi decides to take care of her himself, but he\'s a bachelor, has no idea how to raise a child, and isn\'t even all that comfortable with kids! Now, Daikichi must do the normal things a parent does such as enroll her in school, buy her clothing and teach her about the life and world around her. But more importantly, he must also help her deal with her father\'s death and decide whether or not she should try to find her mother. Together, the two begin their unlikely relationship as father and daughter, navigating each of life\'s bumps along the way.',
    source: undefined,
    year: 2011,
    tags: 
     [ 'Drama',
       'Josei',
       'Slice of Life',
       'Childcare',
       'Family Life',
       'Iyashikei',
       'Lifestyle Change',
       'noitaminA',
       'Single Parent',
       'Based on a Manga' ] },
  { title: '',
    rank: '100',
    type: 'TV',
    name: 'Barakamon',
    altName: undefined,
    episode: 12,
    rating: 4.5,
    plot: 'When calligrapher Sei "Seishuu" Handa becomes so enraged at a judge\'s critique of his work that he actually punches the old man, his father decides that Sei needs to reflect on his behavior and sends him to a remote island to live. Far from the modern conveniences of the city, the moody artist must adapt to his rural environment and his quirky but well-intentioned neighbors. How can he focus on his art when his appliances frequently don\'t work, his neighbors keep bothering him, and the neighborhood children have turned his house into a secret base?',
    source: undefined,
    year: 2014,
    tags: 
     [ 'Comedy',
       'Shounen',
       'Slice of Life',
       'Art',
       'Countryside',
       'Island',
       'Iyashikei',
       'Lifestyle Change',
       'Based on a Manga' ] } ]
```

```javascript
getSeasonal('fall-2018').then((result)=>{
    console.log(result)
})
```
output:
```
{ 
   anime:
   [
       // a list of data sets you get from getbyName for anime in this season
   ]
   movies:
   [
       //same a list of data sets you get from getbyName for anime movies in this season
   ]
   OVA:
   [ //same a list of data sets you get from getbyName for OVAS and Specials in the season
       { name: 'Asobi Asobase OVA',
       img: 'https://www.anime-planet.com/images/anime/covers/thumbs/asobi-asobase-ova-10736.jpg?t=1538673013',
       altName: 'Asobi Asobase - workshop of fun - OVA',
       type: 'OVA',
       episode: 1,
       rating: 4,
       plot: 'Unaired episode bundled with the 7th volume of the Asobi Asobase manga.',
       source: undefined,
       year: 2018,
       tags: [Array] },
     { name: 'Asobi Asobase Specials',
       img: 'https://www.anime-planet.com/images/anime/covers/thumbs/asobi-asobase-specials-11346.jpg?t=1546153721',
       altName: 'Asobi Asobase - workshop of fun - Specials',
       type: 'DVD Special',
       episode: 2,
       rating: 4,
       plot: 'This entry currently doesn\'t have a synopsis. Check back soon!',
       source: undefined,
       year: 2018,
       tags: [Array] },
     { name: 'Yu Yu Hakusho Specials',
       img: 'https://www.anime-planet.com/images/anime/covers/thumbs/yu-yu-hakusho-specials-9433.jpg?t=1525269510',
       altName: undefined,
       type: 'DVD Special',
       episode: 2,
       rating: 4,
       plot: 'This entry currently doesn\'t have a synopsis. Check back soon!',
       source: undefined,
       year: 2018,
       tags: [Array] } ........]
}
```

```javascript
getTopCharacters(15,'loved').then((result)=>{
    console.log(result)
})
```
output:
```
[ { name: 'L',
    anime:
     [ 'Death Note',
       'Death Note Rewrite 1: Visions of a God',
       'Death Note Rewrite 2: L\'s Successors' ],
    rank: '1',
    img: 'https://www.anime-planet.com/images/characters/thumbs/l-death-note-1337.jpg?t=1429317791',
    manga:
     [ 'Death Note',
       'Death Note: L Change the World (Light Novel)',
       'Death Note Special' ],
    traits:
     [ 'Male',
       'Black Hair',
       'Analytical',
       'Barefoot',
       'Detective',
       'Sweet Tooth' ],
    upvotes: 31182 },
  { name: 'Death The Kid',
    anime: [ 'Soul Eater', 'Soul Eater Not!' ],
    rank: '15',
    img: 'https://www.anime-planet.com/images/characters/thumbs/death-the-kid-139.jpg?t=1525628510',
    manga: [ 'Soul Eater', 'Soul Eater Not!' ],
    traits:
     [ 'Male',
       'Multicolored Hair',
       'Bossy',
       'Dual Wielder',
       'Gunslinger',
       'Shinigami',
       'Teenager' ],
    upvotes: 16385 } ]
```
```javascript
searchbyName('bunny').then((result)=>{
    console.log(result)
})
```
output:
```
[ { name: 'Bloody Bunny',
    img: 'https://www.anime-planet.com/images/anime/covers/thumbs/bloody-bunny-5112.jpg?t=1465497015',
    altName: 'Bloody Bunny',
    type: 'TV',
    episode: 26,
    rating: 1.7,
    plot: 'This entry currently doesn\'t have a synopsis. Check back soon!',
    source: undefined,
    year: 2012,
    tags:
     [ 'Comedy',
       'Animal Protagonists',
       'Assassins',
       'Rabbits',
       'Short Episodes' ] },
  { name: 'Bunny Drop',
    img: 'https://www.anime-planet.com/images/anime/covers/thumbs/bunny-drop-3751.jpg?t=1433238420',
    altName: 'Usagi Drop',
    type: 'TV',
    episode: 11,
    rating: 4.5,
    plot: 'When Daikichi\'s grandfather dies he leaves behind a young daughter named Rin. However, as most of the family is embarrassed at the idea of a 79-year-old man havinga six-year-old child, they can\'t seem to figure out what to do with her. Disgusted by this behavior, Daikichi decides to take care of her himself, but he\'s a bachelor, has no idea how to raise a child, and isn\'t even all that comfortable with kids! Now, Daikichi must do the normal things a parent does such as enroll her in school, buy her clothing and teach her about the life and world around her. But more importantly, he must also help her deal with her father\'s death and decide whether or not she should try to find her mother. Together, the two begin their unlikely relationship as father and daughter, navigating each of life\'s bumps along the way.',
    source: undefined,
    year: 2011,
    tags:
     [ 'Drama',
       'Josei',
       'Slice of Life',
       'Childcare',
       'Family Life',
       'Iyashikei',
       'Lifestyle Change',
       'noitaminA',
       'Single Parent',
       'Based on a Manga' ] }.... ]
```

