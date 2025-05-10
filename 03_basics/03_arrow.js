const user = {
    username: "dangi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
//user.welcomeMessage()
user.username="sam"
//user.welcomeMessage()
//console.log(this);

// function chai(){
//    let username="sanjay"
//    console.log(this.username);
   
// }
// chai()

// const chai = function(){
//     let username="sanjay"
//    console.log(this.username);
// }
// chai()

const chai =()=>{
     let username="sanjay"
    console.log(this.username);
}
//chai()

// const sum = (num1,num2)=>{
//     return num1+num2;
// }

// const sum = (num1,num2)=>(num1+num2)
 const sum = (num1,num2)=>num1+num2
//console.log(sum(2,5));

const addtwo=(num1,num2)=>({username:"sanjay"})
//console.log(addtwo(2,5));

const myArray = [1,2,3,4,5]
// myArray.forEach(function(item){
// console.log(item)
// } );
myArray.forEach(item =>{console.log(item);
})