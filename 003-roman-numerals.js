// fa credo due cicli in più

const RomanDigits = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function convert(romanChar) {
  return RomanDigits[romanChar];
}
console.log(convert("M"));

function sumRomanDigits(romanNumberString) {
  console.log(romanNumberString.slice(1));
  console.log(romanNumberString.slice(0, 1));
  console.log(romanNumberString.slice(1, 2));
  console.log(romanNumberString.slice(0, 2));

  let total = 0;
  let current = romanNumberString.slice(0, 1);
  let next = romanNumberString.slice(1, 2);
  let newString = romanNumberString.slice(1);

  if (romanNumberString == "") {
    return 0 + total;
  }
  if (convert(current) < convert(next)) {
    total += convert(next) - convert(current);
    console.log(total);
    newString = romanNumberString.slice(2);
  }
  return convert(current) + sumRomanDigits(newString);
}
console.log(sumRomanDigits("MXCVVVI"));
