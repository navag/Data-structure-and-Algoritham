// Given an unsorted array A of size N that contains only non-negative integers, 
// find a continuous sub-array which adds to a given number S.
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements 
// from 2nd position to 4th position 
// is 12.

const subarraySum = (arr, n, s) => {
        //your code here
        let start=0;
        let currSum = 0;
        for(let i=0; i< n; i++) {
            currSum += arr[i];
             while(currSum>=s){
                if(currSum==s){
                    return [start+1,i+1];
                }
                currSum -= arr[start];
                start++;
            }
         
        }
        return [-1];
    }

    console.log(subarraySum([1,2,3,4,5,6,7,8,9,10], 10, 14));