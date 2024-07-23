
//let name = 'Milly'; // String literal
//let age = 28; // number literal
//let isApproved = true; // boolean literal
let person = {
    name: 'milly',
    age: 30
}
console.log(person.name)

// dot notation
person.name = 'mil';

// bracket notation

let selectedColors = [ 'red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);


// performing a task
function greet(name, lastName) {
    console.log('hello ' + name + '' + lastName);
}

// calculating a value
function square(number) {
    return number * number;
}
 console.log(square(2))


greet('John', 'Smith');
greet('Mary', 'Hayford');

// cannot be a reserved keyword
// should be meaningful
// cannot start with a number (1name)
// cannot contain a space or hyphen (-)

let firstName = 'Milly';
let lastName = 'Tumaku';
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate)