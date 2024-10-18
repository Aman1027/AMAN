// Memory 2 types :- Stack and Heap
// Stack memory used with Primitive (we get a copy)
// Heap memory used with NOn-Primitive ( we get a original value or reference)


// stack
 let myTeachername = "Ankit Priyadarshi"
 let anothername = myTeachername
 anothername = "BOSS"
 console.log(myTeachername);
 console.log(anothername);

// heap
 let userOne = {
      email: "aman1027@gmail.com",
      upi: "70047@ybl"
 }
 console.log(userOne);
 let userTwo = userOne
 userTwo.email = "Avi@1027@gmail.com"
 console.log(userOne .email);
 
 console.log(userTwo.email);
 
 
 
 