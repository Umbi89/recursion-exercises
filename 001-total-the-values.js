//no argomenti: ok
//legge un valore dall'utente: un valore che fa parte di un array? o di volta in volta viene inserito un valore?

function recursiveSum(values) {
  if (values[0] === "") {
    return 0;
  }
  if (values.length === 1) {
    return values[0];
  } else {
    return values[0] + recursiveSum(values.splice(1, values.length));
  }
}
console.log(recursiveSum([1, 2, 3, 4, 5]));
