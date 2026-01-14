let obj = {
  name: "Hitesh",
  age: 25,
  weight: "67kg",
  height: "6ft",
  greet: function () {
    console.log("hello");
  },
};

console.log(obj);
obj.greet();

//Arrays
let arr = [1, 2, 3, 4, 5];
console.log(arr);

//create arrays through array constructor

let brr = new Array("Hitesh", 1, true);
brr.push("Katariya");
brr.pop();
brr.shift();
brr.unshift("hello");
brr.slice(1, 2);
brr.splice(1, 0, "world");
console.log(brr);

//Built in methods in Array
//Push - insert at the end
//Pop  - remove from end
//Shift - to remove the leftmost value
//unshift - to add value in the leftmost side
//slice - to create a new part of exesting array by setting start and end index
//splice - helps to remove ,replace the elements
//map - is used to perform a function on every element and return value for each element and provide a new array
let mapArr = [10, 20, 30];
let ansArr = mapArr.map((num) => {
  return num ** 2;
});
console.log(ansArr);
//filter - is used to filter an elements based on logic provided and create a new array with filtered elements

let filterArr = [1, 2, 3, 4, 5, 6, 7, 8];

let ansFilter = filterArr.filter((num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ansFilter);
//Reduce - it is used to reduce the array to a single value by adding the elements

let arrRed = [1, 2, 3, 4, 5, 6, 7, 8];

let ans = arrRed.reduce((acc, cur) => {
  return acc + cur;
}, 3);
console.log(ans);

//Sort - used to sort elements in ascending order

let arrSort = [3, 1, 5, 3, 6, 6, 7];
console.log(arrSort.sort());

// indexof - used to find index of a element else return -1

let InArr = [2, 4, 6, 8, 9, 1, 3];
let ansIn = InArr.indexOf(10);
let ansIn1 = InArr.indexOf(2);
console.log(ansIn);
console.log(ansIn1);

