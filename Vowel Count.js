/* Return the number (count) of vowels in the given string.
We will consider a, e, i, o, and u as vowels for this Kata.
The input string will only consist of lower case letters and/or spaces. */

const getCount = str => {
    let vowelsCount = 0;
    for (let i = 0 ; i < str.length ; i++){
      if (str[i] === "a") {
      vowelsCount += 1;
      } else if (str[i] === "e"){
        vowelsCount += 1;
      } else if (str[i] === "i"){
        vowelsCount += 1;
      } else if (str[i] === "o"){
        vowelsCount += 1;
      } else if (str[i] === "u") {
        vowelsCount += 1;
      }
    }
    return vowelsCount;
  }

  console.log((getCount("abracadabra")));