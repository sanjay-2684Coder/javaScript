// Immediately Invoked Function Expressions (IIFE)
//syntax   ()()
(function chai(){
    console.log(`DB Connected`); 
})();
((name)=>{
    console.log(`DB Connectes ${name}`);
    
})("sanjay")