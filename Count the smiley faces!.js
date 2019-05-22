//return the total number of smiling faces in the array
const countSmileys = arr => {
    let count = 0;
    const smilArray = [":)", ";)", ":D", ";D", ":-)", ";-)", ":-D", ";-D", ":~)", ";~)", ":~D", ";~D"];
    for (let i = 0 ; i < smilArray.length ; i++){
      for (let j = 0 ; j < arr.length ; j++){
        if (smilArray[i] === arr[j]){
          count += 1;
        }
      }
    } return count;
  }

console.log(countSmileys([]));
console.log(countSmileys([':D',':~)',';~D',':)']));
console.log(countSmileys([':)',':(',':D',':O',':;']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));