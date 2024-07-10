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





