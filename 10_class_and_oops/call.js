function setUsername(username){
    // complex DB calls
     this.username = username
     console.log("called");    
}
function createUser(username,email,password){
    setUsername.call(this,username)     //  bind `this` correctly
    this.password = password
    this.email = email
}

//const chai = new createUser("sanjay","sanjau@google.com","123")
//console.log(chai);

// modern class syntax

class User{
    constructor(username,email,password){
        this.setUsername(username);
        this.email = email;
        this.password = password;
    }
    setUsername(username){
        //complex DB calls
        this.username = username;
        console.log("called")
    }
}
const chai = new User("sanjay" , "sanjay@123" , "12345")
console.log(chai);
