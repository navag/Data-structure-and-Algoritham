function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var uniqValArray = []
    for(var j = 1; j < arr.length; j++){
    if(arr[j-1] !== arr[j]) uniqValArray.push(arr[j-1])
    }
    uniqValArray.push(arr[arr.length-1])
return uniqValArray
}
// by using set
function countUniqueValues1(arr){
    if(arr.length === 0) return 0;
    const uniqValSet = new Set([...arr]);
    
return uniqValArray.from(uniqValSet);
}
countUniqueValues([1,2,2,5,7,7,99,99,100,101]);
countUniqueValues1([1,2,2,5,7,7,99,99,100,101]);
