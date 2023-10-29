function isPalindrome(word) {
  // Write your algorithm here
  let j = word.length-1 
    for(let i=0; i<word.length/2; i++){ 
        if(word[i]!=word[j]){ 
            return false; 
        } 
        j--; 
    } 
    return true; 
} 
let word1 = "racecar"; 
let word2 = "nrobot"; 
let word3 = "brian";
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
