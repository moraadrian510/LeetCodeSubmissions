/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    
  
    if (this.length === 0) {
        return -1;
    } else {
        return this[this.length -1]
    }
};

      let myArray = [1, 2, 3, 4]
      let myArray2 = [];
    
      let lastDigit = myArray.last();
      let lastDigit2 = myArray.last();
/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */