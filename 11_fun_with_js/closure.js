<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Closure aur chai</title>
</head>
<body style="background-color: #313131;">
    <button id="orange">Orange</button>
    <button id="green">Green</button>
</body>
  <script>
    //Lexical Scoping
    // function init() {
    //     let name = "Mozilla"; 
    //     function displayName() {
    //         console.log(name); 
    //     }
    //     displayName();
    // }
    // init();

    // function outer(){
    //     let username = "sanjay"
    //    // console.log(secret);
        
    //     function inner(){
    //         let secret = "my123"
    //         console.log("inner",username);     
    //     }
        
    //      function innertwo(){
    //        // console.log(secret);
            
    //         console.log("innertwo",username);     
    //     }
    //     inner()
    //     innertwo()     
    // }
    // outer()
    // console.log("outer call is",username);

    //++++++++++++++closure++++++++++++++
    
    // function makeFunc() {
    //     const name = "Mozilla";
    //     function displayName() {
    //         console.log(name);
    //     }
    //     return displayName;
    // }

    // const myFunc = makeFunc();
    // myFunc();


  </script>
    <script>
        // document.getElementById('orange').onclick = function(){
        //     document.body.style.backgroundColor = "orange"
        // }
        //  document.getElementById('green').onclick = function(){
        //     document.body.style.backgroundColor = "green"
        // }

        //real time uses of closure 
        function clickhandler(color){
           // document.body.style.backgroundColor = `${color}`
           return function(){
                document.body.style.backgroundColor = `${color}`
            }
        }

        document.getElementById('orange').onclick = clickhandler('orange')
        document.getElementById('green').onclick = clickhandler('green')

    </script>
</html>
