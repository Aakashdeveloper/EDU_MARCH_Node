import mongodb from 'mongodb';
const mongod = mongod.MongoClient;
const url = "mongodb://localhost:27017";

const maincall = () => {

}

let outres
maincall.prototype.getData = (colName) => {
    mongod.connect(url,(err,db) => {
        if(err) throw err;
        let dbo = db.db('testdata');
        dbo.collection(colName).find({}).toArray(
            (err,result) => {
                if(err) throw err;
                outres = result
            }
        )
    })

    return outres
}

module.exports = maincall;