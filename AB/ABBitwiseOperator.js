// 274 => 2*10^2 + 7*10^1 + 4*10^0

//101(Binary) => 5(0Decimal)

// binary Sum 1 + 1 = 0 with carry 1; 1 + 0 = 1;

//binary substraction: number + 2's Complement

// how to find 2' complement: inverse all bits of num + 1;

//Bitwise operator

//& => 0 & 0 = 0; 0 & 1 = 0; 1 & 0 = 0; 1 & 1 = 1;
//| => 0 | 0 = 0; 0 | 1 = 1; 1 | 0 = 1; 1 | 1 = 1;
//^(x-or) => 0 ^ 0 = 0; 0 ^ 1 = 1; 1 ^ 0 = 1; 1 ^ 1 = 0;
// ~(not) => ~0= 1; ~1 = 0;
// >>(right shift) => 12 >> 2 => (1100) => (0011) => 3;
// <<(left shift) => 12 << 2 => (1100) => (110000) => 48

//Note: right shift by 1 means divide by 2 ex: a >> 2 => a/2
//Note: left shift by 1 means multiply by 2 ex: a << 2 => a*2

//find odd/ even number by using bitwise operator 
1000, 0101;



const isEven = (num) => {
    return (num & 1) == 0;
};

const swapNum = (a,b) => {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return [a,b]
}

// find i'th bit in given number

// if we want to find bit at 5th position then left shift 1 by 5 and & the num with mask. if final num 
// is non zero then bit at given position is 1 else its 0
// ex:    100110101
// & mask:000100000 (1 lwft shift by 5)
//------------------
//        000100000 => non-zero , bit at 5th position is 1 

const findNumAt = (num, position) => {
const mask = 1 << position;
const newNum = (num & mask);
const retVal = newNum > 0 ? 'bit is 1' : 'bit is 0';
return retVal;
} 


// set ith bit in given number
// if we want to set bit at 3rd positin then left shift 1 by 5 position and OR with original num
// ex:    100010101
// | mask:000100000 (1 lwft shift by 5)
//------------------
//        100110101 =>  

const setBit = (num, position) => {
const mask = 1 << position;
return num | mask;
} 


//Clear ith bit

const clearBit = (num, position) => {
const mask = ~(1 << position);
return num & mask;
} 

// find number of bit to change from num1 to num2
// number of binary bits in num ==> (log n to base 2) + 1
// number of decimal digits in num ==> (log n to base 10) + 1


const changeBitsToConvertFromAtoB = (num1,num2) => {
    let xorNum = num1 ^ num2;
    //after this need to count number of set bit
    let count  = 0;
    while(xorNum) {
        count++;
        xorNum = xorNum & (xorNum-1); // this will make LSB to 0;
    }
    return count;
}

// X-OR properties:
// 1. n ^ n ==> 0
// 2. 0 ^ n ==> n

//Q-find the only non repeating element in an array where every element repeats twice
//ex: [5,4,3,4,5] ans: 3

const nonReapeating1 = (arr) => {
    let retNum = 0;
    for( let i = 0; i < arr.length; i++) {
        //making use of above 2 X-OR property
        retNum = retNum ^ arr[i];
    }

    return retNum;
}

//reverse all bits

const reverseBit = (A) => {
            let res = 0;

        for (let i = 0; i < 32; i++) {
            res *= 2;
            res += A & 1;
            A >>= 1;
        }
        
        return res;
}

// find positin of set bit 
    const findPosition = (n) => {
        //0100 
        let pos = 0;
        let setBitCount = 0;
        while(n) {
            setBitCount += n & 1;
            pos++;
            n >>= 1;
        }
        if(setBitCount === 0 || setBitCount > 1) return -1;
   
        return pos;
    }

 // find missing Number from array
 const missingNum = () => {
        //code here
        const array = [1,2,3,5];
        const n = 5;
        let missingNumber = 0;
        const nSum = (n*(n + 1))/2;
        let totSum = 0;
        for(let i=0; i < n -1; i++) {
            totSum += array[i];
        }
        
        return nSum-totSum;
    }

// console.log(isEven(3));
// console.log(swapNum(3,2));
console.log(findNumAt(30, 3))
// console.log(setBit(100000001, 4));
// console.log(changeBitsToConvertFromAtoB(13,8))
// console.log(nonReapeating1([5,4,3,5,4]));
// console.log(reverseBit(3));
console.log(missingNum())