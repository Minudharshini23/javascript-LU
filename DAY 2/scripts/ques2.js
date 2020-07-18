//other few methods in arrays and strings
/*
1.splice
2.substring
3.replace
4.replaceAll
*/


let cartoon=["nobita","doremon","pikachu","phineas"];
cartoon.splice(2,0,"ferb","heman");
console.log(cartoon);
cartoon.splice(3,3,"lingu");
console.log(cartoon);

let text="betty bought a butter but the butter was so bitter"
let text2=text.substring(7,text.length);
console.log(text2);

let country="nepal is our neighbouring country";
let changed=country.replace("nepal","china");
console.log(changed);


