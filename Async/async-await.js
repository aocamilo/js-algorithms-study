/**
 * In JS you can create functions that have an async execution context
 * with the keyword async
 * you can stop the execution of the code to wait for an action to be made with
 * the keyword await. This doesn't block the thread but stops the code in the place it
 * was to wait for the action to complete and continue with the execution of it where it
 * was stopped
 */

const myAsyncFn = async () => {
  const something = await asyncFn();

  console.log(something);
  console.log("Hello!");
};

const asyncFn = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Async!!"), 2000)
      : reject(new Error("Error!"));
  });
};

console.log("Before");
myAsyncFn();
console.log("After");
/**
Output:
 * Before
 * After
 * Async!!
 * Hello!
 */

//This is how async calls are done with async/await

import fetch from "node-fetch";
const API = "https://rickandmortyapi.com/api/character";

async function fetchData(url) {
  try {
    const response = await fetch(url); //Waits for the promise to be fulfilled and stores the value in case its resolved
    const data = await response.json();

    console.log(data.results[0]);
  } catch (e) {
    // If the promise it's rejected it catches the error and manages it here
    console.log(error);
  }
}

fetchData(API);
