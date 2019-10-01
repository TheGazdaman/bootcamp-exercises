class Person {
  constructor (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  email () {
    return this.firstName + '@southpark.com'; 
  }
}


const marshes = [
new Person('Randy', 'Marsh', 45),
new Person('Sharon', 'Marsh', 42),
new Person('Stan', 'Marsh', 10),
new Person('Shelly', 'Marsh', 13),
]