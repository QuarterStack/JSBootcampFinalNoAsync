function removeVowels(string) {
    let stringLen = string.length;
    let finalString = "";
    for (let index = 0; index < stringLen; index++){
      if (string[index].toLowerCase() === 'a' ||string[index].toLowerCase()=== 'e' ||string[index].toLowerCase()=== 'i'  || string[index].toLowerCase()=== 'o' ||
         string[index]=== 'u'){
        finalString += "";
      }
        else {
         finalString += string[index];
       
        }
            
         }
    return finalString;
}

module.exports = { removeVowels };
