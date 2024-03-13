const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
function measureTime(fn, n) {
    const startTime = performance.now();
    fn(n);
    const endTime = performance.now();
    return endTime - startTime;
}

function addToHeadTest(linkedList, n) {
    for (let i = 0; i < n; i++) {
        linkedList.addToHead(i);
    }
}

function addToTailTest(linkedList, n) {
    for (let i = 0; i < n; i++) {
        linkedList.addToTail(i);
    }
}

console.log('**Time Complexity Analysis**');

// Test `addToHead` for singly Linked List
console.log('\naddToHead (Singly Linked List):');
for (let i = 100; i <= 100000; i *= 10) {
    const time = measureTime(() => addToHeadTest(new LinkedList(), i));
    console.log(` n = ${i}, Time: ${time.toFixed(3)} ms`);
}

// Test `addToTail` for singly linked list
console.log('\naddToTail (Singly Linked List): ');
for (let i = 100; i <= 100000; i *= 10) {
    const time = measureTime(() => addToTailTest(new LinkedList(), i));
    console.log(` n = ${i}, Time: ${time.toFixed(3)} ms`);
}

// Test addToHead & addToTail for Doubly LinkedList
if (DoublyLinkedList) {
    console.log('\naddToHead(Doubly Linked List):');
    for (let i = 100; i < 100000; i *=10) {
        const time = measureTime(() => addToHeadTest(new DoublyLinkedList(), i));
        console.log(` n = ${i}, Time: ${time.toFixed(3)} ms `);
    }

    console.log('\naddToTail (Doubly Linked List): ');
    for (let i = 100; i <= 100000; i *= 10) {
        const time = measureTime(() => addToTailTest(new DoublyLinkedList(), i));
        console.log(` n = ${i}, Time: ${time.toFixed(3)} ms`);
    }

}


// addToHead Time complexity is: O(n).
// addToTail Time complexity is: O(n).
