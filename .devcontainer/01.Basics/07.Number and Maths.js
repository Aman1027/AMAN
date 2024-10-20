const score = 700
console.log(score);


const balance = new Number(1027)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);// .length count total no. 1027= 4

console.log(balance.toFixed(1));
console.log(balance.toFixed(3)); // .toFixed give us the value in the point .toFixed(2),.toFixed(3)


const otherNumber = 123.8988234
console.log(otherNumber.toPrecision(2));

console.log(otherNumber.toPrecision(3)); // .toPrecision() it gives the value in rounding

console.log(otherNumber.toPrecision(4));

const hundreds =10000000000
console.log(hundreds.toLocaleString()); //.toLocalString() it provides our no. with commas but in million billion standard

console.log(hundreds.toLocaleString('en-IN')); // in indian style 



////+++++++++++++++++++++  MATHS  ++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  // .abs its called absoulte value it converts only negative value into positive value -3 into 3, 4 into 4 only negative change
console.log(Math.abs(4));

console.log(Math.round(5.5));// .round() it rounds the value 
console.log(Math.round(5.4));
console.log(Math.ceil(5.2)); //.ceil it is used to convert rounding into the next value like 4.1 into 5 .5.2 into 6 ,6.8 into 7
console.log(Math.ceil(6.8));

console.log(Math.floor(5.6)); // its removes the decimal fig and same no. provide
console.log(Math.floor(5.88));

console.log(Math.min(9,7,4,2)); // .min() gives us the man values between the array
console.log(Math.max(22,44,66,88)); // .max()gives us the max value

console.log(Math.random()); // .random() it provides the value between 0 and 1 e.g 0.343244,0.765454  sometimes it takes the value of 0 and 1
console.log((Math.random()*10)+1);  // .random()*10 +1 it is used to gives our value more than 1 bcz sometimes random value comes between 0
            // wrap the equations so that we cant confuse which calculation works first
            // wrapping is done by ()
            console.log(Math.floor(Math.random()*10)+1); // math.floor removes the rounding


console.log(Math.random()*1000);

const min = 10
const max = 20


console.log(Math.floor( Math.random() * (max - min +1 )) + min); // we get the value between 10 and 20
console.log(Math.floor( Math.random() * (max - min +1 )) + max); // we get the value more than 20














