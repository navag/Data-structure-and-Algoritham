// Optimized BubbleSort with noSwaps
function rankTransform(arr){
    let rankObj = {}
    let rank = 1;
    let rankArr = []
let sortedArray = [...arr].sort((a,b) => a-b)
for(let i=0; i< sortedArray.length; i++) {
    if(!rankObj[sortedArray[i]]) {
        rankObj[sortedArray[i]] = rank;
        rank++;
    }
}

console.log(rankObj)
for(let i=0; i< sortedArray.length; i++) {
    rankArr.push(rankObj[arr[i]])
}
return rankArr
}


rankTransform([37,12,28,9,100,100,56,80,5,12]);