/* 
  This se refiere a un objeto, todo en JS es un objeto. 
  El objeto al que hace referencia
  es el objeto que este ejecutando ese pedazo de codigo en el momento.
*/

console.log(this); // En el contexto global this = Window

function whoIsThis() {
  return this;
}

console.log(whoIsThis()); // This es window again porque por defecto siempre lo asigna

function whoIsThisStrict() {
  "use strict";
  return this;
}

console.log(whoIsThisStrict()); //Undefined

/* 
  llamamos al this dentro de la funcion, que esta encerrada en un objeto,
  por lo que en este caso this se refiere al contexto del objeto y toma el
  valor de person.name = "Camilo"
*/
const person = {
  name: "Camilo",
  sayHi: function () {
    console.log(`Hey, I'm ${this.name}`);
  },
};

person.sayHi(); //Hey, I'm Camilo

const sayHi = person.sayHi;

/* 
  Aca no se esta ejecutando en el contexto del objeto por lo que this hace referencia al
  objeto global y en este caso no existe name.
*/
// Llamados con () son sugar syntax, que llama a object.call
console.log(sayHi()); //Hey, I'm undefined

/*
  This en el contexto de una clase
*/

function Person(name) {
  // En la funcion se crea un nuevo contexto de ejecucion, por lo que se crea un nuevo 'this'
  this.name = name;
}

Person.prototype.sayHi = function () {
  //Asignamos un metodo usando herencia prototipal
  console.log(`Hello, my name is ${this.name}`);
};

const camilo = new Person("Camilo");
console.log(camilo.sayHi()); // Hello my name is Camilo

/*
  Se puede asignar el contexto de ejecucion usando call, bind, apply
*/
function sayHi() {
  console.log(`Hi, I am ${this.given_name}, ${this.last_name}`);
}

const camiloPerson = {
  given_name: "Camilo",
  last_name: "Arango",
};

/*
  Sets the this value to the camiloPerson object's context
*/
sayHi.call(camiloPerson); // Hi, I am Camilo, Arango

function walk(mts, direction) {
  console.log(`${this.given_name} walks ${mts} meters towards ${direction}.`);
}

// Passing aditional arguments
walk.call(camiloPerson, 400, "north"); // Camilo walks 400 meters towards north.

//Using apply, arguments must be passed using an array
walk.apply(camiloPerson, [400, "north"]); // Camilo walks 400 meters towards north.

/*
  Examples of how context may be lost
*/

//this loses context inside nexted functions
// class Service {
//   constructor(){
//     this.numbers = [1,2,3];
//     this.token = "token";
//   }

//   doSomething(){
//     setTimeout(function doAnotherThing(){
//       this.numbers.forEach(function log(number){
//       //Cannot read property 'forEach' of undefined
//           console.log(number);
//           console.log(this.token);
//       });
//     }, 100);
//   }
// }

// let service = new Service();
// service.doSomething();

//To fix this we can use bind to bind the outer context
// class Service {
//   constructor() {
//     this.numbers = [1, 2, 3];
//     this.token = "token";
//   }

//   doSomething() {
//     setTimeout(
//       function doAnotherThing() {
//         this.numbers.forEach(
//           function log(number) {
//             console.log(number);
//             console.log(this.token);
//           }.bind(this)
//         );
//       }.bind(this),
//       100
//     );
//   }
// }

// let service = new Service();
// service.doSomething(); // 1 token 2 token 3 token

//Or we can use an arrow function that does not create a new context
// class Service {
//   constructor() {
//     this.numbers = [1, 2, 3];
//     this.token = "token";
//   }

//   doSomething() {
//     setTimeout(() => {
//       this.numbers.forEach((number) => {
//         console.log(number);
//         console.log(this.token);
//       });
//     }, 100);
//   }
// }

// let service = new Service();
// service.doSomething(); // 1 token 2 token 3 token

//This also loses context when the method is used as a callback
class ServiceTwo {
  constructor() {
    this.token = "token";
  }

  doSomething() {
    console.log(this.token); //undefined
  }
}
let serviceTwo = new ServiceTwo();
setTimeout(serviceTwo.doSomething, 0); //undefined

//Again, we can use bind or arrow functions to fix this
setTimeout(serviceTwo.doSomething.bind(serviceTwo), 0); //token
setTimeout(() => serviceTwo.doSomething(), 0); //token

//Other scenario where this loses context is when using React Components
// In react components this loses contet when methods are used as callbacks for UI events.
class TodoAddForm extends React.Component {
  constructor() {
    super();
    this.todos = [];
    this.add = this.add.bind(this);
  }

  componentWillMount() {
    this.setState({ desc: "" });
  }

  add() {
    let todo = { desc: this.state.desc };
    //Cannot read property 'state' of undefined
    this.todos.push(todo);
  }

  handleChange(event) {
    //Cannot read property 'setState' of undefined
    this.setState({ desc: event.target.value });
  }

  render() {
    return (
      <form>
        <input
          onChange={this.handleChange}
          value={this.state.desc}
          type="text"
        />
        <button onClick={this.add} type="button">
          Save
        </button>
      </form>
    );
  }
}

ReactDOM.render(<TodoAddForm />, document.getElementById("root"));

//To fix this we can declare the functions using arrow functions
// Or you can create new functions in the constructor using bind(this)

// constructor() {
//   super();
//   this.todos = [];
//   this.handleChange = this.handleChange.bind(this);
//   this.add = this.add.bind(this);
// }
