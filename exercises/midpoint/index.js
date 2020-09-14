// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }



function midpoint(list) {
    if(!list.head || !list.head.next){
        return;
    }
    // move one node at a time
    let slow = list.head;
    // move two nodes at a time
    let fast = list.head;

    // fast.next must be included, since fast.next may be null, it is impossible to calculate null.next. this will break the func
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

module.exports = midpoint;
