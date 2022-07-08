/**
 * A promise refers to something that will happen in the future, now or never
 * receives two callbacks, one for resolve and one for reject
 * if the promise its resolved you can access the response with then
 * if the promise its rejected you have to access the response with catch or a then with a reject handler*
 * A promise can have 3 states: pending, fulfilled and rejected
 */

const promise = new Promise(function (resolve, reject) {});

const numberOfSheeps = 10;

const coutingSheeps = new Promise(function (resolve, reject) {
  if (numberOfSheeps > 10) {
    resolve(`Zzzzzzzz`);
  } else {
    reject("Havent count enough sheeps to fall asleep");
  }
});

coutingSheeps
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("error -", error);
  });

import fetch from "node-fetch";
const API = "https://rickandmortyapi.com/api/character";

const response = fetch(API);

response
  .then((data) => data.json())
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

const testPromise = new Promise((resolve, reject) => {
  setTimeout(reject(new Error("default error")), 100);
});

testPromise.then(ok, noOk);

import fetch from "node-fetch";

const API2 = "https://rickandmortyapi.com/api/character";

const ok = () => console.log(response[0]);
const noOk = (error) => console.log("oops we fucked up", error);

const responseTwo = fetch(API2);
const testPromiseTwo = new Promise((resolve, reject) => {
  setTimeout(reject(new Error("default error")), 100);
});
//You can send multiple requests together
const myArrofPromises = Promise.all([responseTwo, testPromiseTwo]);
const myArrofPromisesTwo = Promise.allSettled([responseTwo, testPromiseTwo]);

myArrofPromises.then(ok, noOk); //Returns error because one of the promises was rejected
myArrofPromisesTwo.then((results) => {
  results.forEach((result) => console.log(result));
}); //Returns the response or rejection of each promise

//Promise.any returns any promise that is fulfilled
//Promise.race waits until one promise is resolved or rejected and shows the result
