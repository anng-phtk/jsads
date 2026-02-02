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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    
    if (!head || !head.next || left === right) return head;

    let origHead: ListNode | null = head;
    let [beforeLeft, leftNode]:[ListNode|null, ListNode|null] = [null, null];
    let [lastButOne, rightMost]: [ListNode|null, ListNode|null] = [null, null];
    
    let counter: number = 1;

    while (origHead) {

        if (counter === left-1) {
            beforeLeft = origHead;
        }
        
        if (counter === left) {
            leftNode = origHead
        }
        
        if (counter === right) {
            lastButOne = origHead;
        } 

        if (counter === right+1) {
            rightMost = origHead; 
        }
        

        origHead = origHead.next;
        counter++;
    }
    

    // reverse the entire list
    let current: ListNode|null = (leftNode === origHead)? origHead : leftNode;
    let prev:ListNode|null = beforeLeft;


    while (current && current !== rightMost) {
        // point to the next of current
        let nxt: ListNode|null = current.next;
        // current node's next pointer looks backwards to prev
        current.next = prev;
        // previous walk forward to current's spot
        prev = current;
        // current walks forward to next spot
        current = nxt;
    }  

    
    if (!rightMost) {
        head = prev; 
        return head;
    }
   
    if (beforeLeft) beforeLeft.next = prev;
    leftNode.next = rightMost;
    
    
    return head;
};