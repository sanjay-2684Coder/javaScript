const User={
    email: 'sanjay@123',
    password : '12345',

    get _email(){
        return this.email.toUpperCase();
        
    },
   set _email(value){
     this.email = value;
   }
}
const tea = Object.create(User);
console.log(tea.email);
