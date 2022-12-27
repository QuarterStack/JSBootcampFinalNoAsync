function filterCart(cart, gory) {
  // By setting finalArray to an array this will work. You were trying to push to undefined which won't work.
  const finalArray = [];

  for (let index = 0; index < cart.length; index++) {
    const test = cart[index].category;
    if (test === gory) { finalArray.push(cart[index]); }
  }
  return finalArray;
}

module.exports = { filterCart };
