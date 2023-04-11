function fibonacci(num) {
// your code here
	 if (num === 0) {
    return 0;
  } else if (num === 1 || num === 2) {
    return 1;
  } else if (num > 50) {
    return "Number too large, please enter a number between 0 and 50";
  } else {
    let fibArr = [0, 1];
    for (let i = 2; i <= num; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    return fibArr[num];
  }
}

module.exports = fibonacci;
