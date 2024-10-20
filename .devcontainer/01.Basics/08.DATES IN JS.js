// DATES

 let myDate = new Date()
 console.log(myDate.toString());
 console.log(myDate.toDateString()); // itd good but only for dates month year
 console.log(myDate.toISOString());
 console.log(myDate.toJSON());
  console.log(myDate.toLocaleDateString());
 console.log(myDate.toLocaleString());  // its best for both date and time
 console.log(myDate.getMonth());

 console.log(typeof myDate); // object


 let myCreatedDate = new Date(2024 , 9 ,20)
 console.log(myCreatedDate.toDateString()); // for dates only

 let myCreatedDate2 = new Date(2024,9,20,19,16)
 console.log(myCreatedDate2.toLocaleString()); /// its the best for date and time together

 let myCreatedDate3 = new Date("2024-10-20")
 console.log(myCreatedDate3.toLocaleString());

 let myCreatedDate4 = new Date ("10-20-2024")
 console.log(myCreatedDate4.toLocaleString());
 
 
 

 
 
 
 
 
 
 