// var gcdOfStrings = function(str1, str2) {
//     const [smallerString, largerString] = [str1, str2].sort((a,b) => a.length - b.length);
//     for (let i = smallerString.length; i > 0; i--) {
//         const testString = smallerString.slice(0, i);
//         const correctSmaller = !smallerString.split(testString).join('').length;
//         const correctLarger = !largerString.split(testString).join('').length;
//         if (correctSmaller && correctLarger) return testString;
//     }
//     return '';
// };


var gcdOfStrings = function(str1, str2) {
    const [small,large]=[str1,str2].sort((a,b)=>a.length-b.length);
    for(let i =small.length;i>0;i--){
        const testString=small.slice(0,i);
        console.log(small.split(testString));
        console.log(large.split(testString));
        const correctSmall=!small.split(testString).join('').length;
        const correctLarge=!large.split(testString).join('').length;
        if(correctSmall && correctLarge) return testString;
    }
    return '';
}
const a='ABCABC';
const b='ABC';
console.log(gcdOfStrings(a,b));