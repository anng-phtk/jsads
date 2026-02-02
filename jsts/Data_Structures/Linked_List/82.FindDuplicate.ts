import ListNode from "./LinkedList"; 
import LinkedList from "./LinkedList";


function middleNode(head: ListNode | null): ListNode | null {
    let [fast, slow]:[ListNode | null, ListNode | null] = [head, head];

    while (fast !== null && fast.next !== null) {
        fast = fast.next?.next;
        slow = slow.next;
    }

    return slow;
};