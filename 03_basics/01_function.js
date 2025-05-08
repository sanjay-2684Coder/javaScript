function myName(){
 console.log("s");
 console.log("a");
 console.log("n");
 console.log("j");
 console.log("a");
 console.log("y");
}
//myName()

function addTwoNum(num1,num2){
    //console.log(num1+num2)
}

function adding(num1,num2){
    //let result = num1 + num2;
    //return result;
    return num1+num2;
}


let result = adding(1,3)
//console.log(result);
addTwoNum(2,5)

function loginuser(username = "sanjay"){
if(!username){
    console.log("please enroll user first..."); 
    return   
}
return `${username} is just login`

}
//console.log(loginuser("dangi"));
//console.log(loginuser());

function claculateSum(val1,val2,...num1){
   return {val1,val2,num1};
//    return {};
}
//console.log(claculateSum(100,200,300,400));

 const user={
    name:"sanjay",
    price:999
}
function handleObject(anyuser){
  console.log(`username is:${anyuser.name} ans price is:${anyuser.price}`);
  
}
//handleObject(user);
handleObject({
    name:"sam",
    price:1111
})

const myArray = [1,2,3,4,5]

function array(givenarray){
return givenarray[1]
}
console.log(array(myArray))
console.log(array([200, 400, 500, 1000]));