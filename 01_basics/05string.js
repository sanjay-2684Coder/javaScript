const name = "sanjay "

const num = 50;
//console.log(name+ num + " dangi");

console.log(`hello my name is ${name} and my number is ${num}`)
//better way to define string
const gameName = new String('sanjay-dangi')
console.log(gameName[0]);
console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.bold());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-10,-4);
console.log(anotherString);

const trimString = "    Sanjay   ";
console.log(trimString);
console.log(trimString.trim());

const url = "https://sanjay%20dangi@gamil.com";
console.log(url.replace('%20','-'));
console.log(url.includes('sanjay'));

console.log(gameName.split('-'));



