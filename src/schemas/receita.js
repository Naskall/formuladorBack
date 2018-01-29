import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';


const Receita = new GraphQLObjectType({
    name: 'Receita',
    fields: () => ({
        _id: { type: GraphQLString },
        nomeID: { type: GraphQLString },
        loteID:{ type: GraphQLString },
        concentracao:{ type: GraphQLString },
        proporcao:{ type: GraphQLString },
        concal:{ type: GraphQLString },
        peso:{ type: GraphQLString },
        custo:{ type: GraphQLString },
        observacao:{type:GraphQLString}
    })
});


module.exports =  Receita;
