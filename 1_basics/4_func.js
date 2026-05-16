// cart functions =>
 const cart = ["apple" , "banana"]

    function removeItem(){
        cart.pop()
        return(cart);
        
    }
    function addItem(item){        
        cart.push(item);
        return(  cart);
        
    }
    console.log(" Item removed : ", removeItem());
    console.log("Item added : " ,addItem("watermelon"));