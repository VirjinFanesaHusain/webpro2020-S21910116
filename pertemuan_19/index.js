//class & Constructor

// const Person = {
//     firstName: "Virjin",
//     lastName: "Husain",
//     displayFullName: function(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     },
// };

// class Person{
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     displayFullName(){
//         console.log(`$this.fistName) $(this.lastName)`);
//     }
// }

// const Person1 = new Person("Virjin","Husain");
// console.log(person1);
// person1.displayFullName();
// const Person2 = new Person("Fanesa","Virjin");
// Person2.displayFullName();

//Inheritance
class Student extends Person {
    constructor(firstName, lastName, NIM, age) {
        super(firstName, lastName);
        this.NIM = NIM;
        this.age = age;
    }
}

//static member
static sayHello() {
    console.log(`Hello World`);
}

displayNIM(){
    console.log(`Hello world`);
}

dispayNIM(){
    console.log(`Your NIM is ${this.NIM}`);
}