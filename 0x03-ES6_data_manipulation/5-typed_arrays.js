const createInt8TypedArray = (length, position, value) => {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buff = new ArrayBuffer(length);
  const arrView = new Uint8Array(buff);
  arrView[position] = value;

  return buff;
};

module.exports = createInt8TypedArray;
