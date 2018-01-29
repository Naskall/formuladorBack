import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';


const RootResponse = new GraphQLObjectType({
    name: 'RootResponse',
    fields: () => ({
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        registerDate: { type: GraphQLString },
        birthDate: { type: GraphQLString },
        role: { type: GraphQLString },
        sector: { type: GraphQLString },
        phoneNumber: { type: GraphQLInt },
        address: { type: GraphQLString },
        cpf: { type: GraphQLInt }
    })
});


module.exports =  RootResponse ;