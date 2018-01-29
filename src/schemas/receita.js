import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';


const RootReceita = new GraphQLObjectType({
    name: 'RootReceita',
    fields: () => ({
        _id: { type: GraphQLString },
        nomeID: { type: GraphQLString },
        loteID:{ type: GraphQLString },
        concentracao:{ type: GraphQLString },
        proporcao:{ type: GraphQLString },
        concal:{ type: GraphQLString },
        peso:{ type: GraphQLString },
        custo:{ type: GraphQLString }
    })
});


module.exports =  {RootReceita};
