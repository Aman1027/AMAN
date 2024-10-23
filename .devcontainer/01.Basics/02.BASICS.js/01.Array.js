 // array


 const myArr = [ 0,1,2,3,4,5,]
 console.log(myArr[0]); // for only 1 value but if we dont put any value it prints all value inside the array
 console.log(myArr);

 const myHeros =["HANUMAN","SHAKTIMAN"]
console.log(myHeros);
 
const myArr2 =  new Array(1 ,2,3,4)
console.log(myArr2);

 
/////// Array METHODS:-

myArr.push(6)  //  whatever we write the value in .push() it gives the value with all previous and this value together .previous array 1 ,2,3,4,5 and its 6 print together
myArr.push(10)
console.log(myArr);


myArr.push(27) // if value outside the array value then it gives -1 as a result.
myArr.pop()  // .pop() it is used to remove the last value of array like here we have 27 but after .pop() ,its removed


myArr.unshift(9)  // .unshift is used to make a new value sbse phle sb value ko adjust hona pdta h thats why we dont used much
//myArr.shift()  // we dont gives value in .shift ( it arrange the value by removing the .unshift value




    //// QUESTIONABLE ARRAY IT GIVES TRUE /FALSE HERE .INCLUDES
console.log(myArr.includes(10)); // .includes tell that the no. is in the array or not if it is then TRUE , if its not then FALSE
console.log(myArr.includes(7));
console.log(myArr.includes(5));


console.log(myArr.indexOf(10)); // .index :- position teller (if we write the value within the array given then its counts the position from zero to that  number position .here 10 is at 8th position
console.log(myArr.indexOf(27)); // if the value is outside the array then it always shows -1 value


const newArr = myArr.join() // .join add all array into a sting
console.log(myArr);  // it also gives all array value
console.log(newArr); // it gives all array value
console.log(typeof newArr);





// slice ,splice

console.log("A ",myArr);

const myn1 =myArr.slice(1,4) // 4-1=3 only 3 values it shows here 0 ,1 ,2
console.log(myn1);
console.log("B",myArr);


const myn2 = myArr.splice(1,4)  // ye array value ko baat deta h .splice value ek saath dikhega jo .splice me nhi rheg wo ek saath .splice(1,5) then it only prints like 0,1,2,3,4
console.log("c",myArr);
console.log(myn2);




