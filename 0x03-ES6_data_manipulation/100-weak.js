const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  if (weakMap.get(endpoint) === undefined) {
    weakMap.set(endpoint, 1);
  } else {
    if (weakMap.get(endpoint) >= 5) throw new Error('Endpoint load is high');
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  }
};

module.exports = {
  weakMap,
  queryAPI,
};
