import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const User = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        email: { type: GraphQLString },
        type: { type: GraphQLString },
    })
});

module.exports =  User;