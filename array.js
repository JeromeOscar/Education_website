 // array is a collection of elements of a similar data type.

  // let guestList = ["Gab","Rita","Mika","Sarah", ]; 
  // let guestName =  prompt("What is your name ?")

  // if(guestList.includes(guestName)){
  //   console.log("Welcome to the birthday party" + guestName);
  // }
  // else{
  //   console.log ("where is your invitation card "+ guestName);
  // }
  
  /* let myFreinds =['Bella','Hari','Liv',];
   myFreinds.push('Tamale');//adds element Tamale to the end of array
   myFreinds.pop();//removes element Tamale from the end of the array
  myFreinds.shift();
  myFreinds.unshift('Ella')


 myFreinds.forEach((item) =>{
  console.log(`${item} is my sweet heart! `);
 });
 //myFreinds.forEach(alert);
  
  //  console.log(myFreinds);
   let index =myFreinds.indexOf('Liv');
  //  console.log(index);
  //  console.log(Array.isArray(myFreinds));
  //  for(let i =0;i<myFreinds.length;i++){
  //   console.log(myFreinds[i]);
  //  }
  for(let names of myFreinds){
     // way to loop an array its time saving and fun.
   // An alternative to the traditional for loop 
    
    console.log(names);
  }
  let arr = [1,2,3,4,5];
//  console.log(String(arr)==='1,2,3,4,5');
arr.splice(1,1);
console.log(arr);
let drama =["I'm","studying","JS","now",];
drama.pop()
console.log(drama);

drama.splice(2,0,"dynamic","programming","language");
console.log(drama);
//drama.splice(0,3,"Lets","pretend","to","be","crying");
// let removedElements = drama.splice(0,3)
// console.log(removedElements);
//console.log(drama);
let numbers = [1,2,3,4,5,6,];
console.log(numbers)
 let newNumbers =numbers.slice();//cloning an array
 console.log(newNumbers);

 var colors = ["red","green","blue","yellow","purple","goldrod",]
 var rgb =colors.slice(0,3);
 console.log(rgb);
 let nonRgb = colors.slice(2,6);
 console.log(nonRgb);

 let arra = [1,2,];

let radic =  arra.concat([3,4,])
 console.log(radic);
 let radical = radic.concat([5,6,],[7,8,]);
 console.log(radical);
 const unique =[NaN];
 console.log(unique.indexOf(NaN));//works on equality but NaN doesnot hence -1 not 0
 console.log(unique.includes(NaN));
*/


let freinds =['Bella','Hari','Liv',];
 freinds.push('Tamale');
 console.log(freinds);
freinds.splice(2,0,'Isa','izzy','Isabelle');
console.log(freinds);
freinds.forEach((freind)=>console.log(`I love you ${freind}`));
freinds.map(freinds =>freinds.length);
console.log(freinds);






let numbers = [1,2,3,4,5,6,7,8,];
let results = numbers.reduce((sum,current)=>sum + current);
console.log(results);