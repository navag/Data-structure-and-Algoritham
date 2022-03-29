// Given an array of numbers, arrange them in a way that yields the largest value.
// For example, if the given numbers are {54, 546, 548, 60}, 
// the arrangement 6054854654 gives the largest value. And if 
//     the given numbers are {1, 34, 3, 98, 9, 76, 45, 4}, 
// then the arrangement 998764543431 gives the largest value.

// Given two numbers X and Y, how should myCompare() 
//     decide which number to put first – we compare two numbers XY 
//         (Y appended at the end of X) and YX (X appended at the end of Y). 
//         If XY is larger, then X should come before Y in output, else Y should come before. 
//         For example, let X and Y be 542 and 60. To compare X and Y, 
//     we compare 54260 and 60542. Since 60542 is greater than 54260, we put Y first.

const mySort = (x,y) => {
    const xy = String(x) + y;
    const yx = String(y) + x;
    return Number(yx) - Number(xy);
}

const getBigNum = (a) => {
    a.sort(mySort);
    console.log(a);
    let returnNum = ''
    for (let num of a) {
        returnNum += num;
    }
    return returnNum;
}

console.log(getBigNum([54,546,548,60]));