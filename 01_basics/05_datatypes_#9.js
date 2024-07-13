//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//memory in js is stack and heap
/*stack (primitive) gives copy
heap(non primitive) gives reference*/

let userOne={
    email:"gautam2821kakkar@gmail.com",
    upi: "8527895953@ibl"
}

let userTwo=userOne

userTwo.email="igautamkakkar@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);