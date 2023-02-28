//Best practice?

let changeArr = [];
let remainingArr;
let i = 0;

function decoding(compressedList) {
  if (compressedList.every((element) => typeof element === "string")) {
    return compressedList;
  } else {
    remainingArr = compressedList.splice(i + 2);
    console.log(remainingArr);
    changeArr = changeArr.concat(
      Array(compressedList[i + 1]).fill(compressedList[i])
    );
    console.log(changeArr);
    i = changeArr.length;
    console.log(i);
    console.log(changeArr.concat(remainingArr));
    return decoding(changeArr.concat(remainingArr));
  }
}

//["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "A", "A", "A", "A", "A", "A", "B"]
//["A",12, "B",4, "A",6, "B",1].

console.log(decoding(["A", 12, "B", 4, "A", 6, "B", 1]));
