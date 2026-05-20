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