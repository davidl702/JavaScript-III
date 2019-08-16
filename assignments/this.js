/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - the value of "this" will be in the window object.
* 2. Implicit Binding - when a function is called by a dot, the object left of the dot gets "this".
* 3. New Binding - when a constructor function is used, "this" refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding - when Javascript's call or apply method is used, "this" is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function myAge(age) {
    console.log(this);
    return age;
}
myAge("29");

// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: "hello",
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
}
myObj.sayHello("David");

// Principle 3

// code example for New Binding

function Person(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
     console.log(this);
    };
}

const Dave = new Person('Dave');
const David = new Person('David');

Dave.speak();
David.speak();

// Principle 4

// code example for Explicit Binding

function Person(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
     console.log(this);
    };
}

// const Dave = new Person('Dave');
// const David = new Person('David');

David.speak.call(Dave);
Dave.speak.apply(David);

Dave.speak();
David.speak();