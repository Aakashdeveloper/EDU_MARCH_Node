const graphql = require('graphql');
const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLSchema
} = graphql

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
                return axios.get(`http://localhost:8600/products/${args.productId}`)
                    .then(resp => resp.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})