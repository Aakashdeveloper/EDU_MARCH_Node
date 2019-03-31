import express from 'express';
const app = express();
const port = 8900;

app.use(express.static(__dirname+'/public'));
app.set('views','./src/views');
app.set('view engine', 'ejs');

const menu = [
    {link:'/',name:'Home'},
    {link:'/movies',name:'Movies'},
    {link:'/restaurants',name:'Restaurants'}
]

const moviesRouter = require('./src/routes/movies_routes')(menu);
const restaurantsRouter = require('./src/routes/restaurant_routes')(menu);

app.use('/movies',moviesRouter);
app.use('/restaurants',restaurantsRouter);

app.get('/', (req ,res) => {
    res.render('index',{title:'Home Page',
                        menu})
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})