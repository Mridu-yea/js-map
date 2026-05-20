// IMMEDIATELY INVOKED FUNCTIONE EXPRESSIONS 

(function greet(){ // named iife
    console.log('hello');
})();

((name) => {
    console.log(`hello ${name}`);
})("peak");
