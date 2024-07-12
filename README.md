# JS and REACT
Banuprakash C

Full Stack Architect,

Co-founder & CTO, Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Emails: banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/NCG_JS1

Softwares Required:

Visual Studio Code.

Chrome Web Browser

NodeJS Latest LTS

---------------------

JavaScript:
Scripting language, loosely typed and dynamically typed language

var name = "Smith"; // string

var age = "twenty" ; // string

age = 24; //number
age++;

JavaScript --> engine for execution
JavaScript engine --> ECMA
* V8 -> Google --> Chrome / NodeJS
* SpiderMonkey --> FireFox
* Chakra --> IE
* Nashorn --> Oracle
* Rhino 
* Chromium
* JavaScriptCore

file.js

```
"use strict"

var g = 100;

console.log("Hello World!!!");

function doTask() {
    var a = 10;
    if(g > a) {
          b = 20;
    }
    var c = 80;
    console.log(a,b,c,g);
}

doTask();
console.log(a,b,c,g);
```

JavaScript event driven programming

```
console.log("Hello World!!!");
function compute(){
    console.log("clicked");
}
document.getElementById("btn").addEventListener("click", compute);

setInterval(function timed() {
    console.log("timed!!!")
}, 500);

Promise.resolve(123).then(function complete(value) {
  console.log(value);
});

function add(x, y) {
    console.log(x + y);
}
add(4,5);
console.log("Bye!!!");
```

Java Threads:
```
class TimerThread extends Thread {
    public TimerThread(int interval, Method m) {
        ...
    }
    public void run() {
        while(true) {
            Thread.sleep(interval);
            m.invoke();
        }
    }
}

class EventLoopThread extends Thread {
    microTasks[];
    macroTasks[];
    public void run() {
        while(true) {
            if(isStackEmpty()) {
             microTasks.forEach...
             macroTasks.forEach...
            }
        } 
    }
}
```

Code for JSV9000:

```
console.log("Hello");

setTimeout(function one() {
    console.log("1");
}, 0);

setTimeout(function two() {
    console.log("2");
}, 0);

Promise.resolve().then(function p1() {
    console.log("p1");
});

Promise.resolve().then(function p2() {
    console.log("p2");
});


console.log("Bye");
``

OOP with JavaScript
```
1) var object = {} // JSON

2) var rect = new Object();
rect.x = 10;
rect.y= 15;
rect.area = function() {
    return this.x * this.y;
}

3) function constructor and class owned instance method

function Book(title, price) {
    this.title = title;
    this.price = price;
}

// instance methods

Book.prototype.setTitle(t) {
    this.title = t;
}

Book.prototype.setPrice(p) {
    this.price = p;
}
// static function
Book.equals = function(b1, b2) {
    if(b1.title === b2.title) {
        return true;
    }
    return false;
}

var jsBook = new Book("JS in Action", 560.21);

4) function constructor and object owned instance method [avoid this]
function Book(title, price) {
    this.title = title;
    this.price = price;

    this.setTitle = function(t) {
        this.title = t;
    }

    this.getPrice = function() {
        return this.price;
    }
}

Addyosmani

JSON with state and behaviour // avoid
var object  = {
    "age": 10,
    "name": "React Prog",
    getName: function() {
        return this.name;
    }
}

object.getName();

var ref = object.getName; // context is lost

ref(); // window.name

var ref2 = object.getName.bind(object);
ref2();

========

function update(name) {
    this.name = name;
}

var book = {
    "name": "JS Unleashed",
    "price" 1234
}

var employee = {
    "name": "Tim",
    "age" : 34
}

update.call(book, "AWS");

update.call(employee, "Roger");

update.apply(book, ["AWS"]);

```

HOF--> High Order Functions
1) functions which can accept function as arguments
2) functions which return a function
--> treat function as first class member
https://rxmarbles.com/

Popular HOF: --> Code re-usability
1) filter
2) map
3) reduce
4) forEach
5) limit
6) skip

```
=====

Closure --> functions which return a function


ES 2015 / ES 6 version or ECMAScript 6 features:

1) let and const for block scope

const PI = 3.1459;

if(x > y) {
    let c = 100; // block scope, not hoisted to function scope
}

IIFE --> Immeditely Invoke Function Expression

(function doTask() {

})();

```
if(x > y) {
    let _ref = (function () {
        var c = 100;
        return {
            c: c
        }
    })();
    
    console.log(_ref.c);
}
```

https://caniuse.com/


2) arrow functions ==> lambda expression
```
let add = (x,y) => {
    return x + y;
}

or

let add = (x,y) => x + y;
add(4,5);
```

3) Destructuring
3.1) object
let product = { "name": "iPhone 15", "price": 98000.00, "category": "mobile" };

console.log(product.name, product.price);

let {name, price} = product;

console.log(name, price);

3.2) arrays

let colors = ["red", "green", "blue", "orange", "purple"];

console.log(colors[0]); 

let [r, g, ...others] = colors;

console.log(r); //red
console.log(others); // ["blue", "orange", "purple"]

4) Spread, Rest operators ...
4.1) clone
```
let data = [5,1,3];

let ref = data; // reference --> pointer

ref[0] = 999;

data[0] will also be 999

let clone = [...data]; // clone
clone[1] = 9;
data[1] --> 1
```

4.2) add
```
var products = [
            { "name": "iPhone 15", "price": 98000.00, "category": "mobile" },
            { "name": "Samsung Tv", "price": 278000.00, "category": "tv" },
            { "name": "Wacom", "price": 45000.00, "category": "computer" },
            { "name": "Logitech Mouse", "price": 800.00, "category": "computer" },
            { "name": "OnePlus 15", "price": 120000.00, "category": "mobile" }
        ]

let elems = [...products, {"name": "A", "price" : 100}];


```
Synchronous code:
let result = doTask(); // blocked
5) Promise for asynchrouns task

Promise callback hell:


6) Async and Await

7) Generator

function* doTask() {
    task1;
    task2;
    yield 200;
    task3;
    yield "product list";
    task4;
    yield "order placed";
    task5;
    task6;
}

let process = doTask(); // reference to generator
process.next(); // task1, task2, 200
some logic
process.next(); // task3 , "product list"
logic
process.next(); // task4, "order placed",
process.next(); // remainig tasks

8) template string

var name = "Rajesh";

var message = `
        Welcome ${name},
        to React Training.
`;

9) class type

10) ESM --> Module system

11) Proxy and Reflect

var user = {
    ..
}

var proxyUser = new Proxy(user, {});

====

```
optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        }
```

Task:

use [filter, map and reduce] of array not our functions and ES6 arrow functions

double total = products.filter(... by mobile ...).map(product --> price).reduce( sum of prices);



Recap:
JS engine, event loop, WebAPi, Macrotask Queue and MicroTask Queue
OOP, Functional Programming using HOF, Closure
ES 6 features: let, const, destructuring, spread operators, template string, arrow functions, promise, async and await, generator
Class, Module

Day 2
-----

DOM Document Object Model is a programming interface [JS / Java / Visual Basic /... ] for documents [html / XML] to create tree of objects.

Using DOM:
1) access elements
a) getElementById ==> single 
b) getElementsByTagName ==> array
c) querySelector [ using tag, classname, id, sub-selector] ==> uses CSS selector
document.querySelector("input[name='age']")
d) querySelectorAll() -==> array

2) create elements
factory method:
document.createElement()
document.createTextNode
3) remove elements
4) traverse thro elements
5) event handling

DOM event handling

events: click, keypress, move cursor, on load, unload ,....

const startEvent = new Event("start");
const startEvent = new CustomEvent("start", {details: {...}});
document.dispatchEvent(startEvent);

======

NodeJS
open-source JavaScript runtime environment  / platform

Why nodeJS?
1) for building traditional web applications like Servlet/JSP, PHP, ASP.NET --> SSR
2) for building RESTful / GraphQL APis
3) for Streaming data 
4) for client side web application development [ our usage]

4.1)
* unit testing
* Integration testing
* E2E testing

4.2) compile or transcompile your code
Target machine uses ES5 version of JS
a) I write code in ES 2015+
transpile / transcompiler 
Babel / Tracuer
Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines.

b) write code in DART / TypeScript / LiveScript / CoffeeScript

c) Static code analysis --> Linting

d) Uglify, minify and bundle

function __f(e, a){for(i = 0;i<e.length;i++){a(e[i]);}}


index.html
<link rel="stylesheet" href="products.css">
<link rel="stylesheet" href="styles.css">
<script src="customer.js"></scripts>
<script src="products.js"></scripts>
<script src="orders.js"></scripts>
<script src="payments.js"></scripts>


JS automation tools:
Grunt
Gulp
Webpack
vite

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting.

nodeJs uses Package manager for installing dependencies, devDependency, peerDependencies, running scripts
* NPM <<default>> 
* yarn
* PNPM
* Rush

npm init --y

package.json -- > scripts, dependencies, devDependency, peerDependencies are configured

pom.xml / build.gradle

npm i lodash

npm i jest -D


Module System:
1) IIFE

```
var shopModule = (function() {
    var data = [];
    function add() {

    }
    function validate() {

    }

    return {
        data,
        add
    }
})();


var orderModule = (function() {
    var data = [];
    function add() {

    }
    function validate() {

    }

    return {
        data,
        add
    }
})();

shopModule.data;

```
2) CommonJS module system --> default used by NodeJS
module.exports and require

3) ESM --> ES6 Module system

export , import

4) System
5) AMD

====
AAA --> Assemble Action Assert

Unit Testing Frameworks:
1) Jasmine
2) Mocha
3) JEST
Chai --> Assertion library
https://www.chaijs.com/

function test() {
    console.log(arguments);
}

===========

Webpack
--> build tool

Steps:
1) npm init --y
2) npm i webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin css-loader style-loader webpack-dev-server -D

loaders:
1) css-loader allows css files to be imported in "JS"
import "styles.css"

style-loader
<style>

</style>

2) file-loader can be used to load png
import 'logo.png'

3) babel-loader
allows import JS file using ES6 Module system

====

@babel/core ==> transcompiler --> transpiler
--> @babel/preset-env
    syntax transform and polyfills
     A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively 



```
npm run dev

> webpack-react@1.0.0 dev
> webpack --mode development

asset bundle.07988c80.js 557 KiB [emitted] [immutable] (name: main)
runtime modules 1.25 KiB 6 modules
cacheable modules 533 KiB
  ./src/index.js 715 bytes [built] [code generated]
  ./src/lib.js 621 bytes [built] [code generated]
  ./src/Person.js 258 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
webpack 5.92.1 compiled successfully in 131 ms
banuprakash@Banuprakashs-MacBook-Pro webpack-react % 

npm run prod

> webpack-react@1.0.0 prod
> webpack --mode production

asset bundle.cf24f7ad.js 69.8 KiB [emitted] [immutable] [minimized] (name: main) 1 related asset
orphan modules 879 bytes [orphan] 2 modules
runtime modules 344 bytes 2 modules
cacheable modules 533 KiB
  ./src/index.js + 2 modules 1.56 KiB [built] [code generated]
  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
webpack 5.92.1 compiled successfully in 1130 ms
```

npm i clean-webpack-plugin -D

Day 3


JSX --> @babel/preset-react --> Vanilla JS object --> Presentation [Mobile, Web, Tv]

https://github.com/chentsulin/awesome-react-renderer