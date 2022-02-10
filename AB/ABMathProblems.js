//1. factorial

const factorial = (n) => {
    let fact = 1;
    for(let i=1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}

//2. trailing zero at factorial
// 5! => 120 => 1 zero(1 times 5)
//10! => 3628800 => 2 zeros(2 times 5)
// so basically need to calculate howmany times 5 occured till that number
//formula = n/5 + n/5*5 + n/5*5*5 + n/5*5*5*5 +.......

const factTrailingZeros = (n) => {
    let trailingZeros = 0;
    for(let i=5; i<= n; i=i*5) {
        trailingZeros += n/i
    }

    return trailingZeros;
}

// 3. Pallendrome number

const getPalendromeNum = (num) => {
    let revNum = 0;
    let temp = num;
    while(temp > 0) {
        const lastDigit = temp % 10;
        temp = parseInt(temp / 10);
        revNum = revNum * 10 + lastDigit;
    }
    if(revNum === num) {
        return true;
    }
    return false;
}

//4. sieve of Eratosthenes (Prime Numbers)
// n is prime if it dosent have any factor upto value √n (under root n)

const primeNumber = (n) => {
    const primeArr = new Array(n).fill(true);
    let retArr = [];
    //[true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
    //0,1 is not a prime number
    primeArr[0] = false;
    primeArr[1] = false;
    for( let i=2; i*i<= n; i++) {
       for( let j=i*2; j<= n; j = i + j) {
             primeArr[j] = false;
        }
    }

   for( let k=0; k<= n; k++) {
       if(primeArr[k])
        retArr.push(k);
    }

    return retArr;
}

const isPrime = (num) => {
   for( let i=2; i*i<= num; i++) {
        if(num%i === 0) return false;
    }

    return true;
}

//GCD(greatest common diviser)/HCF(Highest common factor) 
//Euclid Mathamatics theorem
//GCD(a,b) = GCD(b,a%b) do this upto a%b becomes zero

const GCD = (a,b) => {
    if(b === 0) return a;
    else return GCD(b,a%b);
}

//LCM by using GCD 
//LCM = (a*b) /GCD(a,b);

const LCM = (a,b) => {
    return (a*b)/GCD(a,b);
}

// Q. Check if a given number N is the Fibonacci number. A Fibonacci number 
// is a number that occurs in the Fibonacci series.


// A number is Fibonacci if and only if one or both of (5*n2 + 4) or (5*n2 – 4) 
// is a perfect square.


//BruteForece sol
    const checkFibonacci = function(N){
       //code here
       //1,2,3,5,8,13,21,34,55...
       let current = 1;
       let prevFib = 1;
    //   let current;
    if(N=== 1) return 'Yes';
       while (current <= N) {
           const temp = current;
           current = current + prevFib;
           prevFib = temp;
           if(current === N) return 'Yes'
       }
       return 'No'
    }


const perfectSqur = (n) => {
    if(n >= 0) {
        return Math.sqrt(n) % 1 === 0;
    }
    return false;
}

const isNumFib = (N) => {
    const form1 = 5 * N * N + 4;
    const form2 = 5 * N * N - 4;
    if(perfectSqur(form1) || perfectSqur(form2)) return 'Yes';
    return 'No'; 
}

console.log(isNumFib(14));

// console.log(factorial(10))
// console.log(factTrailingZeros(10))
// console.log(getPalendromeNum(12))
// console.log(primeNumber(20));
// console.log(isPrime(23));
console.log(GCD(15,20));
console.log(LCM(15,20));