const toCamelCase = str => {
    let newStr = str.split("");
    for (let i = 0 ; i < newStr.length ; i++){
      if (newStr[i] === "-" || newStr[i] === "_"){
        newStr[i+1] = newStr[i+1].toUpperCase();
        newStr[i] = "";
      }
    } return newStr.join("");
}


console.log((toCamelCase('')));
console.log((toCamelCase("the_stealth_warrior")));
console.log((toCamelCase("The-Stealth-Warrior")));
console.log((toCamelCase("A-B-C")));