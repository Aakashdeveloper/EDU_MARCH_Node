import express from 'express';
const app = express();
import request from 'request';
const port = 7800;

const url = 'http://api.openweathermap.org/data/2.5/forecast/daily?id=5308655&appid=fbf712a5a83d7305c3cda4ca8fe7ef29&cnt=10';
app.use(express.static(__dirname+'/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    request(url,(err,response,body) => {
        if(err) throw err;
        else {
            const output = JSON.parse(body)
            res.render('index',{output})
        }
    })
})

app.listen(port,() => {
    console.log(`server running on port ${port}`)
})