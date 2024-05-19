//Solution1

// var reverseList = function(head) {
//     if (!head || !head.next) {
//         return head;
//     }

//     var newHead = reverseList(head.next);
//     head.next.next = head;
//     head.next = null;
//     return newHead;    
// };

//Solution2

var reverseList = function(head) {
    let node = null;

    while (head) {
        const temp = head.next;
        head.next = node;
        node = head;
        head = temp;
    }

    return node;    
};