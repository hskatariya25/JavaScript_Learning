let opt1 = "English";
let opt2 = "HINDI";
let ans = opt1 + opt2; //  string concatination
console.log(ans);

let finalAns = `${opt1} ${opt2}`; // template string
console.log(finalAns);

console.log(opt1.length); // to retrive length of string

console.log(opt1.toUpperCase()); // convert all the characters to uppercase

console.log(opt2.toLowerCase()); // convert all the characters to lowercase

let str ="Hitesh"

console.log(str.substring(2,4))// returns a substring of character starting from index 2 to lastIndex - 1

let sentence = "Hi \\how \\are \\you " // \ is used to normailize the special character when added before a special character

let words = sentence.split("\\")

console.log(words) //returns array of words seprated on basis of \\

console.log(words.join("-")); // returns a string with adding symbol as seprator
