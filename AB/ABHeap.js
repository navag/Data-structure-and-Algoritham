// heap is complete binary tree that satisfies heaps properties
// binary tree will have at-most 2 children
// complete binary tree is always will have 2 children or will have less than 2 and start that node from left side.

//Max-heap==> children will have lesser value than parent
//Min-heap==> children will have greater value than parent
//Max-heap
//     50
//     / \
//    40 45
//   / \
// 30   20

//max heap-2
//     50
//     / \
//    40 45
//   /
// 15  

// heap to arr = [50,40,45,30,20]

//Heap properties for Node is
// 1. parent(i) = Math.floor(i/2);
// 2. left child = 2*i + 1;
// 3. right child = 2*i +2;

//Insert node into heap O(nlogn)
// insert will always happen at first position and then make array as a heap
const insert = (arr, n, value) => {
    n = n+1;
    arr[n] = value;
    i = n;
    while(i > 1) {
        const parent = Math.floor(i/2);
        if(parent < arr[i]) {
            [arr[parent], arr[i]] = [arr[i], arr[parent]];
            i = parent;
        } else {
            return arr;
        }
    }
    return arr;
}

//insert with heapify;
const insert1 = (arr, n, element) => {
    n = n + 1; //increase length by 1
    arr[n-1] = element;
    const retArr = buildHeap(arr, n) // bottom-up approach so at n-1 will be the last element
    return retArr;
}
//Delete
// make first elemt as last element and reduce length by 1;

const deleteNode = (arr, n) => {
    //array start with 1 index
    arr[1] = a[n];
    i = 0;
    n = n-1;
    while(i < n) {
        const leftChild = 2*i + 1;
        const rightChild = 2*i + 2;
        const largest = arr[leftChild] > arr[rightChild] ? 2*i : 2*i + 1;
         if(arr[largest] > arr[i]) {
             [arr[largest], arr[i]] = [arr[i], arr[largest]];
             i = largest;
         } else {
             arr;
         }
    }
    return arr;
}

    // delete will always delete from starting node.
    const deleteNode1 = (arr, n) => {
        // remove 1st node and replce 1st node with last value.
        // reduce length by 1

        const lastElem = arr[n-1];
        arr[0] = lastElem;
        n = n-1;
        const retArr = buildHeap(arr, n);
        return retArr;
    }
// convert any node and its children into heap(max-heap)
const heapify = (arr, n, i) => {
    let largest = i;
    const leftChild = Math.floor(2*i) + 1;
    const rightChild = Math.floor(2*i) + 2;
    if(leftChild < n && arr[leftChild] > arr[largest]) largest = leftChild;
    if(rightChild < n && arr[rightChild] > arr[largest]) largest = rightChild;

    if(largest != i) {
        [arr[largest], arr[i]] = [arr[i], arr[largest]];
        heapify(arr, n, largest)
    }
}

// build heap O(n)
// (n/2 + 1) ....n will be always leaf node and this will be already in heap.
// by using heapify function we will start crating heap from end

const buildHeap = (arr, n) => {
    let retArr;
    for (let i = Math.floor(n/2); i >= 0; i--) {
       heapify(arr, n, i)
    }
    return arr;
}

// O(nlogn)
const heapSort = (arr, n) => {
    buildHeap(arr, n); // convert given array into heap
    for (let i = n-1; i >= 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]]; // first element from heap will be max so put it at end
        heapify(arr, i, 0); // heapify for remaining element
    }
    
    return arr;
}

// console.log(insert1([90, 60, 80, 30, 20, 50, 45], 7, 100));
console.log(deleteNode1([90, 60, 80, 30, 20, 50, 45], 7));
// console.log(buildHeap([-50,-60,-45,-30,-20, -80, -90], 7)); // after all -ve, hepify will create min heap with negative value
// console.log(heapSort( [100, 90, 80, 60, 20, 50, 45, 30], 8));