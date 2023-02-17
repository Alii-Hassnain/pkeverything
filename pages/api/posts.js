// import formidable from 'formidable';
import Config from '../../lib';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const readResponse = (req) => new Promise((resolve, reject) => {
//   const form = new formidable.IncomingForm();
//   form.keepExtensions = true;
//   form.parse(req, (err, fields, files) => {
//     if (err) reject(err);

//     // this handle is just returning singles file if multiple than handle multiple files
//     resolve({ fields, files });
//   });
// });

export default async function handler(req, res) {
  let myPost;
  let allPosts;
  let data;

  const client = await Config.dbPromise;

  const db = client.db('bijliwala');

  switch (req.method) {
    case 'POST':
      myPost = await db.collection('posts').insertOne(data.fields);
      // This will get the data and insert it into db
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
