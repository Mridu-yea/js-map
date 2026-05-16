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

// Objects as singleton : 

const appuser = new Object();

appuser.name = "peak"
appuser.id = 2121,
appuser.fullname = {
    username : {
        firstname : "peak",
        lastname : ""
    }
}


console.log(appuser)
console.log(appuser.fullname.username.lastname);
console.log(Object.values(appuser));

const array = [
    user1 = {
        name : "peak"
    },
        user2 = {
        name : "mimi"
    },
        user3 = {
        name : "kallu"
    }
]
console.log(array[1].name);

// destructing 

const user = {
    id : 2121,
    name : "peak",
    code : 234
}
const {id,name,code} = user;
const {name : n} = user;
console.log(n);


console.table([id,name,code]);






    
    
    