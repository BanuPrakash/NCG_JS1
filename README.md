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
