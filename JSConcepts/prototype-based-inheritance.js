function doSomething() {}

doSomething.prototype.foo = "bar";

const doSomethingIntance = new doSomething();

doSomethingIntance.prop = "a value";

/*
  All instances of doSomething() will have the foo attributes by default
  because they inherit the object's prototype chain.
*/
console.log(Object.getPrototypeOf(doSomethingIntance));

// ES2015 way

const person = {
  drives() {
    return "...baaaamm";
  },
};
const car = {
  starts() {
    return "...turns on";
  },
};

Object.setPrototypeOf(car, person);

console.dir(car);
console.log(car.starts());
console.log(person.drives());

//Creating a graph using prototypes
function Graph() {
  this.vertex = 0;
  this.edges = {};
}

Graph.prototype.addVertex = function (v) {
  this.edges[v] = [];
  this.vertex++;
};

Graph.prototype.addEdge = function (node1, node2) {
  this.edges[node1].push(node2);
  this.edges[node2].push(node1);
};

Graph.prototype.showConnections = function () {
  const allNodes = Object.keys(this.edges);
  for (let node of allNodes) {
    let nodeConnections = this.edges[node];
    let connections = "";
    let vertex;
    for (vertex of nodeConnections) {
      connections += vertex + " ";
    }
    console.log(`${node} --> ${connections}`);
  }
};

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();

//Con Object.create
/*
  El prototype de esta funcion es el primer argumento de la funcion
*/
const a = { a: 1 };
// a ---> Object.prototype ---> null

const b = Object.create(a);
// b ---> a ---> Object.prototype ---> null

console.log(b.a); // 1 (heredado)

const c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

/* 
  using __proto__ (obsolete)
*/

function Circle() {}

const shape = {};
const circle = new Circle();

shape.__proto__ = circle;

console.log(shape.__proto__); //Prints Circle {}

/* 
  Using Class (syntax sugar)
*/

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  //Extends inherits Polygon's prototype
  constructor(sideLength) {
    super(sideLength, sideLength); //Call the parents constructor
  }

  get area() {
    return this.height * this.width;
  }

  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

const square = new Square(2);

console.log(square);
console.log(square.area);

square.sideLength = 4;

console.log(square);
console.log(square.area);

// Use in browser
let x = {};
console.log(Object.getPrototypeOf(x));
console.log(x.__proto__);