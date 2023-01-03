const cleanSet = (set, startString) => {
  const len = startString.length;
  if (len <= 0) {
    return '';
  }
  const strs = [];

  for (const str of set.values()) {
    if (str.startsWith(startString)) {
      strs.push(str.slice(len));
    }
  }

  if (strs.length > 0) {
    const finStr = strs.join('-');
    return finStr;
  }

  return '';
};

module.exports = cleanSet;
