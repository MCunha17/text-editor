import { openDB } from 'idb';

const DB_NAME = 'jate';
const DB_VERSION = 1;
const OBJECT_STORE_NAME = 'jate';

// Function to initialize the database
const initdb = async () => {
  try {
    const db = await openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        // Check if the 'jate' object store already exists in the database
        if (!db.objectStoreNames.contains(OBJECT_STORE_NAME)) {
          // Create a new object store named 'jate'
          const store = db.createObjectStore(OBJECT_STORE_NAME);
          console.log('jate database created');
        }
      },
    });
    console.log('jate database already exists');
    return db;
  } catch (error) {
    console.error('Error initializing database:', error);
    return null;
  }
};

// Function to store content in the database
export const putDb = async (content) => {
  try {
    const db = await openDB(DB_NAME, DB_VERSION);
    const transaction = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const store = transaction.objectStore(OBJECT_STORE_NAME);
    await store.put(content, 'content');
    console.log('Content added to database:', content);
  } catch (error) {
    console.error('Error adding content to database:', error);
  }
};

// Function to retrieve content from the database
export const getDb = async () => {
  try {
    const db = await openDB(DB_NAME, DB_VERSION);
    const transaction = db.transaction(OBJECT_STORE_NAME, 'readonly');
    const store = transaction.objectStore(OBJECT_STORE_NAME);
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