//get unique elements in an array

const getUniqueElement = (array) => {
    const unique = new Set(array);
    return Array.from(unique);
}

const getUnion = (arr1, arr2) => {
    const mergedArr = [...arr1, ...arr2];
    return Array.from(new Set(mergedArr));
}

const getInterSect = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const retArr = [];
    set1.forEach(value => {
        if(set2.has(value)) retArr.push(value);
    });
    return retArr;
}

//fint the sub array with given sum

//brute force is finding all sub array with 2 for loop and check sum for each array

//optimizesd solution is by using hashmap

// <--------------------currentSum---------------->
// <----currentSum-sum---------><-----sum--------->
const getsomeSubArr = (arr, sum) => {
    let currentSum = 0;
    let map = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        const sub = currentSum-sum;
        currentSum += arr[i];
        if(currentSum-sum === 0) return [0, i];
        if(map.has(currentSum-sum)) return [map.get(currentSum-sum) + 1, i];
        map.set(currentSum, i);
    }
    return -1;
}

// count distinct element in range of K
    const countDistinct = (A, n, k) => {
        
        let myMap = new Map();
        const opArr = [];
        for(let i=0; i < k; i++) {
            if(myMap.has(A[i])) myMap.set(A[i], myMap.get(A[i]) + 1);
            else {
                myMap.set(A[i],1);
            }
        }
        opArr.push(myMap.size);
        for(let j=k; j < n; j++) {
            if(myMap.get(A[j-k]) === 1) {
                myMap.delete(A[j - k]);
            }
            else {
                myMap.set(A[j-k], myMap.get(A[j-k]) - 1);
            }
            if(myMap.has(A[j])) {
                myMap.set(A[j], myMap.get(A[j]) + 1);
            }
            else {
                myMap.set(A[j],1);
            }
            opArr.push(myMap.size);
        }
        return opArr;
//by using simple object
    //      let map = {};
    //   const retArr = [];
    //   for(let i=0; i < k; i++) {
    //         if(map[A[i]]) map[A[i]] += 1;
    //         else {
    //             map[A[i]] = 1;;
    //         }
    //   }
    // retArr.push(Object.keys(map).length);

    //   for(let i=k; i < n; i++) {
    //       if(map[A[i-k]] === 1) delete map[A[i-k]];
    //       else map[A[i-k]] -= 1;

    //         if(map[A[i]]) map[A[i]] += 1;
    //         else {
    //             map[A[i]] = 1;
    //         }
    //       retArr.push(Object.keys(map).length);
    //   }

    //   return retArr;

    }

console.log(countDistinct([1,2,1,3,4,2,3], 7,4));
// console.log(getUniqueElement([1,2,2,3,4,5,5,6]));
// console.log(getUnion([1,2,2,3,4,5,5,6], [1,2,2,3,4,5,5,6,7]));
// console.log(getInterSect([1,2,2,3,4,5,5,6], [1,2,2,3,4,5,5,6,7]));
// console.log(getsomeSubArr([10,15,-5,15,-10,5],25));
