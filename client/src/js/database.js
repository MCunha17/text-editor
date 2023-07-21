import { openDB } from 'idb';

// Function to initialize the database
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      // Check if the 'jate' object store already exists in the database
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Create a new object store named 'jate'
      db.createObjectStore('jate');
      console.log('jate database created');
    },
  });

// Function to store content in the database
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

// Function to retrieve content from the database
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

// Initialize the database by calling the initdb function
initdb();