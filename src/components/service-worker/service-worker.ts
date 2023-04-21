export const register = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('/service-worker.js');
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      } catch (error) {
        console.log('ServiceWorker registration failed: ', error);
      }
    });
  }
};
