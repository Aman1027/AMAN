 // array


 const myArr = [ 0,1,2,3,4,5,]
 console.log(myArr[0]); // for only 1 value but if we dont put any value it prints all value inside the array
 console.log(myArr);

 const myHeros =["HANUMAN","SHAKTIMAN"]
console.log(myHeros);
 
const myArr2 =  new Array(1 ,2,3,4)
console.log(myArr2);

 
/////// Array METHODS:-

myArr.push(6)  // its shows up to 6 like 1.2.3.4.5.6 bcz earlier in array 1 1 to 5 and in array 2 its 6 its gives all array value together
myArr.push(10)
myArr.push(27)
myArr.pop()  // .pop() it is used to remove the last value of array like here we have 27 but after .pop() ,its removed


myArr.unshift(9)  // .unshift is used to make a new value sbse phle sb value ko adjust hona pdta h thats why we dont used much
//myArr.shift()  // it arrange the value by removing the .unshift
console.log(myArr.includes(10));
console.log(myArr.indexOf(10)); // if we write the value within the array given then its counts the position from zero the position starts
console.log(myArr.indexOf(27)); // if the value is outside the array then it always shows -1 value


const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);





// slice ,splice

console.log("A",myArr);

const myn1 =myArr.slice(1,4) // 4-1=3 only 3 values it shows here 0 ,1 ,2
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,4)
console.log("c",myArr);

console.log(myn2);




