

function duplicate(arr) {
    let obj = {}
    for(let i=0; i < arr.length; i++ ) {
       obj[arr[i]] ? obj[arr[i]] = obj[arr[i]] + 1 : obj[arr[i]] = 1
    }
    console.log(obj)
    return Object.keys(obj).map(Number)
}


duplicate([1,1,3,4,5,6,6,1]) //non-sorted array