import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import Config from '../../lib';

export const config = {
  api: {
    bodyParser: false,
  },
};

const readResponse = (req) => new Promise((resolve, reject) => {
  const form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) reject(err);

    // this handle is just returning singles file if multiple than handle multiple files
    resolve({ fields, files });
  });
});

export default async function handler(req, next, res) {
  let myPost;
  let allPosts;
  let result;
  let fileLink;
  let tfile;
  let data;
  let buffer;

  const client = await Config.dbPromise;
  const storage = await Config.storagePromise;

  const db = client.db('bijliwala');

  switch (req.method) {
    case 'POST':
      data = await readResponse(req);
      buffer = fs.createReadStream(path.join(process.cwd(), '/multi_page_pdf.pdf'));
      console.log(buffer);
      tfile = await storage.upload(
        {
          name: 'hello-worl',
          size: 12,
        },
        buffer,
      ).complete;
      console.log('The file was uploaded!', tfile);
      fileLink = await tfile.link();
      data.fields.fileUrl = fileLink;
      myPost = await db.collection('posts').insertOne(data.fields);
      result = res.json(myPost);
      console.log(result);
      break;
    case 'GET':
      allPosts = await db.collection('posts').find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
    default:
  }
}
