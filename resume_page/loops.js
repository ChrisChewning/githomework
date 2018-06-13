//#1: PASSES
//create a loop that logs the numbers from 0-99 (ascending)

let firstLoop = 0;
while (firstLoop <= 99) {
  console.log(firstLoop);
  firstLoop++
}


//#2: PASSES
//create a loop that logs the numbers from 99-0 (descending)

let secondLoop = 99;
while (secondLoop >= 0) {
  console.log(secondLoop);
  secondLoop--
}

//#3: ISSUE. When I put it at <=98, it reached 98 and added 2 more so the last number was 100.
//    ISSUE. VM196:1 Uncaught SyntaxError: Identifier 'thirdLoop' has already been declareed at <anonymous>:1:1. How to clear out? Cmd K doesn't

//create a loop that logs the EVEN numbers from 0-98 (ascending)

let thirdLoop = 0;
while (thirdLoop <= 96) {
  console.log(thirdLoop);
  thirdLoop+=2;
}



//#4: Same issue: last number is -2. create a loop that logs the EVEN numbers from 98-0 (descending)

let fourthLoop = 98;
while (fourthLoop >= 0) {
  console.log(fourthLoop);
  fourthLoop-=2;
}

//FOR LOOPS 5-7

//#5 ISSUE: last line is undefined.
//Create a loop that logs the numbers from 49-72 (ascending)

for (let i=49; i <=72; i++) {
  console.log('The number is ' + i);
}

//QUESTION: how to just spit out the number with the new syntax?


//#6 ISSUE: I changed the number from 26 inclusive to 27 this time but now it just went 28..27..undefined.

//create a loop that logs the numbers from 81-26 (descending)

for (let i=81; i>=27; i--) {
  console.log(i);
}

//#8: Same issue: Last number is undefined.
//create a loop that logs the numbers from 3-90 that are multiples of 3 (ascending)

for (let i =3; i <=90; i+=3) {
  console.log(i);
}
