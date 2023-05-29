function isInteger(number) {
    return number % 1 === 0;
  }
  
  console.log(isInteger(23)); // Output: true
  console.log(isInteger(234.32)); // Output: false
  console.log(isInteger(23)); // Output: true
  console.log(isInteger(0)); // Output: true
  