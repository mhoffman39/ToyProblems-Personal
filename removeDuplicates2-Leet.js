// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

var removeDuplicates = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i ++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }

  }
  return stack.join('');
};

console.log(removeDuplicates("abbaca"))  //"ca"