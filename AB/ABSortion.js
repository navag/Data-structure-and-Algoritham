// bubble sorting

const bubbleSorting  = (a) => {
    for (let i = 0; i < a.length; i++) {
        let swap = false;
        for (let j = 0; j < a.length-1-i; j++) {
            if(a[j] > a[j+1]) {
                swap = true;
                [a[j],a[j+1]] = [a[j+1], a[j]]
            }
        }
        if(!swap) {
            break;
        }
    }
    return a;
};

const insertionSort = (a) => {
    //devide array array into 2 section like sorted and unsorted
    //comparative to bubble insertion has less swaping
    for (let i = 1; i < a.length; i++) {
        const temp = a[i];
        let j = i-1;
        while(j >= 0 && temp < a[j]) {
            a[j+1] = a[j];
            j--;
        }
        a[j+1] = temp; 
    }
    return a;
};

const selctionSort = (a) => {
    for (let i = 0; i < a.length; i++) {
        let min = i;
        for (let j = i+1; j < a.length; j++) {
            if(a[j] < a[i]) min = j;
        }
        if(min !== i) [a[i],a[min]] = [a[min],a[i]];
    }
    return a;
};

const mergeSortedArr = (a1, a2) => {
    const newArr = [];
    let i = 0;
    let j = 0;
    while( i< a1.length && j < a2.length) {
        if(a1[i] < a2[j]) {
            newArr.push(a1[i]);
            i++;
        } else {
            newArr.push(a2[j]);
            j++;
        }
    }
    while(i < a1.length) {
        newArr.push(a1[i]);
        i++;
    }
    while(j < a2.length) {
        newArr.push(a2[j]);
        j++;
    }
    return newArr;
}

const mergeSort = (a, l, r) => {
    const mid = Math.floor((l + r)/2);
    let finalArr; 
    if(l < r) {
    mergeSort(a, l, mid);
    mergeSort(a, mid + 1, r);
    const a1 = a.slice(l, mid);
    const a2 = a.slice(mid + 1, r);
    mergeSortedArr(a1,a2);
    }
}

console.log(bubbleSorting([5,3,1,7,6]));
console.log(insertionSort([5,3,1,7,6]));
console.log(selctionSort([5,3,1,7,6]));
console.log(mergeSortedArr([1,2,3], [1,2,3,4,5,6,7]));
console.log(mergeSort([5,3,1,7,6,7], 0, 6));