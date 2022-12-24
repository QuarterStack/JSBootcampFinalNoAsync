// make sure to check readme for information about taxes
function addTotal(cart,state) {
    let thisNum = 0.00;
    let finalNum;
      for(let index = 0; index < cart.length; index++){
      thisNum += cart[index].price; 
      }
      if(state === "NY"){
        thisNum +=  thisNum *0.09;
      }
      else if (state === "CT"){
          thisNum +=  thisNum *0.12;
      }
      else if (state === "NJ"){
          thisNum +=  thisNum *0.07;
      }
      finalNum = Number(thisNum.toFixed(2));
    return finalNum;

}

module.exports = { addTotal };
