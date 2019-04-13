import express from 'express';
import mongod from 'mongodb';
import bodyParser from 'body-parser';

const MongoClient = mongod.MongoClient;
const port = 3400;
const app = express();
const MongoUrl= "mongodb://127.0.0.1:27017";
const database = "dashboard"
const col = 'userlist'
let db;

app.use(express.static(__dirname+'/public'))
app.set('view engine','ejs')
app.set('views', './src/views')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// Get data
app.get('/',(req,res) => {
    db.collection(col).find().toArray((err,data)=>{
        if(err) throw err;
        res.render('index',{data})
    })
})

// Get data with post call
app.post('/getdata',(req,res) => {
    db.collection(col).find().toArray((err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})

// Post Data
app.post('/addData',(req,res) => {
    db.collection(col).insert(req.body,(err)=>{
        if(err) throw err;
        console.log('data inserted')
    })
    res.redirect('/')
})

//Get User By Name
app.post('/getByName',(req,res) => {
    let name = req.body.name;
    db.collection(col).find({name:name}).toArray(
        (err,data) => {
            if(err) throw err;
            else{
                res.send(data)
            }
        }
    )
})

// Update data
app.put('/update_user',(req,res) => {
    db.collection(col).findOneAndUpdate(
        {"name":req.body.name},{
            $set:{
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone
            }
        },{
            upsert:true
        },(err,result) => {
            if(err) throw err;
            res.send(result)
        }
    )
})

// Delete
app.delete('/deleteUser',(req,res) => {
    db.collection(col).findOneAndDelete({
        "name":req.body.name
    },(err,result) => {
        if(err) throw err;
        res.send({message:"data deleted"})
    })
})

app.get('/new',(req,res)=>{
    res.render('admin')
})

MongoClient.connect(MongoUrl,(err,client) => {
    if(err) throw err;
    db = client.db(database)
    app.listen(port,() =>{
        console.log(`Server is running on port ${port}`)
    })
})