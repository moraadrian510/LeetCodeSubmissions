/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};

const hlw = createHelloWorld();
const message = hlw();

console.log(message);
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */