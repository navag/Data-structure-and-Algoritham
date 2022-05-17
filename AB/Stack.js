const balancedBrackets = (str) => {
    const stack = [];
for(let i=0; i<str.length; i++) {
   if(str[i] == '{' || str[i] == '(' || str[i] == '[') {
    stack.push(str[i]);
  }
  switch(str[i]) {

    case '}':
    if (stack.pop() !== '{') {
      return false
    } 
    break;

     case ']':
    if (stack.pop() !== '[') {
      return false
    } 
    break;

     case ')':
    if (stack.pop() !== '(') {
      return false
    } 
    break;
  }
}
return true;
}

//previous smaller element
// bruteforce:
// loop back from current position and find latest smaller element and print 
//that element 
//O(n2) && O(n)

const previousSmallElement = (arr) => {
    const retArr = [];
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        while(stack.length && stack[stack.length-1] >= arr[i]) {
            stack.pop();
        }
        if(!stack.length) {
            retArr[i] = (-1);
        } else {
            retArr[i] = (stack[stack.length-1]);
        }
        stack.push(arr[i]);
    }
    return retArr;
}

const previousGreatestElement = (arr) => {
    const retArr = [];
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        while(stack.length && stack[stack.length-1] <= arr[i]) {
            stack.pop();
        }
        if(!stack.length) {
            retArr.push(-1)
        } else {
            retArr.push(stack[stack.length-1]);
        }
        stack.push(arr[i]);
    }
    return retArr;
}

//largest area in histogram
const getPreviuosSMinIndexes = (arr) => {
    const retArr = [];
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        while(stack.length && arr[stack[stack.length-1]] >= arr[i]) {
            stack.pop();
        }
        if(stack.length) {
            retArr[i] = (stack[stack.length-1]);
        } else {
            retArr[i] = -1;
        }
        stack.push(i);
    }
    return retArr
}

const getNextminIndexes = (arr) => {
    const retArr = new Array(arr.length);
    const stack = [];
    for (let i = arr.length-1; i >= 0; i--) {
        while(stack.length && arr[stack[stack.length-1]] >= arr[i]) {
            stack.pop();
        }
        if(stack.length) {
            retArr[i] = (stack[stack.length-1]);
        } else {
            retArr[i] = arr.length;
        }
        stack.push(i);
    }
    return retArr
}

const maxArea = (arr) => {
    const ps = getPreviuosSMinIndexes(arr);
    const ns = getNextminIndexes(arr);
    let maxArea = 0;
    for (let i = 0; i < arr.length; i++) {
        const area = (ns[i]-ps[i]-1) * arr[i];
        maxArea = Math.max(area,maxArea);
        //use BigInt for bigger values
        // const area = BigInt(ns[i] - ps[i]-1) * BigInt(arr[i]);
        // if(BigInt(area) > BigInt(maxArea)) maxArea = area;
    }
    return maxArea;
    
}

// console.log(previousSmallElement([4,2,1,5,6,3,2,4,2]));
// console.log(previousGreatestElement([1, 3, 0, 2, 5]));
// console.log(balancedBrackets('{}}'));
console.log(maxArea([4,2,1,5,6,3,2,4,2]));
