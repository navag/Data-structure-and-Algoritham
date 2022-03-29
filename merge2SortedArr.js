
const mergeSortedArrs = (arr1, arr2) => {
    const retArr = [];
    let i=0, j=0, k = 0;
    if(!arr1.length && arr2.length) return arr2;
    if(arr1.length && !arr2.length) return arr1;
    
    while(arr1[i] || arr2[j]) {
        if(arr1[i] && arr2[j]) {
            if(arr1[i] <= arr2[j]) {
                retArr[k] = arr1[i];
                i++;
            } else {
                retArr[k] = arr2[j];
                j++;
            }
            k++;
        } else if(arr1[i]) {
                retArr[k] = arr1[i];
                i++;
        } else if(arr2[j]) {
                retArr[k] = arr2[j];
                j++;
        }
    }
    return retArr;
}

console.log(mergeSortedArrs([ 1, 3, 5, 7, 7, 9 ], [ 2, 4, 6, 8,100 ]));