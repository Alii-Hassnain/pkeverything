
import clientPromise from '.';

let client;
let db;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
  } catch (err) {
    throw new Error('Failed to establish connection with database');
  }
}

(async () => {
  await init();
})();

export const fetchPosts = () => {

};
