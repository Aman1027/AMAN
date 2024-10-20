//const name ="Aman Singh"
//const repoCount = 27
 // console.log(name + repoCount + " Value"); its a outdated style



 const name ="Aman Singh"
 const repoCount = 27

console.log('My name is ${name} and my repo count is ${repoCount} ');


const gameName = new String ('Aman-Singh-Rajput')
console.log(gameName [0]);    // it prints only 1st letter of Aman A ,[1]m ,[2]a,[3]n .
console.log(gameName.__proto__); // (.dot __ two underscore proto__two underscore)

console.log(gameName.length); // .length :- it counts total no. of words like Aman has 4.
console.log(gameName.toUpperCase()); // .toUpperCase()  ;-it writes same value here Aman
console.log(gameName.charAt(3)); // output will be n :- Aman 0123 (no. to alphabet)
console.log(gameName.indexOf('m'));// m=1 (alphabet to no.)



const newString = gameName.substring(0,4)
//    console.log(newString);

const anotherString = gameName.slice(-4,4)
//    console.log(anotherString); //negative value only in .slice


const newStringOne ="   Aman  "
console.log(newStringOne);
console.log(newStringOne.trim());// .trim() is used to remove unwanted space from the value




const url ="http://aman.com/aman%27singh"
console.log( url.replace ( 27,'10')) //.replace is used to replace some words with other words ,1st word which u want to replace and then new words


console.log(url.includes('avi')) // .includes help us to to tell the word is in our value or not like avi is not in the value so it will show false ,if i write aman then it will show me true.




console.log(gameName.split('-')); // .split() help us to separate the value we need separator in .split()









