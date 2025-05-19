const promiseOne =new Promise(function(resolve,reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(()=>{
        console.log("async task is complete")
         resolve()
    },1000)
   
})
promiseOne.then(function(){
    console .log("promises consumed")
});

  new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("async task 2");
     resolve()
    },1000)
      
}).then(function(){
  console.log("async function2 resolved");
  
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"sanjay", email:'sanjay@123.com'})
    },1000)
}).then(function(user){
    console.log(user)
})

const promiseFourth = new Promise(function(resolve,reject){
    setTimeout(function(){
     let error = true;
    if(!error){
   resolve({username:"sanjay", password:'123'})
    }
    else{
        reject('ERROR:somthing wrong')
    }
    },1000)  
})
promiseFourth
.then(function(user){
    console.log(user);
    return user.username  
})
.then(function(username){
    console.log(username);  
})
.catch(function(error){
    console.log(error);
    
}).finally(()=> console.log("the promises is either rejected or resolved"));

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript", password: "123"})
        }else{
            reject('EROR,JS not Found')
        }
    },1000)
})
async function consumePromiseFive() {
    try{
      const response = await promiseFive
      console.log(response);
      
    }catch(error){
      console.log(error);
    }
}
consumePromiseFive()

// async function getAllUser() {
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
    
//     }catch(error){
//     console.log("E: ",error);
    
//     }
// }
//getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
   return response.json()
}).then((data)=>{
  console.log(data);
  
}).catch((error)=>{
console.log(error);
})

// promise.all
// yes this is also available, kuch reading aap b kro.