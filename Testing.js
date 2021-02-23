// let name = {
//   firstname: "Navnath",
//   lastname: "Galande"
// }

// let printName = function (hometown, state, country) {
//   console.log(this.firstname + " " + this.lastname + " , " + hometown + ", " + state + ", " + country);
// }

// let printMyName = printName.bind(name, "Mhaswad", "Maharashtra");
// printMyName( "India");

// Function.prototype.mybind = function(...args){
//   let obj = this,
//     params = args.slice(1);
//   return function (...args2) {
//     obj.apply(args[0], [...params, ...args2]);
//   }
// }

// let printMyName2 = printName.mybind(name, "Mhaswad", "Maharashtra");
// printMyName2( "India");

// var arr1=['a','b','c']
// var arr3=['a','b','c']
// var arr2=['b','a','c']

// console.log(arr1.sort() === arr1, arr2 == arr2, arr1.sort() === arr2.sort())
// console.log(arr1 === arr3)
// {
// //     a = 3
//     let a;
//     console.log(a)
// }

function x (cha,numb) {
  var str1 = ''
  for(var i=0; i< numb; i++) {
    str1 = str1 + cha
  }
  return str1;
}


var decrpt = (inp1,inp2,inp3) => {
  var ds = '';
  for(var i=1; i< inp2; i++) {
    if (i%2 != 0) {
      ds = ds + x(inp1[i-1],inp1[i])
    }
  }
  return ds[inp3-1]
}
//  console.log(x('a',5))
// console.log(decrpt('a1b1c3',6,5))
arr = [1,2,3]
console.log(arr.pop(),arr)

function fn () {
  let x = 0
  if (true) {
    let x = 1 // only inside this `if`
    console.log(x)
  }
  console.log(x)
}

fn()