//Singleton
//Object.create()

//object literals

const ob1 = {}
//console.log(ob1);

const mysum = Symbol("key1")
//console.log(mysum);

const Jsuser = {
       name : "sanjay Dangi",
       [mysum]: "keysum1",
       age : 20,
       email : "sanjay@google.com",
       isLogin: false,
       loginDays:["Monday","Friday"],
}
//console.log(Jsuser)
//console.log(Jsuser.loginDays);
// console.log(Jsuser.email)
// console.log(Jsuser["email"]);
// console.log(Jsuser["name"]);
// console.log(Jsuser[mysum]);
 
Jsuser.email = "sanjay.dangi@gmail.com"
//console.log(Jsuser);
//Object.freeze(Jsuser);
Jsuser.email = "sanjay@microsoft.com"
//console.log(Jsuser.email)

Jsuser.greeting = function(){
    console.log("hello user");
}
Jsuser.greetingTwo = function(){
    console.log(`hello Js user,${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());






