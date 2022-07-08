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
