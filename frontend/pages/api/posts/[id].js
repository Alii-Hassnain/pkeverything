// import formidable from 'formidable';
import { ObjectId } from 'mongodb';
import Config from '../../../lib';

export default async function handler(req, res) {
  const client = await Config.dbPromise;

  const db = client.db('bijliwala');
  const { id } = req.query;
  const post = await db.collection('posts').findOne({ _id: new ObjectId(id) });
  // This will get all the posts
  console.log(id);
  res.json(post);
}
