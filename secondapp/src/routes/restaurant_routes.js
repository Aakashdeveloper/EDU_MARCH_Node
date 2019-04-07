import express from 'express';
import mongodb from 'mongodb';
const mongod = mongodb.MongoClient;
const mongourl = 'mongodb://localhost:27017';
const restaurantsRouter = express.Router();


// Restaurant Routes
function router(menu){
    restaurantsRouter.route('/')
        .get((req,res) => {
          mongod.connect(mongourl,(err,db) => {
            var dbo = db.db('classdatabase')
            dbo.collection('restaurants').find().toArray((err,restaurants)=>{
              res.render('restaurants',{title:'Restaurants Page',
                                    menu,
                                    restaurants})
            })
          })
            
  })

    restaurantsRouter.route('/details/:name')
        .get((req,res) => {
            const {name} = req.params;
            //console.log(query)
            mongod.connect(mongourl,(err,db) => {
              var dbo = db.db('classdatabase')
              dbo.collection('restaurants').findOne({name:name},(err,data) => {
                if(err) throw err;
                console.log(">>>>>>>>>>>>>>>>",data)
                res.render('restaurant_detail', {title:'Restaurants Detail',
                            menu:menu,
                            restaurants:data})
              })
            })
    });

    return restaurantsRouter
}


  module.exports = router;