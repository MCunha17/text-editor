import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate');
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and puts it in the database
export const putDb = async (content) => {
  try {
    const db = await openDB('jate', 1);
    const transaction = db.transaction('jate', 'readwrite');
    const store = transaction.objectStore('jate');
    await store.put(content, 'content');
    console.log('Content added to database:', content);
  } catch (error) {
    console.error('Error adding content to database:', error);
  }
};

// Add logic for a method that gets the content from the database
export const getDb = async () => {
  try {
    const db = await openDB('jate', 1);
    const transaction = db.transaction('jate', 'readonly');
    const store = transaction.objectStore('jate');
    const content = await store.get('content');
    console.log('Content retrieved from database:', content);
    return content;
  } catch (error) {
    console.error('Error retrieving content from database:', error);
    return null;
  }
};

initdb();