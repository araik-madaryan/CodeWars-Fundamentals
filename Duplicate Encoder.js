const duplicateEncode = word => {
    let str = ""; let letter = word.toLowerCase();
    for (let i = 0 ; i < letter.length ; i++){
      if (letter.indexOf(letter[i]) === letter.lastIndexOf(letter[i])){
        str += "(";
      } else {
        str += ")";
      }
    } return str;
  }
  
  console.log(duplicateEncode("din"));
  console.log(duplicateEncode("recede"));
  console.log(duplicateEncode("Success"));
  console.log(duplicateEncode("(( @"));