import express from 'express';
import expressGraphQL from 'express-graphql';
import schema from './schemas/schema';
import mongoose from './../src/db/mongoose';
const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
