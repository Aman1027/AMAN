 // two types Primitive and non primitive

 // Primitive
 // 7 types : string , number , Boolean , null, undefined , Symbol ,Bigint

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail ;

 const id = Symbol('123')
 const anotherId = Symbol('123')

 //   const bigNumber = 12345678967543n  // Bigint is uded as (n) it is used for big no.
 // console.log(bigNumber);
 
 console.log( id === anotherId);
 



 // Reference (Non-Primitive)
 // Array , Objects , Functions

 // Array example :- Array is written in [BigBracket]
 const Heroes = ["Shaktiman" ,"Junior G" , " Haatim"];
 console.log(Heroes); 

 // Objects example :- It is written in curly bracket {}.Value between the curly bracket called objects.

 let myObj = {
name: "Aman",
   age : 23 ,
 }
 console.log(myObj);

 //Functions is treated as a variable :- It is written as:- function(small bracket){curly bracket} (){}
 
const myFunction = function (){
      console.log("Hello World");
      
}
console.log(typeof bigNumber); //Bigint
console.log(typeof id); // symbol
console.log(typeof anotherId); //   symbol       
console.log(typeof myObj); // object      
console.log(typeof Heroes); // object
console.log(typeof myFunction); //function also called object function in type of
console.log(typeof outsideTemp); // object


// non primitive type always shows type of Object ,function type of is called object function

 


 