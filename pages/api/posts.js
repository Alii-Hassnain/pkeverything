// import formidable from 'formidable';
import Config from '../../lib';

export default async function handler(req, res) {
  let myPost;
  let allPosts;
  let data;

  const client = await Config.dbPromise;

  const db = client.db('bijliwala');

  switch (req.method) {
    case 'POST':
      data = req.body;
      myPost = await db.collection('posts').insertOne(data);
      // This will get the data and insert it into db
      console.log('in posts');
      res.json(myPost);
      break;
    case 'GET':
      allPosts = await db.collection('posts').find({}).limit(10).toArray();
      // This will get all the posts
      res.json(allPosts);
      break;
    default:
  }
}
