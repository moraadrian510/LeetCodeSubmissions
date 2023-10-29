/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    } else {
        return this[this.length - 1];
    }
}

let myArray1 = [1, 2, 3, 4];
let myArray2 = [];

let lastElement1 = myArray1.last();
let lastElement2 = myArray2.last();

console.log(lastElement1);
console.log(lastElement2);


/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */