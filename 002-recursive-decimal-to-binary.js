//mi eseguiva la funzione 2 volte
//E? la best practice
//Chiarezza su utilizzo di toString() nella ricorsione

//Programma principale?

function calculateBinary(integer) {
  if (integer < 0) {
    return "The number is negative";
  }
  if (integer == 0) {
    return JSON.stringify(0);
  }
  if (integer == 1) {
    return JSON.stringify(1);
  } else {
    let digit = integer % 2;
    console.log(digit);
    return calculateBinary(Math.floor(integer / 2))
      .toString()
      .concat(digit.toString());
  }
}

console.log(calculateBinary(174));
console.log(typeof calculateBinary(174));
