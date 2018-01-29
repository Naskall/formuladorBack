import mongoose from 'mongoose';


const MONGO_URI = 'mongodb://localhost:27017/minion';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoDB URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
.once('openUri', () => console.log('Connected to MongoDB.'))
.on('error', error => console.log('Error connecting to MongoDB:', error));

module.exports = { mongoose };