const userEmail =[];//   [0->falsy value]

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if(userEmail.length===0){
    console.log("array is empty") 
}

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 5 
//val1 = undefined ?? null 
//val1 = null ??  undefined
val1 = null ?? 20 ?? 10
console.log(val1);


//++++++++++++ Ternary operator +++++++

const num = 100;
num > 120 ? console.log("smaller") : console.log("Greater");

