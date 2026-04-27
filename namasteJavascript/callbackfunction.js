// What is a callback function in javascript
setTimeout(function() {
    console.log("Timer");
}, 5000);
function x(y) {
    console.log("x");
    y();
} 

x(function y() { // call a function, pass a function inside another function then it is called callback function
    console.log("y");
    
});
// Javascript is a synchronous single threaded language