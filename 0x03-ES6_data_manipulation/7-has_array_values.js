const hasValuesFromArray = (set, arr) => {
  let exists = true;
  arr.forEach((elem) => {
    if (!set.has(elem)) exists = false;
  });

  return exists;
};

module.exports = hasValuesFromArray;
