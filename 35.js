// var pairSum = function(head) {
//     const arr = [];
//     let max = 0;
    
//     while (head) {
//         arr.push(head.val);
//         head = head.next;
//     }
    
//     for (let i = 0; i < arr.length / 2; i++) {
//         const sum = arr[i] + arr[arr.length - 1 - i]
//         max = Math.max(max, sum);
//     }
    
//     return max;
// };

var pairSum = function(head) {
    let fast=head;
    let slow = head;

    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
    }

    let middle = slow;
    while(middle){
        let nextNode = middle.next;
        middle.next = fast;
        fast= middle;
        middle = nextNode;
    }

    let ans=0;
    let iterator = head;
    while(fast){
        let sum = iterator.val + fast.val;
        ans = Math.max(ans, sum);
        iterator = iterator.next;
        fast=fast.next;
    }
    return ans;
};