/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    // Explicitly writing these cases as sperate
    if (!head || !head.next) return head; 
    if (k === 0) return head;

    // use example: 1 -> 2 -> 3 -> 4 -> 5 
    // in this case (5.next -> null)
    let current: ListNode | null = head; // head = 1, so current = 1
    // start length counting at 1
    // because head is 1
    let len:number = 1;


    // move the pointer to 5 and exit loop when 5.next is null
    while (current && current.next) {
        current = current.next;
        len++; 
    }
    let actualK: number = (len < k)? k % len : k;

    //console.log("times" , actualK)
    // if k was 5. then the list would return to its original form
    if (len === k || actualK === 0) return head;

    // now lets reset current to the start
    current = head;
    // lets define a trailing pointer
    let trailing: ListNode | null = head;

    let counter: number = 0;
    while (current && current.next) {
        current = current.next;
        if (counter >= actualK) trailing = trailing.next
        counter++;
    }

    // when k = 2, current goes to 5, trailing should be at 3
    //console.log("where are we: ", counter, trailing.val, current.val, " ---" );
    
    let newHead: ListNode | null = trailing.next; // whatever comes after trailing is our new head;
    trailing.next = null; // break the linkedList after trailing node
    current.next = head; // reconnect the last node to the oiriginal head

    head = newHead; // rest the head

    return head; // return the head
};
