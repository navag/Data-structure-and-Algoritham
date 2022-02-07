//assumtion each input would have only one solution


//brutforce solution O(n*n!)
const twoSum = (numbersArr, target) => {
    for (let i = 0; i < numbersArr.length; i++) {
        for (let j = i + 1; j < numbersArr.length; j++) {
            if (numbersArr[i] + numbersArr[j] === target) return [i, j];
        }
    }
}

// optimized solution

const twoSum1 = (numbersArr, target) => {
const cache = {}
for(const [index, num] of Object.entries(numbersArr)){
    if(cache[num]) {
        return [cache[num], index]
    } else {
        cache[target-num] = index
    }
}
}
twoSum1([1,2,6,10], 11);