const graphql = require('graphql');
const  _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLSchema
} = graphql

const products = [
    {"productId": 1, "productName": "Leaf Rake", "productCode": "GDN-0011", "releaseDate": "March 19, 2016",
        "price": 19.95,
        "starRating": 3.5
      },
      {"productId": 2,"productName": "Garden Cart","productCode": "GDN-0023","releaseDate": "March 18, 2016",
        "price": 32.99,
        "starRating": 4.2
      },
      { "productId": 3,"productName": "Hammer","productCode": "TBX-0048","releaseDate": "May 21, 2016",
        "price": 8.9,
        "starRating": 4.8
      },
      {"productId": 8, "productName": "Saw","productCode": "TBX-0022","releaseDate": "May 15, 2016",
        "price": 11.55,
        "starRating": 3.7
      },
]

const productType = new GraphQLObjectType({
    name:'Product',
    fields:{
        productId:{type:GraphQLInt},
        productName:{type:GraphQLString},
        productCode:{type:GraphQLString},
        releaseDate:{type:GraphQLString},
        price:{type:GraphQLFloat},
        starRating:{type:GraphQLFloat}
    }
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        product:{
            type:productType,
            args:{productId:{type:GraphQLInt}},
            resolve(parentValue,args){
                return _.find(products,{productId:args.productId})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})