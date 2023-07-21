import { Workbox } from 'workbox-window';
import Editor from './editor';
import { putDb, getDb } from './database';
import '../css/style.css';

// Select the main element and clear its content
const main = document.querySelector('#main');
main.innerHTML = '';

// Function to display a loading spinner
const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
    <div class="loading-container">
      <div class="loading-spinner"></div>
    </div>
  `;
  main.appendChild(spinner);
};

// Create a new instance of the Editor class
const editor = new Editor();
// If the editor is undefined, display a loading spinner
if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // Register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register()
    .then((registration) => {
      console.log('Service Worker registered:', registration);
    })
    .catch((error) => {
      console.log('Service Worker registration failed:', error);
    });
} else {
  console.error('Service workers are not supported in this browser.');
}

// Get a reference to the text editor element
const textEditor = document.getElementById('editor');

// Function to load the content from IndexedDB and display it in the editor
const loadContentFromDB = async () => {
  const content = await getDb();
  if (content) {
    textEditor.value = content.content;
  }
};

// Load the content from IndexedDB and display it in the editor
loadContentFromDB();

// Event listener for the blur event on the text editor
textEditor.addEventListener('blur', () => {
  // Get the current content of the text editor
  const content = textEditor.value;

  // Save the content to IndexedDB using the putDb function
  putDb({ content })
    .then(() => {
      console.log('Content saved to IndexedDB:', content);
    })
    .catch((error) => {
      console.error('Error saving content to IndexedDB:', error);
    });
});