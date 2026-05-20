// cart functions =>
    const user = {
        name : "peak",
    }

    const item1 = {
        name : "cupcake",
        id : 1
    }
    const item2 = {
        name : "cake",
        id : 2
    }
    const item3 = {
        name : "loaf",
        id : 3
    }
    const item4 = {
        name : "bread",
        id : 4
    }
    
    const cart = [item1,item2,item3]
    console.log(item1);
    
    function removeItem(){
        const removedItem = cart.pop()
        return {
            message : `${removedItem.name} has been removed`,
            cart : cart 
        };
        
    }
    function addItem(product){        
        cart.push(product);
        return {
            message : `${product.name} has been added `,
            cart : cart
        };
        
    } 
    console.log( removeItem());
    console.log(addItem(item4));

    function userinfo (anyobject , arr){
        console.log( `Total cart items of ${anyobject.name} : `);
    }
    
    function arr(getArray){
        console.log(getArray);
        
    }
    userinfo(user);
    arr(cart);
    

