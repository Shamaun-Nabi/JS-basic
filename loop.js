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

let startPoint = 0;
let sum = 0;
while (startPoint <= 10) {
  console.log("code running", startPoint);
  sum = sum + startPoint;
  console.log(sum);
  startPoint = startPoint + 1;
}
console.log("This is result of sum", sum);
