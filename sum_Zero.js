
var sumZero = (arr) => {
    let left = 0;
    let right = arr.length-1
    let sum = 0

    while(left < right) {
        sum = arr[left] + arr[right]
        if(sum === 0) {
            return [arr[left],arr[right]]
        } else if(sum > 0) {
            right --
        } else {
            left++
        }
    }
}

sumZero([1,1,-1,4,4,-4,3,-3])
