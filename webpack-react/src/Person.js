export default class Person {
    name; //state
    age; // state
    constructor(name = "", age = 0) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}
