import express from 'express';
const app = express();
const port = 8900;
const moviesRouter = express.Router();
const restaurantsRouter = express.Router();


app.use(express.static(__dirname+'/public'));
app.set('views','./src/views');
app.set('view engine', 'ejs');

const menu = [
    {link:'/',name:'Home'},
    {link:'/movies',name:'Movies'},
    {link:'/restaurants',name:'Restaurants'}
]

const movies= [
    {
      "_id": "5ab12612f36d2879268f284a",
      "name": "Black Panther",
      "language": "ENGLISH",
      "rate": 4.5,
      "type": "Action Adventure Fantasy",
      "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg"
    },
    {
      "_id": "5ab12666f36d2879268f2902",
      "name": "Death Wish",
      "language": "ENGLISH",
      "type": "Action Crime Thriller",
      "rate": 3.2,
      "imageUrl": "https://image.ibb.co/gC9PfH/dw.jpg"
    },
    {
      "_id": "5ab12678f36d2879268f291d",
      "name": "Coco",
      "language": "ENGLISH",
      "type": "Adventure Animation Family",
      "rate": 5,
      "imageUrl": "https://image.ibb.co/dQwWSx/coco.jpg"
    },
    {
      "_id": "5ab126b6f36d2879268f2943",
      "name": "Avengers",
      "language": "ENGLISH",
      "type": "Actione",
      "rate": 2,
      "imageUrl": "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/01/Pictures/_46a0b2c0-3590-11e8-8c5f-3c6cc031651e.jpg"
    },
    {
      "_id": "5ab4e66b0c1d2b27846c6407",
      "name": "Black Friday",
      "language": "ENGLISH",
      "rate": 4.5,
      "type": "Action Adventure Fantasy",
      "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg"
    },
    {
      "_id": "5ab12686f36d2879268f2930",
      "name": "Mission Impossible",
      "language": "English",
      "rate": 2.5,
      "type": "Horror Thriller",
      "imageUrl": "https://pre00.deviantart.net/5d3b/th/pre/f/2017/313/2/b/mission_impossible__dark_directive_teaser_poster_by_themadbutcher-dbt9wav.png"
    },
    {
      "_id": "5ab12698f36d2879268f293e",
      "name": "Incredibles 2",
      "language": "ENGLISH",
      "type": "Animated",
      "rate": 4,
      "imageUrl": "http://static1.squarespace.com/static/588a4776f5e23132a09d23b2/588a4e91be65945e50a36c0e/5b24084baa4a999c88a9f277/1529088827756/tre.jpg"
    }
  ]
const restaurants = [
      {
        "name": "Hopdoddy Burger Bar",
        "backgroundImageURL": "http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/hopdoddy.png",
        "category": "Burgers",
        "contact": {
          "phone": "9723872337",
          "formattedPhone": "(972) 387-2337",
          "twitter": "hopdoddy"
        },
        "location": {
          "address": "5100 Belt Line Road, STE 502",
          "crossStreet": "Dallas North Tollway",
          "lat": 32.950787,
          "lng": -96.821118,
          "postalCode": "75254",
          "cc": "US",
          "city": "Addison",
          "state": "TX",
          "country": "United States",
          "formattedAddress": [
            "5100 Belt Line Road, STE 502 (Dallas North Tollway)",
            "Addison, TX 75254",
            "United States"
          ]
        }
      },
      {
        "name": "Pappadeaux Seafood Kitchen",
        "backgroundImageURL": "http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/pappadeaux.png",
        "category": "Seafood",
        "contact": {
          "phone": "9724479616",
          "formattedPhone": "(972) 447-9616",
          "twitter": "pappadeaux"
        },
        "location": {
          "address": "18349 Dallas Pkwy",
          "crossStreet": "at Frankford Rd.",
          "lat": 32.99908456526653,
          "lng": -96.83018780592823,
          "postalCode": "75287",
          "cc": "US",
          "city": "Dallas",
          "state": "TX",
          "country": "United States",
          "formattedAddress": [
            "18349 Dallas Pkwy (at Frankford Rd.)",
            "Dallas, TX 75287",
            "United States"
          ]
        }
      },
      {
        "name": "Yard House",
        "backgroundImageURL": "http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/yardhouse.png",
        "category": "Tap House",
        "contact": {
          "phone": "9727164004",
          "formattedPhone": "(972) 716-4004",
          "twitter": "yardhouse",
          "facebook": "92873089221",
          "facebookUsername": "YardHouse",
          "facebookName": "Yard House"
        },
        "location": {
          "address": "5100 Belt Line Rd",
          "lat": 32.95061646,
          "lng": -96.81974196,
          "postalCode": "75254",
          "cc": "US",
          "city": "Dallas",
          "state": "TX",
          "country": "United States",
          "formattedAddress": [
            "5100 Belt Line Rd",
            "Dallas, TX 75254",
            "United States"
          ]
        }
      },
      {
        "name": "Pluckers Wing Bar",
        "backgroundImageURL": "http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/pluckers.png",
        "category": "Wing Joint",
        "contact": null,
        "location": {
          "address": "5100 Beltline Rd",
          "lat": 32.95097877918451,
          "lng": -96.82020769859702,
          "cc": "US",
          "city": "Addison",
          "state": "TX",
          "country": "United States",
          "formattedAddress": [
            "5100 Beltline Rd",
            "Addison, TX",
            "United States"
          ]
        }
      },
      {
        "name": "Ramen Hakata",
        "backgroundImageURL": "http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/ramen_hakata.png",
        "category": "Japanese",
        "contact": {
          "phone": "9722472401",
          "formattedPhone": "(972) 247-2401",
          "twitter": "ramenhakata"
        },
        "location": {
          "address": "3714 Belt Line Rd",
          "crossStreet": "Marsh",
          "lat": 32.95270483276971,
          "lng": -96.85424159312772,
          "postalCode": "75001",
          "cc": "US",
          "city": "Addison",
          "state": "TX",
          "country": "United States",
          "formattedAddress": [
            "3714 Belt Line Rd (Marsh)",
            "Addison, TX 75001",
            "United States"
          ]
        }
      }
    ]

// Movies Routes
moviesRouter.route('/')
    .get((req,res) => {
        res.render('movies', {title:'Movies Page',
                                menu:menu,
                                movies:movies})
    })
moviesRouter.route('/details')
    .get((req,res) => {
        res.render('movies_detail', {title:'Movies Detail Page',
                          menu:menu,
                          movies:movies})
    })

// Restaurant Routes

restaurantsRouter.route('/')
    .get((req,res) => {
        res.render('restaurants',{title:'Restaurants Page',
                              menu,
                              restaurants})
    })

restaurantsRouter.route('/details')
    .get((req,res) => {
        res.render('restaurant_detail', {title:'Restaurants Detail',
                          menu:menu,
                          movies:movies})
    })

app.use('/movies',moviesRouter);
app.use('/restaurants',restaurantsRouter);

app.get('/', (req ,res) => {
    res.render('index',{title:'Home Page',
                        menu})
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})