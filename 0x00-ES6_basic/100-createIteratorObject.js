export default function createIteratorObject(report) {
  let arr = [];

  for (const [key, value] of Object.entries(report.allEmployees)) {
    arr.push(...value);
  }

  return arr;
}
