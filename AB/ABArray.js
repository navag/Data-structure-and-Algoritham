//Q. Write a function which takes an array and prints the majority 
// element (if it exists), otherwise prints “No Majority Element”. 
// A majority element in an array A[] of size n is an element that appears more 
// than n/2 times (and hence there is at most one such element). 

//BruteForce solution
//[5,1,4,1,1] O(N) and space O(N)

const majorityEl1 = (arr) => {
    let elementObj = {};
    let maxEl = {
        count: 0,
        value: null
    };
    for(let i=0; i< arr.length; i++) {
        if(elementObj[arr[i]]) {
            elementObj[arr[i]] +=1;
        } else {
            elementObj[arr[i]] = 1;
        }
    }
    const elemArr = Object.keys(elementObj);
   for(let i=0; i< elemArr.length; i++) {
        if(maxEl.count < elementObj[elemArr[i]]) {
            maxEl.value = elemArr[i];
            maxEl.count = elementObj[elemArr[i]];
        }
    }
    return maxEl.value;
}

//optimized solution =>> Moores Voting Algoritham
//time:O(n), space: O(1); 

const majorityEl2 = (arr) => {
    let count = 1;
    let ansIndex = 0;
    for(let i=1; i< arr.length; i++) {
        if(arr[i] === arr[ansIndex]) {
            count++;
        } else {
            count--;
        }
        if(!count) {
            ansIndex = i;
            count = 1;
        }
    }
    let numberCount = 0;
     for(let i=0; i< arr.length; i++) {
        if(arr[ansIndex] === arr[i]) numberCount++;
    }
    return numberCount > arr.length/2 ? arr[ansIndex] : '-1';
}





//Largest sum of Contiguous Subarray(Kandanes Algoritham)
//brutforce solution will be we can calculate by 2 for loop so time complexity will be O(n2)

//Kandanes Algo will give in O(n)
const maxSumSubArray = (arr) => {
    let maxSum = 0;
    let currentSum = 0;

     for(let i=0; i< arr.length; i++) {
        currentSum += arr[i];
        if(currentSum > maxSum) {
            maxSum = currentSum;
        }
        if(currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}

// QGiven an array price[] of length N, representing the prices of the stocks on
//  different days, the task is to find the maximum profit possible for
//   buying and selling the stocks on different days using transactions where 
//   at most one transaction is allowed.
// Input: prices[] = {7, 1, 5, 3, 6, 4]
// Output: 5

// sol1 O(n2) & O(n1)
const maxProfit1 = (arr) => {
    let maxProfit = 0;
    for(let i=0; i< arr.length; i++) {
        for(let j=i+1; j< arr.length; j++) {
            const profit = arr[j] - arr[i];
            if(profit > maxProfit) {
                maxProfit = profit
            }
        }
    }
    return maxProfit;
}

// sol2 O(n) & O(1)

const maxProfit2 = (arr) => {
    let MinVal = arr[0];
    let maxProfit = 0;

    for(let j=1; j< arr.length; j++) {
        const profit = arr[j]-MinVal;
        maxProfit = Math.max(profit,maxProfit);
        MinVal = Math.min(MinVal, arr[j]);
    }
    return maxProfit;
}

//Q. Given an array price[] of length N, representing the prices of the stocks on 
// different days, the task is to find the maximum profit possible for buying and 
// selling the stocks on 
// different days using transactions where any number of transactions are allowed.

const maxProfitMultipleTransctions = (arr) => {
    let maxProfit = 0;
     for(let i=1; i< arr.length; i++) {
        if(arr[i] > arr[i-1]) {
            maxProfit += arr[i] - arr[i-1];
        }
    }
    return maxProfit;
}

//Q. Given an array arr[] of N non-negative integers representing the height of blocks. 
// If width of each block is 1, 
// compute how much water can be trapped between the blocks during the rainy season.

//here we will use Array preprocessing(Rain water tapping)

const RWT = (arr) => {
    let leftArr = [arr[0]];
    let ans = 0;
    for(let i=1; i< arr.length; i++) {
        leftArr[i] = Math.max(leftArr[i-1],arr[i]);
    }
    // for right array we need to feel it from end
    let rightArr = new Array(arr.length);
    rightArr[arr.length -1] = arr[arr.length-1];
     for(let i=arr.length-2; i>= 0; i--) {
        rightArr[i] = Math.max(rightArr[i+1],arr[i]);
    }
    // formula to get value is ith = Math.min(left(i), right(i)) - arr(i);

    for(let i=0; i< arr.length; i++) {
        ans += Math.min(leftArr[i], rightArr[i]) - arr[i];
    }
    return ans;
}


// console.log(majorityEl2([5,1,5,1,1,5,5,5]));
// console.log(maxSumSubArray([-5,4,6,-3,4,-1]));
// console.log(maxProfit2([7, 1, 5, 3, 6, 4]));
// console.log(maxProfitMultipleTransctions([7, 1, 5, 3, 6, 4]));
console.log(RWT([3,1,2,4,0,1,3,2]));
