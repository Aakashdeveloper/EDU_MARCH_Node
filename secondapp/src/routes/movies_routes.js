import express from 'express';
import mongodb from 'mongodb';
import 'babel-polyfill';
const mongod = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';
const database = 'classdatabase';
const moviesRouter = express.Router();

function router(menu){
    moviesRouter.route('/')
        .get((req,res) => {
          (async function mongo(){
            let client;
            try{
              client = await mongod.connect(url);
              const db = client.db(database);
              const col = await db.collection('movies');
              const data = await col.find().toArray();
              res.render('movies', 
                          {title:'Movies Page',
                           menu:menu,
                           movies:data})
            }
            catch(err){
              throw err;
            }
          }())
            
    })
    moviesRouter.route('/details/:id')
        .get((req,res) => {
          const {id} = req.params;
          (async function mongo(){
            let client;
            try{
              client = await mongod.connect(url);
              const db = client.db(database);
              const col = await db.collection('movies');
              const detail = await col.findOne({_id:id})
              res.render('movies_detail',
                         {title:'Movies Detail Page',
                          menu:menu,
                          movies:detail})
            }
            catch(err){
              throw err
            }
          }())      
    })

    return moviesRouter;

}

module.exports = router;