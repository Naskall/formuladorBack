import { GraphQLObjectType, GraphQLString } from 'graphql';
import RootResponse from './person';




const response = {response: 'graphql is working'};

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
        response: {
            type: RootResponse,
            resolve(parentValue, args){
                return response;
            }
        }
  })
});

module.exports = RootQuery;
