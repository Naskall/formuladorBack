import graphql from 'graphql';
import {GraphQLSchema} from 'graphql';

import RootQuery from './root_query_type';
import Mutation from './mutation';


module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
