// This time no story, no theory. The examples below show you how to write function accum.

const accum = s => s.split("").map((i, pos) => i.toUpperCase() + i.repeat(pos).toLowerCase()).join("-");

console.log(accum("NyffsGeyylB"));
console.log(accum("MjtkuBovqrU"));
console.log(accum("EvidjUnokmM"));
console.log(accum("HbideVbxncC"));