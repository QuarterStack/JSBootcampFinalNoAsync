// make sure to check readme for information about taxes
// Nice job solving. See below how to solve using reduce
function addTotal(cart, state) {
  // let thisNum = 0.00;

  // for (let index = 0; index < cart.length; index++) {
  //   thisNum += cart[index].price;
  // }
  let thisNum = cart.reduce((accum, iter) => accum + iter.price, 0);

  if (state === 'NY') {
    thisNum += thisNum * 0.09;
  } else if (state === 'CT') {
    thisNum += thisNum * 0.12;
  } else if (state === 'NJ') {
    thisNum += thisNum * 0.07;
  }
  const finalNum = Number(thisNum.toFixed(2));
  console.log();
  return finalNum;
}

module.exports = { addTotal };
