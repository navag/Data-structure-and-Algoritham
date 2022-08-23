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

// promise

function MyPromise(executor) {
    let resolvedData, rejectedData;

    let isResolved = false,
        isRejected = false;

    let onResolveHandlers = [];
    let onRejectHandlers = [];

    function resolve(value) {
        resolvedData = value;
        isResolved = true;
        if (onResolveHandlers.length) {
            onResolveHandlers.reduce((acc, thenHandler) => thenHandler(acc), resolvedData);
        }
    };

    function reject(value) {
        isRejected = true;
        rejectedData = value;
        if (onRejectHandlers.length) {
            onRejectHandlers.reduce((acc, catchHandler) => catchHandler(acc), rejectedData);
        }
    }

    this.then = function(thenHandler) {
        onResolveHandlers.push(thenHandler);
        if (isResolved) {
            onResolveHandlers.reduce((acc, thenHandler) => thenHandler(acc), resolvedData);
        }
        return this;
    }

    this.catch = function(catchHandler) {
        onRejectHandlers.push(catchHandler);
        if (isRejected) {
            onRejectHandlers.reduce((acc, catchHandler) => catchHandler(acc), rejectedData);
        }
        return this;
    }

    this.finally = function(finallyHandler) {
        onRejectHandlers.push(finallyHandler);
        onResolveHandlers.push(finallyHandler);
        if (isRejected) {
            onRejectHandlers.reduce((acc, catchHandler) => catchHandler(acc), rejectedData);
        };
        if (isResolved) {
            onResolveHandlers.reduce((acc, thenHandler) => thenHandler(acc), resolvedData);
        }
    };

    executor(resolve, reject);
}

MyPromise.prototype.resolve = (val) =>
  new MyPromise((resolve, _reject) => {
    resolve(val);
  });

MyPromise.prototype.reject = (reason) =>
  new MyPromise((resolve, _reject) => {
    reject(reason);
  });

MyPromise.prototype.all = (promises) => {
  let fulfilledPromises = [],
    result = [];

  function executor(resolve, reject) {
    promises.forEach((promise, index) =>
      promise
        .then((val) => {
          fulfilledPromises.push(true);
          result[index] = val;

          if (fulfilledPromises.length === promises.length) {
            return resolve(result);
          }
        })
        .catch((error) => {
          return reject(error);
        })
    );
  }
  
  return new MyPromise(executor);
};

new MyPromise((resolve, reject) => {
        setTimeout(() => reject('rejected'), 1000);
        /* resolve(10) */
    })
    .then((data) => data * 2)
    .then(data => console.log(data))
    .catch((err) => console.log(err))



console.log([1,2,3,4].myReduce((ac, item) => ac > item ? ac : ac = item));
