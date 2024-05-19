var deleteMiddle = function(head) {
    let l=head.length
   const a=Math.ceil(l/2)
   console.log(a);
    head.splice(a,1)
    console.log(head);
    return head
    
};

const a=deleteMiddle([1,2,3,4,5,6]);
console.log(a);