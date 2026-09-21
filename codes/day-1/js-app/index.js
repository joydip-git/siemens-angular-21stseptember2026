var x = 10;
console.log(x, typeof x);

let y = "joydip";
const z = true;

x = "siemens";
console.log(x, typeof x);

console.log(y, typeof y);
console.log(z, typeof z);

let a = 10;
console.log(a); //10
for (var i = 0; i < 1; i++) {
  let a = 20;
  console.log(a); //20
}

console.log(a); //20

var m;
console.log(m, typeof m);

var res = a + m;
console.log(res, typeof res);

var s = null;
console.log(s, typeof s);

var div = a / 0;
console.log(div, typeof div);

//declaration style
function add(a, b) {
  return a + b;
}

const addRes = add(12, 13);
console.log(addRes);

//expression style
const subtract = function (a, b) {
  return a - b;
};

//arrow function
    const multiply = (a, b) => a * b;

const obj = {
  id: 1,
  name: "anil",
  salary: 1000,
  print: function () {
    return `${this.id}, ${this.name}, ${this.salary}`;
  },
};

console.log(obj.id);
console.log(obj["name"]);
console.log(obj.print());

obj.location = "Bengaluru";
obj.sayHi = function () {
  return `Hi ${this.name}`;
};

console.log(obj);

//constructor function
function person(idVal, nameVal, salaryVal) {
  this.id = idVal;
  this.name = nameVal;
  this.salary = salaryVal;
  this.print = function () {
    return `${this.id}, ${this.name}, ${this.salary}`;
  };
}

const dominicObj = new person(2, "dominic", 2000);
console.log(dominicObj.name);

class Person {
  #_id;
  #_name;
  #_salary;
  constructor(idVal, nameVal, salaryVal) {
    this.#_id = idVal;
    this.#_name = nameVal;
    this.#_salary = salaryVal;
  }
  get id() {
    return this.#_id;
  }

  get name() {
    return this.#_name;
  }
  set name(value) {
    this.#_name = value;
  }
  set salary(value) {
    this.#_salary = value;
  }
  get salary() {
    return this.#_salary;
  }
  print() {
    return `${this.#_id}, ${this.#_name}, ${this.#_salary}`;
  }
}
class Trainer extends Person {
  constructor(idVal, nameVal, salaryVal, subjectVal) {
    super(idVal, nameVal, salaryVal);
    this.subject = subjectVal;
  }
  print() {
    return `${super.print()}, ${this.subject}`;
  }
}
