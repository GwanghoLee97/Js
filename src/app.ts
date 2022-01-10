//repeat를 활용한 별찍기
// function writeStar(start: number, end: number) {
//   for (let i = start; i <= 5; i++) {
//     console.log('*'.repeat(i));
//   }
//   for (let e = end - 1; e >= start; e--) {
//     console.log('*'.repeat(e));
//   }
// }
// writeStar(1, 5);

// 변수 하나 만들어서 star에 *주입후 별찍기
// function writeStar(start: number, end: number) {
//   let star = '';

//   for (let i = start; i <= end; i++) {
//     star += '*';
//     console.log(star);
//   }

//   for (let j = end; j >= start; j--) {
//     const a = star.substring(start, j);
//     console.log(a);
//   }
// }
// writeStar(1, 5);

//while문으로 별찍기
// function writeStar(start: number, end: number) {
//   let star = '';

//   while (start <= end) {
//     star += '*';
//     start++;
//     console.log(star);
//   }
// }
// writeStar(1, 5);

//match함수를 이용해서 2진수 1숫자세기
// function solution(a: number, b: number) {
//   const avg = a * b;
//   const setavg = avg.toString(2);
//   const i = setavg.match(/1/g).length;

//   console.log(i, `${typeof i}`);
// }
// solution(2, 7);
//result : 3

//for, if로 2진수 1숫자세기
// function solution(a: number, b: number) {
//   const avg = a * b;
//   const setavg = avg.toString(2);
//   const i = setavg.split('');
//   let count = 0;
//   for (let j = 0; j < i.length; j++) {
//     if (i[j] == '1') {
//       count++;
//     }
//   }
//   console.log(count);
//   console.log(i);
// }
// solution(-2, 7);
// //result : 3

//빈 배열 만들어서 약수 구하기
// function getDivisor(targetNumber: number) {
//   const arr = [];
//   for (let i = 1; i <= targetNumber; i++) {
//     if (targetNumber % i == 0) {
//       arr.push(i);
//     }
//   }
//   console.log(arr);
// }

// getDivisor(50);

//잠정 보류..... url들어가서 이해좀해보자
//https://themarketer.tistory.com/73
// function sol(num: number) {
//   const arr = [];
//   for (let i = 1; i <= num; i++) {
//     let isPrimeNumber = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) {
//         isPrimeNumber = false;
//       }
//     }
//     if (isPrimeNumber) {
//       arr.push(i);
//     }
//   }
//   console.log(arr);
// }
// sol(5);

// 1. 숫자로 이루어진 배열이 매개변수인 arr와
//숫자를 *2 해주는 함수를 매개변수로 받는 function 작성(고차함수)
// function solution(arr: any, fn: any) {
//   const a = arr;
//   const b = [];
//   for (let i = 0; i < a.length; i++) {
//     b.push(fn(a[i]));
//   }
//   console.log(b);
// }
// solution([1, 2, 3, 4, 5], (num) => num * 2);
