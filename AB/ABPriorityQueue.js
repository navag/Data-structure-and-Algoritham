// priority queue internally uses Heap

// There are given n ropes of different lengths, we need to connect these ropes into one rope. The cost to connect two ropes is equal to the sum of their lengths. We need to connect the ropes with minimum cost.

// For example, if we are given 4 ropes of lengths 4, 3, 2, and 6. We can connect the ropes in the following ways. 
// 1) First, connect ropes of lengths 2 and 3. Now we have three ropes of lengths 4, 6, and 5. 
// 2) Now connect ropes of lengths 4 and 5. Now we have two ropes of lengths 6 and 9. 
// 3) Finally connect the two ropes and all ropes have connected.
// Total cost for connecting all ropes is 5 + 9 + 15 = 29. This is the optimized cost for connecting ropes. Other ways 
// of connecting ropes would always have same or more cost. For example, if we connect 4 and 6 first (we get three strings of 3, 2, and 10), then connect 10 and 3 (we get two strings of 13 and 2). Finally, we connect 13 and 2. Total cost in this way is 10 + 13 + 15 = 38.

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

const buildHeap = (arr, n) => {
    let retArr;
    for (let i = Math.floor(n/2); i >= 0; i--) {
       heapify(arr, n, i);
    }
}

 const deleteNode1 = (arr, n) => {
        // remove 1st node and replce 1st node with last value.
        // reduce length by 1

        const lastElem = arr[n-1];
        arr[0] = lastElem;
        n = n-1;
        buildHeap(arr, n);
}

const insert1 = (arr, n, element) => {
    n = n + 1; //increase length by 1
    arr[n-1] = element;
    const retArr = buildHeap(arr, n) // bottom-up approach so at n-1 will be the last element
    return retArr;
}

const minCost1 = (arr) => {
    //make all values negative so that heapify will create min Heap
   for (let i = 0; i < arr.length; i++) {
        arr[i] = -arr[i];
    }
    buildHeap(arr, arr.length);
    let cost = 0;
    while(arr.length > 1) {
        const min1 = -arr[0];
        deleteNode1(arr, arr.length);
        const min2 = -arr[0];
        deleteNode1(arr, arr.length);
        cost += min1 + min2;
        insert1(arr, arr.length, -(min1 + min2));
    }
    return cost;
}

const minCost = (arr) => {
    let cost = 0;    
    while(arr.length > 1) {
        arr.sort((a,b) => a-b);
        const firstElm = arr.shift();
        const secondEllm = arr.shift();
        const jointCost = firstElm + secondEllm;
        cost += jointCost;
        arr.push(jointCost);
    }
    return cost;
}

//min cost by using Heap

console.log(minCost([4, 3, 2, 6]));
console.log(minCost1([4,3,2,6]));