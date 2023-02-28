let arr = [];
function encoding(data, index = 0) {
  console.log(data.length);
  if (index == data.length) {
    //non molto chiaro per ora perchè non data.lenght-1
    return arr;
  }
  let count = 0; //non è globale
  while (data[index] === data[index + count + 1]) {
    count++;
    console.log(count);
  }
  arr = arr.concat(data[index], count + 1);
  console.log(arr);
  return encoding(data, index + count + 1);
}

//["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "A", "A", "A", "A", "A", "A", "B"]
//["A",12, "B",4, "A",6, "B",1].

console.log(
  encoding([
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "B",
    "B",
    "B",
    "B",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "B",
  ])
);
