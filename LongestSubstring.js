function LongestSubstring(s) {
  const Maping = new Map();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (Maping.has(char)) {
      left = Math.max(left, Maping.get(char) + 1);
    }
    Maping.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

const input1 = "abcabcbb";
const input2 = "bbbbb";
const input3 = "pwwkew";

console.log(LongestSubstring(input1));
console.log(LongestSubstring(input2));
console.log(LongestSubstring(input3));
