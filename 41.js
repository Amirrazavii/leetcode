/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let res = [];
  
    let backtracking = (currentDigit, sum, elements) => {
      if (currentDigit > 9) return;
      if (sum > n) return;
      if (elements.length > k) return;
  
      if (sum === n && elements.length === k) {
        res.push(elements);
        return;
      }
  
      for (let i = currentDigit + 1; i <= 9; i++) {
        backtracking(i, sum + i, [...elements, i]);
      }
    }
  
    backtracking(0, 0, [])
  
    return res;
  };

// Time complexity: O(9^k)
// Space complexity: O(k)
const a=3, b=7;
console.log(combinationSum3(a,b)); // [[1,2,4]]