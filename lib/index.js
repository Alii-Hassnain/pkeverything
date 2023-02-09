
import { MongoClient } from 'mongodb';
import { Storage } from 'megajs';

const megaOptions = {
  email: process.env.MEGA_EMAIL,
  password: process.env.MEGA_PASS,
};

const storage = new Storage(megaOptions, () => {

});
const storagePromise = storage.ready;

storage.once('ready', () => {
  // User is now logged in
  console.log('storege is loggedin');
});

storage.once('error', (error) => {
  // Some error happened
  console.log('there was an error while logging in mega', error);
});

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global.mongoClientPromise) {
    client = new MongoClient(uri, options);
    global.mongoClientPromise = client.connect();
  }
  clientPromise = global.mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
const dbPromise = clientPromise;
export default { dbPromise, storagePromise };
