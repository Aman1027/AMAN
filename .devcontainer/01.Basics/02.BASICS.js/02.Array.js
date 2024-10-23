const marvel_heros =["thor","Ironman","CaptainAmerica"]
const dc_heros= ["Superman","Flash","Batman"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);// it is used to select dc heros separately.
                  //till array 3 it is marvel heros and in array 4 all 3 dc heros


// const allHeros =marvel_heros.concat(dc_heros) //  .it  gives new array by combing more array.      it combined all heros together
// console.log(allHeros); 


// spread operator is written as ...

// const all_new_heros =[...marvel_heros,...dc_heros] // most people prefer this for combing two arrays together
// console.log(all_new_heros);


const another_array =[1,2,3,[5,4,6,[8,9,10,27]]]
const real_another_array = another_array.flat(Infinity) /// it gives all array in a single together
console.log(real_another_array);

console.log(Array.isArray("Aman"));
console.log(Array.from("Aman")); // it spreadout Aman as 'A','m','a','n;

console.log(Array.from({name:"Aman"})); // interesting it gives blank result

 
let score1 = 1000
let score2 = 2000
let score3 = 3000
console.log(Array.of(score1,score2,score3)); // it gives all score value together






