const name= "Gautam"
const repoCount = 3

// console.log(name +repoCount+ "Value");
//+ contatination is outdated

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Grand Theft Auto')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('r'));
console.log(gameName.substring(0,5));
console.log(gameName.slice(-12,9));

const nameStringOne="      Gautam     ";
console.log(nameStringOne);
console.log(nameStringOne.trim());

const url = "https://www.google.co.in/"
console.log(url.replace('google','facebook'))

console.log(gameName.split(' '));