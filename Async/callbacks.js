/*
 * A callback is a function that is passed as an argument to a function
 * and that will be invoked
 * It's the base of async
 * Can lead to callback hell which basically is a lot of nested callbacks
 * that affect readability and maintanability
 */

function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 2, sum)); // 4

setTimeout(() => {
  console.log("Hello world");
}, 2000); // After 2s it will execute the callback function

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
import { XMLHttpRequest } from "xmlhttprequest";
const API = "https://rickandmortyapi.com/api/character";

function fetchData(url, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", url, true);
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      }
    } else {
      const error = new Error(`Error ${url}`);
      return callback(error, null);
    }
  };

  xhttp.send();
}

fetchData(API, function (error, data) {
  if (error) return console.error(error);
  console.log("The data =>", data);
});

// A beautiful (?) callback hell!

setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    setTimeout(() => {
      console.log(3);
      setTimeout(() => {
        console.log(4);
        setTimeout(() => {
          console.log(5);
        }, 500);
      }, 500);
    }, 500);
  }, 500);
}, 500);

//Converting it to promises
new Promise(function (resolve) {
  setTimeout(resolve, 500);
})
  .then(() => {
    console.log(1);
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  })
  .then(() => {
    console.log(2);
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  })
  .then(() => {
    console.log(3);
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  })
  .then(() => {
    console.log(4);
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  })
  .then(() => {
    console.log(5);
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  });

//Now its only 1 level deeper, much more readable, debuggable, understandable
// To turn any callback based API into a promise based API, you have to
// wrap the functions inside promises and resolve them once the task is completed
// so you can chain the thens

//Refactoring to use async/await

function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function paradise() {
  console.log(1);
  await wait(500);

  console.log(2);
  await wait(500);

  console.log(3);
  await wait(500);

  console.log(4);
  await wait(500);

  console.log(5);
  await wait(500);
}

paradise();
