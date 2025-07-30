async function getResult() {
  // Create a promise that resolves after 1 second with "Done!"
  const delayedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("WELL COME TO MY WEB PAGE  IN SCREEN");
      // You can test error handling by replacing the above line with:
      // reject(new Error("Something went wrong"));
    }, 1000);
  });

  try {
    const result = await delayedPromise;
    console.log(result); // Logs WELL TO MY WEBPAGES IN THE SCREEN
  } catch (error) {
    console.error("Error:", error.message);
  }
}
// Call the function
getResult();