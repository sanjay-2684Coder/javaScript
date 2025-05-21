class User {
    constructor(username){
     this.username = username
    }

    logMe(){
        console.log( `username: ${this.username}`);
    }
  static createID(){
     return `123`;
  }
}
  const Tea = new User("sanjay");
  //console.log(Tea.logMe());
  //console.log(Tea.createID());
  console.log(User.createID());
  
  
  class Teacher extends User{
    constructor(username,password){
        super(username)
        this.password = password
    }
  }
  const chai = new Teacher("iphone", "i@phone.com")
  //console.log(chai.logMe());
  //console.log(chai.createID());//is a static method, it does not belong to instances like chai
  console.log(Teacher.createID());
  