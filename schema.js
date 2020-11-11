const axios = require('axios'); 
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLSchema } = require("graphql"); 

//HeroType
const HeroType = new GraphQLObjectType ({
    name: 'Hero',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        image: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType ({
    name: 'RootQueryType',
    fields: {
        heroes: {
            type: new GraphQLList(HeroType),
            resolve(parent, args) {
                return axios.get("https://overwatch-hero-api.herokuapp.com/api/v1/heroes")
                .then(res => res.data); 
            }
        }
    }
}); 

module.exports = new GraphQLSchema({
    query: RootQuery
}); 