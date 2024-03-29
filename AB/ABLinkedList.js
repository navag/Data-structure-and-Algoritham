// https://cs.slides.com/colt_steele ==> slides of DSAL


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

// pop
// if there are no  nodes in the list return undefined
// loop through list until reach to tail
// set the next of the 2nd last element to null
//set the tail to be 2nd last element
//decrement the length of list by 1
// return the value of node removed

    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

//shift
// if there are no nodes return undefined
// store the current head property in variable
// set the head to the current heads next property
// decrement length by 1
//return the value of the node removed
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
 
// unshift
// this function shopuld accept value
// create new node by the value passed to the function 
// if there is no head property on the list, set the head and tail to the newly created node
// otherwise set the newly created nodes next property to the current/old head property on the list 
// set the head property on the list to be that newly created node
// increment length of list by 1
// return linked list
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

// get
// this function should accept an index
// if the index is less than 0 or greater than or equal to the length of the list return null
//loop through list until we reach the index and return the node at specific index    
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
//  set
// This function should accept a value and an index
// Use your get function to find the specific node.
// If the node is not found, return false
// If the node is found, set the value of that node to be the value passed to the function and return true
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
// insert 
// If the index is less than zero or greater than the length, return false
// If the index is the same as the length, push a new node to the end of the list
// If the index is 0, unshift a new node to the start of the list
// Otherwise, using the get method, access the node at the index - 1
// Set the next property on that node to be the new node
// Set the next property on the new node to be the previous next
// Increment the length
// Return true
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

//  removed
// If the index is less than zero or greater than the length, return undefined
// If the index is the same as the length-1, pop
// If the index is 0, shift
// Otherwise, using the get method, access the node at the index - 1
// Set the next property on that node to be the next of the next node
// Decrement the length
// Return the value of the node removed
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
 
 removeFromEnd(n) {
    let prev = null, cur = this.head, ahead = this.head;
    for (let i = 0; i < n; i++) {
        ahead = ahead.next;
    }
    while (ahead !== null) {
        prev = cur;
        cur = cur.next;
        ahead = ahead.next;
    }
    // Now, cur points to the n-th node from the end and prev points to the previous node
    if (!prev) return cur.next; // this is when head node is the node to be deleted
    prev.next = cur.next;
    return this; 
    // Time Complexity: O(N)
    // Space Complexity: O(1)
 }

 removeFromEnd(n) {
    let length = 1,counter = 0,previousNodeIndex=0;
    let previousNode
    let current = this.head
    while(current.next) {
        length = length + 1
        current = current.next
    }
    current = this.head
    if(n > length) return undefined
    else if(n === length) { 
    this.head = current.next
    return this;
    }
    previousNodeIndex = length - n
    while(counter !== previousNodeIndex) {
        previousNode = current
        current = current.next;
        counter ++
    }
    previousNode.next = current.next
    return this
 }
// reverse
// Swap the head and tail
// Create a variable called next
// Create a variable called prev
// Create a variable called node and initialize it to the head property
// Loop through the list
// Set next to be the next property on whatever node is
// Set the next property on the node to be whatever prev is
// Set prev to be the value of the node variable
// Set the node variable to be the value of the next variable
// Once you have finished looping, return the list
    reverse(){
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      var next;
      var prev = null;
      for(var i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
   // merge 2 sorted lists
    mergeLists(l1,l2) {
    if (!l1 && !l2) return null;
    if (!l1) return l2;
    if (!l2) return l1;

    let resultList = new Node();
    let start = resultList;
    while (l1 || l2) {
        if (l1 && l2) {
            if (l1.val < l2.val) {
                resultList.next = l1;
                l1 = l1.next;
            }
            else {
                resultList.next = l2;
                l2 = l2.next;
            }

        }
        else if (l1) {
            resultList.next = l1;
            l1 = l1.next;
        }
        else {
            resultList.next = l2;
            l2 = l2.next;
        }
        resultList = resultList.next;
    }
    
    const tmp = start.next;
    start = null;
    start = tmp;

    return start;
    }
}


// find middle of linked list

getMiddle(head){
    let fastNode = head, slowNode = head;
    while(fastNode !== null && fastNode.next !== null) {
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }
    return slowNode;
}

isPalindrome(head){
    if(head === null) {
        return true;
    }
    const middle = getMiddle(head);
    const last = reverse(middle.next);
    let current = head
    while(last !== null){
     if(current.val !== last.val) return false;
        current = current.next;
        last = last.next;
    }
return true;
}

// Detect cycle in linked list and its node from where cycle starts(Floyed cycle detection algoritham)

detectCycle(head) {
    //once slowNode and fastNode value becomes same means there is cycle exists in LL
    let fastNode = head, slowNode = head;
    while(fastNode !== null && fastNode.next !== null) {
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
        if(slowNode.val === fastNode.val) return slowNode;
    }
    return null;
}

detectFirstNode(head) {
    const meet = detectCycle(head);
    const start = head;
    while(start.val !== meet.val) {
        start = start.next;
        meet = meet.next;
    }
    return start;
    
}

//Duplicate Linked list with randome pointer
duplicate(head) {
    //here every node will have val, next and randome pointer
    let curr = head;
    while(curr !== null) {
        const temp = curr.next;
        curr.next = new Node(curr.val);
        curr.next.next = temp;
        curr = temp;
    }
    curr = head; // to start from head to give randome pointer
    while(curr !== null) {
       if(curr.next !== null) curr.next.randome = curr.randome !== null ? curr.randome : null;
        curr = curr.next.next;
    }
    const original = head;
    const copy = head.next;
    while(original !== null) {
        original.next = original.next.next;
        copy.next = copy.next.next;
        original = original.next;
        copy = copy.next;
    }
    return copy;
}

var list1 = new SinglyLinkedList()
var list2 = new SinglyLinkedList()


list1.push(100)
list1.push(201)
list1.push(250)
list1.push(350)

list2.push(101)
list2.push(201)
list2.push(251)
list2.push(350)
list2.push(998)