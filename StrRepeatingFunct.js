function repeatStringNumTimes(str, num) {
  let result = "";

  if (num <= 0) {
    return "";
  }

  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}
repeatStringNumTimes("*", 3)
// "***"

repeatStringNumTimes("abc", 3)
// "abcabcabc"

repeatStringNumTimes("abc", 4)
// "abcabcabcabc"

repeatStringNumTimes("abc", 0)
// ""

repeatStringNumTimes("abc", -2)
// ""