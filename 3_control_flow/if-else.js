//if - else 

    if (true){
        console.log("executed");
        
    }else{
        console.log("error");
        
    }

    userLoggedIn = true;
    loggedInFromGoogle = true;
    debbitCard = false;

    if(userLoggedIn && loggedInFromGoogle || debbitCard){
        console.log(" Premium logged in succesfully.");
        
    }else if(userLoggedIn && loggedInFromGoogle){
        console.log("Logged in as succesfully.");
        
    }else{
        console.log("logged in as guest");
        
    }

// Nullish coalescing operation : always takes case other than null or undef

let val;
val = 5 ?? 10;        //10
val = null ?? 5;      //5
val = undefined ?? 5; //5

//Terniary operator : condition ? true : false 

const points = 100;
points >= 100 ? console.log("You can buy items now") : console.log("Not enough points");

