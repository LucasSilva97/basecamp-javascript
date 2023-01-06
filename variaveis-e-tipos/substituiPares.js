const inputArr = [1, 3, 4, 6, 80, 33, 23, 90];
const arrEmpty = [];

function arrModify(arr) {
  const arrModified = arr.map((element) => {
    if (element % 2 == 0 && element != 0) {
      element = 0;
      return element;
    } else {
      return element;
    }
  });

  return arrModified;
}

function arrIsEmpty(arr) {
  if (arr.length == 0) {
    return -1
  } else {
    return arrModify(arr);
  }
}


console.log(arrIsEmpty(arrEmpty));
console.log(arrIsEmpty(inputArr));