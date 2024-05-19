// import { LinkedList,ListNode } from "./linkeedList";
const { LinkedList, ListNode } = require("./linkeedList");
// [1,3,4,7,1,2,6]

let head1= new ListNode(1)
let head2= new ListNode(3)
let head3= new ListNode(4)
let head4= new ListNode(7)
let head5= new ListNode(1)
let head6= new ListNode(2)
let head7= new ListNode(6)

head1.next = head2
head2.next = head3
head3.next = head4
head4.next = head5
head5.next = head6
head6.next = head7

// const head=new LinkedList(head1)

// 1->3->4->7->1->2->6



var deleteMiddle = function(head) {
    if(head === null)return null;
    // console.log(head);
    // console.log(head.next);
    prev = new ListNode(0);
    prev.next = head;
    slow = prev;
    fast = head;
    console.log('a');
    while(fast != null && fast.next != null){
        // console.log(fast);
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = slow.next.next;
    return prev.next;
};
const a=deleteMiddle(head1);
console.log(a.next);