import express from 'express';
import database from './database';

const app = express();
const port = 5000;

app.get('/',(req,res) => {
    let output = database.prototype.getData('oonode');
    res.send(output)
})

app.listen(port,(err) => {
    console.log(`Server is listening on port ${port}`)
})