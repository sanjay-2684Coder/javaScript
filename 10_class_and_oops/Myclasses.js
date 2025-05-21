//ES6
class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword (){
             return `${this.password}abc`
    }
    changeemail(){
        return `${this.username.toUpperCase()}`
    }
}
const Tea = new User("sanjay", "sanjay@abc","123")
console.log(Tea.encryptPassword());
console.log(Tea.changeemail());

//behind the scene

function user( username,email,password){
   this.username = username;
   this.email = email;
   this.password = password;  
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeemail = function(){
    return `${this.username.toUpperCase()}`
}

const chai = new user("sanjay", "sanjay@abc","123")
console.log(chai.encryptPassword());
console.log(chai.changeemail());

