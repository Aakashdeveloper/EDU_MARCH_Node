import express from 'express';
import fs from 'fs';
const app = express();
const port = 4500;

app.use(express.static(__dirname+'/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    fs.readFile('myText.txt','utf-8',(err,data) => {
        if (err) throw err;
        res.send(data)
    })

});
app.get('/mycode',(req,res) => {
    res.render('index')
})
app.get('/movies', (req,res) => {
   fs.readFile('db.json', (err,data) => {
    if (err) throw err;
       res.send(JSON.parse(data))
   })
});

app.get('/product', (req,res) => {
    res.send('This is product page')
});

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`server is running on port ${port}`)
});