//function is a block of code which performs a specific task

function sayMyName() {
  console.log("Hitesh Katariya");
}

sayMyName();

function printCounting() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}
printCounting();

function printNum(num) {
  console.log("print number " + num);
}
printNum(5);

function getAverage(num1, num2) {
  let ans = (num1 + num2) / 2;
  console.log("Average " + ans);
}

getAverage(10, 30);

//return functions

function getSum(a, b, c) {
  let sum = a + b + c;
  return sum;
}
let ans = getSum(5, 5, 6);
console.log(ans);

// let getExp = function (x, y) {
//   let ans = x ** y;
//   return ans;
// };
// console.log(getExp(2, 3));

let getExp = (x, y) => {
  let ans = x ** y;
  return ans;
};
console.log(getExp(2, 3));
