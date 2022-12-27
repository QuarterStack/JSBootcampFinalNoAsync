function twoDArray(arr) {
  const flatArr = arr.flat();
  let numSum = 0;
  for (let index = 0; index < flatArr.length; index++) {
    numSum += flatArr[index];
  }
  return numSum;
}

module.exports = { twoDArray };
