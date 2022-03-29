//polyfills

// 1.forEach
Array.prototype.eachAlbum = function(callback) {
  // callback here is the callback function
  // which actual .forEach() function accepts
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this) // currentValue, index, array
  }
}

// 2. Map
Array.prototype.ourMap = function(callback) {
  var arr = [] // since, we need to return an array
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this)) // pushing currentValue, index, array
  }
  return arr // finally returning the array
}

// 3.Filter
Array.prototype.myFilter = function(callbackFn) {
  var arr = [];     
  for (var i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
}

// 4. reduce
Array.prototype.myReduce= function(callbackFn, initialValue) {
  var accumulator = initialValue;
for (var i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callbackFn(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
}


console.log([1,2,3,4].myReduce((ac, item) => ac > item ? ac : ac = item));