const num = [1,2,3,4,5];
//console.log(num);

const myArr = ["shaktiman" , "nagraj"];

const myArr1 = new Array(1,2,3,4);
//console.log(myArr1);

//method//
//console.log(myArr1.length);
//console.log(myArr.concat("sachin"));
//console.log(myArr.concat(myArr1,num));
myArr1.push(6);
myArr1.push(8)
myArr1.pop()
//console.log(myArr1);
console.log(num);

num.unshift(9)
num.shift();
//console.log(num);
// console.log(num.includes(9));
// console.log(num.indexOf(3));

const newArr = num.join();
//console.log(num);
//console.log(newArr);


//slice splice

const another = num.slice(0,-2)
console.log(another);
console.log(num);
const another1 = num.splice(0,2)
console.log(another1);
console.log(num);

