function removeFromArray(array, ...args) {
  return array.filter(item => !args.includes(item));
}

module.exports = removeFromArray;
