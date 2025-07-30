async function getResult() {
  const delayedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done!");
    }, 1000);
  });

  try {
    const result = await delayedPromise;
    console.log(result);  // Logs: Done!
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Call the function
getResult();