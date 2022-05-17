/*
  Manual sums
*/

// Increment by 1
function increment(num) {
  let current;
  for (let i = num.length - 1; i >= 0; i--) {
    current = num[i] + 1;
    num[i] = current % 10;
    if (num[i] !== 0) {
      break;
    }
  }
  if (current > 9) {
    num = [1, ...num];
  }

  return num;
}

console.log(increment([1, 2, 3]));
console.log(increment([1, 9, 2, 4, 0, 9]));
console.log(increment([0]));
console.log(increment([9]));
console.log(increment([8, 9]));
console.log(increment([9, 9]));
console.log(increment([1, 9, 9]));
console.log(increment([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]));

// Increment by x

function increment(num, x) {
  let carry = x;
  for (let i = num.length - 1; i >= 0; i--) {
    let current = num[i] + carry;
    num[i] = current % 10;
    carry = Math.floor(current / 10);
    if (carry <= 0) {
      break;
    }
  }
  if (carry > 0) {
    num = [1, ...num];
  }

  return num.join("");
}

console.log(increment([0], 1));
console.log(increment([0], 9));
console.log(increment([1], 8));
console.log(increment([1], 9));
console.log(increment([9, 9, 9, 9], 9));

// Increment by another big number

function increment(num, num2) {
  let size = num.length >= num2.length ? num.length : num2.length;
  let reversedNum = num.reverse();
  let reversedNum2 = num2.reverse();
  let carry = 0;
  for (let i = 0; i < size; i++) {
    let current = carry;
    if (reversedNum[i]) {
      current = current + reversedNum[i];
    }
    if (reversedNum2[i]) {
      current = current + reversedNum2[i];
    }
    reversedNum[i] = current % 10;
    carry = Math.floor(current / 10);
  }
  if (carry > 0) {
    reversedNum.push(1);
  }
  return reversedNum.reverse().join("");
}

console.log(increment([9, 9, 9], [9, 9]));
console.log(increment([9, 9, 9, 9], [9]));
console.log(increment([1, 0, 1, 0], [1, 0, 1, 0, 1]));
console.log(increment([0], [1]));
console.log(increment([0], [9]));
console.log(increment([1], [8]));
console.log(increment([1], [9]));
