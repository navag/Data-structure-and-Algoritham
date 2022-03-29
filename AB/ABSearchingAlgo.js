//binary search complexity log(N), O(1)

const binarySearch = (arr,num) => {
    let start = 0, end = arr.length-1;
    
    while(start <= end) {
    let mid = Math.floor((start + end)/2);
        if(arr[mid] === num) return mid;
        else if(arr[mid] > num) end = mid - 1;
        else if (arr[mid] < num) start = mid + 1;
    }
    return -1;
    
}

//search umber in an infinet sorted arr;
const binarySearchInfiniteArr = (arr, num) => {
 let start = 0, end = 1; 
    while (arr[end] < num) {
        start = end;
        end = 2*end
    }
    
    return binarySearch(arr,num,start,end);
}

// find a element in sorted and rotated array
// ex: [40,50,10,20,30], [9,8,3,4,5,6,7]

const binarySearchInRotatedArr = (arr, num) => {
     let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        if(num === arr[mid]) return mid;
            //left part sorted
        else if(arr[start] < arr[mid]) {
            if(num >= arr[start] && num < arr[mid]) {
                end = mid -1;
            } {
                start = mid + 1;
            }
        } else {
            //right part sorted
            if(num > arr[mid] && num <= arr[end]) {
                start = mid + 1;
            } else {
                end  = mid -1;
            }
        }
    }

}

console.log(binarySearch([3,6,8,9,12,34,56], 3));
console.log(binarySearchInRotatedArr([8,9,3,4,5,6,7],3))