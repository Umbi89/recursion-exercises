//sembra facile. Best practice?

let i = 0;
let l1;
let l2;

function flattenList(list) {
  if (list.length == 0) {
    //????
    return list;
  }
  if (list.every((element) => Array.isArray(element) == false)) {
    return list;
  }
  if (Array.isArray(list[i])) {
    l1 = list[i].flat();
    console.log(l1);
    list.shift();
    l2 = list.flat();
    console.log(l2);
    return flattenList(l1.concat(l2));
  } else {
    l1 = Array(1).fill(list[i]);
    console.log(l1);
    list.shift();
    l2 = list.flat();
    console.log(l2);
    return flattenList(l1.concat(l2));
  }
}

console.log(flattenList([1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]]));
