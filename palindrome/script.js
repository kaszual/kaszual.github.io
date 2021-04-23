let btn = document.getElementById("btn");
let output = document.getElementById("output");
let answer = document.getElementById("answer");

btn.addEventListener("click", () => {
  let word = document.getElementById("word").value;
  let palindrome = word.split("").reverse().join("");
  // outputting the words backwards
  // output.innerHTML = palindrome;

  if (word.length > 0 && word.toLowerCase() == palindrome.toLowerCase()) {
    answer.innerHTML = "Yes";
  } else {
    answer.innerHTML = "No";
  }
});

// function reverseString(str) {
//   // Step 1. Use the split() method to return a new array
//   var splitString = str.split(""); // var splitString = "hello".split("");
//   // ["h", "e", "l", "l", "o"]

//   // Step 2. Use the reverse() method to reverse the new created array
//   var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//   // ["o", "l", "l", "e", "h"]

//   // Step 3. Use the join() method to join all elements of the array into a string
//   var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//   // "olleh"

//   //Step 4. Return the reversed string
//   return joinArray; // "olleh"
// }

// reverseString("hello");
