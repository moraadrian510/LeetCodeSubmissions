/**
 * @return {null|boolean|number|string|Array|Object}
 */

    Array.prototype.last = function() {
        if ( this.length === 0 ) {
            return -1
        } else {
            return this[this.length  -1]
        }
    };

    let myArray = [1, 2, 3, 4];
    let myArray2 = [];

    let lastObject = myArray.last();
    let lastObject2 = myArray2.last();

    console.log(lastObject);
    console.log(lastObject2);


/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */