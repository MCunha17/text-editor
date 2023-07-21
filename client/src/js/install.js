// Event listener for when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', (event) => {
  // Get a reference to the install button
  const butInstall = document.getElementById('buttonInstall');

  // Logic for installing the PWA
  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default behavior of the prompt
    event.preventDefault();

    // Store the event for later use
    deferredPrompt = event;

    // Show the install button
    butInstall.style.display = 'block';
  });

  // Handle the click event on the install button
  butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
      // Show the installation prompt
      deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      const result = await deferredPrompt.userChoice;

      // Reset the install button display
      butInstall.style.display = 'none';

      // Clear the deferred prompt variable
      deferredPrompt = null;
    }
  });

  // TODO: Add an event handler for the `appinstalled` event
  window.addEventListener('appinstalled', (event) => {
    // Hide the install button
    butInstall.style.display = 'none';

    // Perform any additional actions after the app is installed
    console.log('App installed');
  });
});