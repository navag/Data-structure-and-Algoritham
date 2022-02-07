var plusOne = function(digits) {
     let i = digits.length - 1;
    digits[i]++;
    while (digits[i] > 9) {
      digits[i] = 0;
      if (i > 0) {
        digits[i - 1]++;
        i--;
      } else {
        digits.unshift(1);
        break;
      }
    }
    return digits
};