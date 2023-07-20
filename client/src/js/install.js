const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior of the prompt
  event.preventDefault();

  // Store the event for later use
  const deferredPrompt = event;

  // Show the install button
  butInstall.style.display = 'block';

  // Handle the click event on the install button
  butInstall.addEventListener('click', async () => {
    // Show the installation prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const result = await deferredPrompt.userChoice;

    // Reset the install button display
    butInstall.style.display = 'none';

    // Clear the deferred prompt variable
    deferredPrompt = null;
  });
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // Hide the install button
  butInstall.style.display = 'none';

  // Perform any additional actions after the app is installed
  console.log('App installed');
});