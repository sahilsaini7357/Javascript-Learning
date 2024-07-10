// const FIRST_NAME = '';

//  let myFirstName = getMyFirstName()


// function getMyFirstName() {
//     const FIRST_NAME = "sahil";
//     return FIRST_NAME;
// };
// console.log(myFirstName);
// console.log(FIRST_NAME);


// function getMyFullName(fristName = '' , lastName = '') {
//     return fristName + lastName

// }
//  let myMisstackFullName =  getMyFullName("Ajay");
//  console.log(myMisstackFullName);



// function addistion(intigerOne , intigerTwo){
//       return intigerOne + intigerTwo
// }
// addistion(5+5);

// function subtreakstion(intigerOne , intigerTwo){
//       return intigerOne - intigerTwo
// } 
// subtreakstion(4+4);



//what is muteble and unmuteble in javascript
//in this patten can't peramiter 
// i can't pass daimenic 

//Q1. javascript me hosting kya hota h
//Ans. js me hosting ek fucter hota h jiski vahah se function declare var ko scope ke top pr le jata h
// esme declare kiye huye ho kahi bhi use kar sakte h.

//exmple :
//console.log(myVar); // Output: undefined
//var myVar = 10;
//console.log(myVar); Output: 10


// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }

// console.log(sum(1, 2, 3)); // Output: 6
// console.log(sum(10, 20, 30, 40)); // Output: 100
// console.log(sum(5)); // Output: 5
// console.log(sum()); // Output: 0

// function main (){
//     let total = 0;
//     for(a = 0; a < arguments.length; a++){
//         total += arguments[a];
//     }
//     return total;
// }
// console.log(main(2 , 5 , 2));


// function add(a , b = 20 , c = 10) {
//     return a + b + c;
// }

// console.log(add(12)); 
// console.log(add(10)); 
// console.log(add(13, 7 ,5)); 

// function greet(name ){

//     if(name === undefined){
//         name = "rahul" ;
//     }
//     console.log("Hello , " + name)  
// }
// greet();
// greet("sahil");

// let person = {
//     name: "sahil",
//     age: 22

// }
// //propati ko change karna
// person.age = 23;
// console.log(person);

// let numbers = [1, 2, 3, 4];

// //array ko change karna 
// numbers.push(5)
// console.log(numbers);



// function applyOperation(a, b, operation) {
//     return operation(a, b);
// }

// const add = (x, y) => x + y;
// const multiply = (x, y) => x * y;

// console.log(applyOperation(3, 4, add)); // 7
// console.log(applyOperation(3, 4, multiply)); // 12            


// function divide(a, b) {
//     if (b === 0) {
//         throw new Error('Division by zero is not allowed.');
//     }
//     return a / b;
// }

// try {
//     console.log(divide(4, 2)); // 2
//     console.log(divide(4, 0)); // Error
// } catch (error) {
//     console.error(error.message); // Division by zero is not allowed.
// }


// Arrow Function
// const plus = (a, b) => a + b;

// console.log(plus(3, 9)); // 12



//Q 1.Function Declaration:

// function store(a, b) {
//     return a + b;

// }
// console.log(store(5, 5));

// Function Expression

// const subtract = function (a , b){
//     return (a - b);
// }
// console.log(subtract(10 , 4));

//Q 2. Arrow Function

// let arrow = (a , b) => (a * b);
// console.log (arrow(6 , 5));

//Q 3.Default Parameters

// function sahil(name = "Guest"){
//     return `Hello, ${name}`;

// }
// console.log(sahil());
// console.log("Rahul")

//Q 4. Rest Parameters

// function home(...names) {
//     return names;
// }

// function person(...numbers) {
//     return numbers;
// }

// let namesArray = home("sahil", "sanju", "rahul", "ajay", "tushar");
// let numbersArray = person(1, 2, 3, 4, 5)[3];

// let details = {
//     names: namesArray,
//     numbers: numbersArray,

// };

// console.log(details);

// let arryNumbers = [1, 2, , 3, 4, 5, 6]
// function numbers([value1, value2]) {
//     return [value1, value2]
// }
// console.log(numbers(arryNumbers));

// function Destructuring({ name, surname }) {
//     return `${name}, ${surname}`;
// }

// let data = {
//     name: "Rahul",
//     surname: "saini",
//     age: 20,
//     city: 'Jaipur'

// }
// console.log(Destructuring(data));

// //Q 5. Pure Functions

// function squre(x) {
//     return x * x
// }
// console.log(squre(10));

// //Q 6.Higher-Order Functions

// function apply (a , b , c){
//     return apply ( a , b);
// }
// let add = ( a , y) => a + y
// let multiply = ( a , y) => a + y

// console.log(apply(50 , 50 , add))
// console.log(apply(50 , 50 , multiply))


























// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3)); // 6
// console.log(sum(4, 5, 6, 7)); // 22
