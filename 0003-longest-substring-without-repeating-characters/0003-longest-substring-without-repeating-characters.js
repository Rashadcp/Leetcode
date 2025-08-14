/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
     let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    let current = "";
    for (let j = i; j < s.length; j++) {
      if (current.includes(s[j])) break; // stop if repeated char
      current += s[j];
      maxLen = Math.max(maxLen, current.length);
    }
  }

  return maxLen;
};