//Loop in Javascript

// if (condition) {
//   console.log("ei khane cholbe");
// }
// while loop;
// while(condition){
//     console.log("This line will be executed");
// }

// Example1
// const certificateGiven = 1;

// while (certificateGiven < 11) {
//   console.log(certificateGiven, "Certificate dibo");
//   certificateGiven = certificateGiven + 1;
// }

// Example_2 odd number print

// let num = 1;

// while (num <= 100) {
//   console.log(num);
//   num = num + 2;
//   //   num += 1;
//   //   num++;
// }

// Example_2 even number print

// let num = 0;

// while (num <= 100) {
//   console.log(num);
//   num = num + 2;
//   //   num += 1;
//   //   num++;
// }

// let startPoint = 0;
// let sum = 0;
// while (startPoint <= 10) {
//   console.log("code running", startPoint);
//   sum = sum + startPoint;
//   console.log(sum);
//   startPoint = startPoint + 1;
// }
// console.log("This is result of sum", sum);

// let myStores = [14, 17, 15, 17, 69, 75, 98,100,17,15];

// console.log(myStores.length);
// console.log(myStores[3]);

// if (condition) {
//   // run korbe;
// }

// loop
// let startPoint = 0;
// while (condition) {
//   // run korbe;
//   // startPoint++;
//   // startPoint=startPoint+1;
//   // startPoint += 1;
// }

// let startPoint = 1;
// while (startPoint <= 10) {
//   console.log(startPoint);
//   startPoint = startPoint + 1;
// }

// for (
//   let startPointForLOOP = 1;
//   startPointForLOOP <= 10;
//   startPointForLOOP = startPointForLOOP + 1
// ) {
//   console.log(startPointForLOOP);
// }

// let startPoint = 1;
// while (startPoint <= 4) {
//   console.log(startPoint);
//   startPoint = startPoint + 1;
// }

// for (let start = 1; start <= 4; start = start + 1) {
//   console.log(start);
// }

let myFriendAges = [
  14, 17, 22, 23, 26, 78, 45, 47, 89, 45, 78, 75, 56, 78, 547, 5647
];

// console.log(myFriendAges);

for (let iteration = 2; iteration < myFriendAges.length * 2; iteration + 2) {
  console.log(myFriendAges[iteration]);
}
