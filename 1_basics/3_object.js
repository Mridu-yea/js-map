// Objects =>
    
const mysym = Symbol("key1")
    const User = {
        name : "peak",
        "email" : "peak@gmail.com",
        age : 19,
        [mysym] :"cat",
        isLoggedin : true

    }
    User.greet = function(){
        console.log(`Hello ${this.name}`)
    }
    Object.freeze(User)
    User.age = 20;
    console.log(User["email"]);
    console.log(User.isLoggedin);
    console.table([User]);
    console.log(User.greet());
    
    
    