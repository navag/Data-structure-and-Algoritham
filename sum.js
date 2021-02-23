function addition (a) {
  return function (b) {
      b ? addition(a+b) : a
  }
}

console.log(addition(1)(2)())