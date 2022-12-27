// Nice job getting tests to pass!! Your soltion works and is a good way to think about it.
// You can clean up all the if statements a little by using .includes. See example below.

// function removeVowels(string) {
//   const stringLen = string.length;
//   let finalString = '';
//   for (let index = 0; index < stringLen; index++) {
//     if (string[index].toLowerCase() === 'a' || string[index].toLowerCase() === 'e' || string[index].toLowerCase() === 'i' || string[index].toLowerCase() === 'o'
//          || string[index] === 'u') {
//       finalString += '';
//     } else {
//       finalString += string[index];
//     }
//   }
//   return finalString;
// }

function removeVowels(str) {
  const vowels = 'aeiouAEIOU';
  let finalStr = '';
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (!vowels.includes(letter)) {
      finalStr += letter;
    }
  }
  return finalStr;
}

module.exports = { removeVowels };
