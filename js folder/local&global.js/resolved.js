 //Function that returns a promise resolved with "Hello!" after 1 second
function delayedGreeting() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello!");
    }, 1000);
  });
}

//Async function that awaits the greeting and logs it
async function showGreeting() {
  try {
    const message = await delayedGreeting();
    console.log(message);  // Logs: Hello!
  } catch (error) {
    console.error("error:", error.message);
  }
// Call the function
showGreeting();