
import dbpromise from '.';

let client;
let db;

async function init() {
  if (db) return;
  try {
    client = await dbpromise;
    console.log(client);
    // db = await client.db();
  } catch (err) {
    throw new Error('Failed to establish connection with database');
  }
}

(async () => {
  console.log(process.env.MONGODB_URI);
})();

export const fetchPosts = async () => {
  try {
    if (!db) await init();

    const result = await db.collection('Posts').find({}).limit(5).toArray();

    return { posts: result };
  } catch (err) {
    return { error: 'Failed to fetcch Posts' };
  }
};
