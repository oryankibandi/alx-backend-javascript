export default function appendToEachArrayValue(array, appendString) {
  let arr = [];
  for (let item of array) {
    arr.push(appendString + item);
  }

  return arr;
}
