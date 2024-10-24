 /////// objects //////

 // singleton 
 // object .create
 
 

 // object literals
 const mysym = Symbol("key1")



const AsUser  ={ 
      name :"Aman" ,
      "fullName":"Aman Singh",

      [mysym] : "mykey1", // symbol is used in bracket like this[]
      age : 23 ,
      Location : "Hyderabad" ,
      email : "avi102710@gmail.com" ,
      isloggedIn: "false",
      lastLoginDays: ["Monday","Saturday"]
}
// console.log(AsUser.name); // through 2 ways we can get the result but 2nd one is the best
console.log(AsUser["name"]);  // its best way to access value
 
console.log(AsUser["fullName"]);

console.log(AsUser["age"]);
  console.log(AsUser["Location"]);
  console.log(AsUser["email"]);
  console.log(AsUser["isloggedIn"]);
  console.log(AsUser["lastLoginDays"]);
  console.log(AsUser["mysim"]);  // undefined

  AsUser.email = "Aman@copilot.com" // we can replace the value like this old one get replaced through this way 
  console.log(AsUser["email"]);

 // Object.freeze(AsUser)  // .freeze is also worked like constant now we cant change the value of Asuser
    
  AsUser.age ="25" // it didnt get result bcz we freezed the Asuser earlier
  console.log(AsUser);


  AsUser.greeting = function(){
      console.log("Hello As User");

      AsUser.greetingtwo =function(){
console.log('Hello As User,${this.name}');

            
      }
     
       }
       console.log(AsUser.greeting); //function anonymous if we write .greeting without this () 
       console.log(AsUser.greeting()); // now it shows Hello As User

       console.log(AsUser.greetingtwo());
       
       
       
  
  
  
  

  
  
  
  
   

// console.log(AsUser);
      