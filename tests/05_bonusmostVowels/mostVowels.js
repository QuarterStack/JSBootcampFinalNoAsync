/* eslint-disable no-param-reassign */

// this is a complicated problem. Don't be discouraged if it doesn't make a lot of sense.
function mostVowels(str) {
  // set vowels to check against
  const vowels = 'AEIOUaeiou';
  const objMap = {};
  // split string into array of words
  const strArray = str.split(' ');
  // loop through array of words
  for (let i = 0; i < strArray.length; i++) {
    const word = strArray[i];
    // loop through individual word
    for (let j = 0; j < word.length; j++) {
      const letter = word[j];
      if (vowels.includes(letter)) {
        // if letter is included in vowels string and word key does not exist in objMap add it with key of 1 for first vowel.
        if (!objMap[word]) {
          objMap[word] = 1;
        } else {
          // if word key does exist then increment
          objMap[word]++;
        }
      }
    }
  }

  let mostVowelsWord = strArray[0];
  // loop through words and find the word with most vowel
  const keys = Object.keys(objMap);
  for (let j = 0; j < keys.length; j++) {
    if (objMap[mostVowelsWord] < objMap[keys[j]]) {
      mostVowelsWord = keys[j];
    }
  }
  return mostVowelsWord.toLowerCase();
}

module.exports = { mostVowels };
