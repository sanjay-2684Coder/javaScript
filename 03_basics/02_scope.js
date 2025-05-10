 //var c = 300
 
if(true){
    let a = 10;
    const b = 20;
    var c = 30 //not block scoped
   // console.log("inner",a);
    
}
//console.log(a);
//console.log(b);
//console.log(c);

function one(){
   const username = "sanjay"

  function two(){
    const web = "youtube"
    console.log(username);
  }
  //console.log(web);
  two()
}
//one()

if(true){
    const username = "sanjay"
    if(username === "sanjay"){
        const web = " google"
  //  console.log(username + web);
    
    }  
   // console.log(web);
    
}
//console.log(username);
//+++++++++++++++interesting+++++++++
//console.log(addOne(5));

function addOne(num){
    return num+1  
}
//console.log(addOne(6))

addtwo(4);
const num = function addtwo(sum){
     return sum+1;
     
     
}

//console.log(num(6));

