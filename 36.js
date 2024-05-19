var guessNumber = function(n) {
    let low = 1, high = n;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const guess = this.guess(mid);
      if (guess === 0) {
        return mid;
      } else if (guess === -1) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
};