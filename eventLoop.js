/**
 *
 * https://ull-esit-pl-1819.github.io/introduccion/assets/images/event-loop.png
 * The event loop makes JS look like its multithread even tho it's single thread
 * Memory heap: Saves scope variables and functions (unorganized)
 * Scope: It's determined bt the set of variables, params, and functions that are accesible where the code is executed
 * Stack: stacks (organized) the different instructions given to JS (LIFO)
 * Schedule Tasks: Here is where the schedule tasks are queued to be executed in the no-near future
 * MicroTask Queue: Promises are added here. This queue has the higher priority. Queue (FIFO)
 * Task Queue: The tasks that are ready to be passed to the stack and be executed are added here
 * Event loop: It's an infinite loop that is always checking the queues and stack. If the queue has tasks and the stack
 * is empty, the task is moved to the stack
 *
 */

/**
 *
 * Functions get pushed to the call stack when they're invoked and popped off when they return a value
 */

function greet() {
  return "Hello!";
}

function respond() {
  return setTimeout(() => {
    // Set timeout it's a web API so the web gets in charge of counting the time and telling when it's ready to execute the callback fn
    // This callback is pushed to the callback queue
    return "Hey!"; //And we get the response and the callstack is empty again, the callback queue it's empty again
  }, 1000);
} // The callstack is empty now so after 1000ms the callback it's passed to the stack

greet(); // Greet it's called so it gets pushed to the stack
respond(); // Respond its's called after greet returns value and it's popped from the stack

//Another example
setTimeout(() => {
  //It's called first but returns a callback that gets pushed to the callback queue and the timeout its popped from the stack
  console.log("setTimeout runs first");
  //After myFunction it's popped from the stack it gets empty and then it checks the callback queue and moves the print to the stack
}, 0);

const myFunction = () => {
  // Executes and prints the texts, gets popped from the stack
  console.log("myFunction runs first");
};

myFunction(); // Gets 2nd into the stack

// What the heck is the event loop? https://www.youtube.com/watch?v=8aGhZQkoFbQ
