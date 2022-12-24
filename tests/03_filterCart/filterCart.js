function filterCart(cart, gory) {
    let finalArray;
    for (let index = 0; index < cart.length;index++){
      let test = cart[index].category;
      if(test === gory){ finalArray.push(cart[index]);}
      
    }
    return finalArray;
}

module.exports = { filterCart };
