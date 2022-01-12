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

import { isRegExp } from 'util';

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

//---------------------------------------------------------------------------------------------------------------

// 1. 숫자로 이루어진 배열이 매개변수인 arr와
//숫자를 *2 해주는 함수를 매개변수로 받는 function 작성(고차함수)
//고차함수 / https://velog.io/@j901207/higher-orderFunc
// function solution(arr: any, fn: any) {
//   const a = arr;
//   const b = [];
//   for (let i = 0; i < a.length; i++) {
//     b.push(fn(a[i]));
//   }
//   console.log(b);
// }
// solution([1, 2, 3, 4, 5], (num) => num * 2);

//---------------------------------------------------------------------------------------------------------------

// 1. 숫자로 이루어진 arr, 그리고 함수 fn  총 2개의 매개변수를 받는 함수 solution을 작성

// 1-1. arr의 요소 범위는 -1,0000,000 ~ 1,000,000
//      arr의 사이즈는 0 ~ 1,000
// 1-2. 두번째 매개변수 fn은 optional
//      fn은 숫자를 매개변수로 받아 *3을 해주는 함수

// 2. 매개변수로 전달받은 숫자 배열(arr)의 요소들을 두번째 매개변수 fn을 적용시켜
//    return 하는 함수 solution을 작성

// * 추가 요구조건
// 1. fn을 적용한 값이 음수일경우 절댓값으로 반환 해야함
// 2. fn === undefined 일 경우 매개변수로 받은 arr의 원본 배열을 return 해주면 됨
// 3. map 사용 금지

// function solution(num: number[], fn: any) {
//   if (fn === undefined) {
//     return num;
//   }

//   const a = [];
//   for (let i = 0; i < num.length; i++) {
//     a.push(Math.abs(fn(num[i])));
//   }
//   console.log(a);
// }

// solution([-500, 500], (mul: number) => mul * 3);

//---------------------------------------------------------------------------------------------------------------

//1. start, end, calc를 매개변수로 받는 함수 solution 작성
//    1-1. start와 end는  -10 ~ 100 사이의 임의의 수
//    1-2. calc는 number 타입인 num을 인자로 받고, num이 홀수면 +1, 짝수면 x2 값을 return 해주는 함수
// 2. solution은 start부터 end까지 숫자의 합을 구하는 함수
//    단, 세번째 매개변수 calc는 optional함
//    calc 함수가 있으면 start ~ end 숫자의 합을 구할때 각 요소들에 calc함수를 적용시켜야함
//    (없으면 그냥 합계만 구하기)

function solution(start: number, end: number, calc?: (num: number) => number) {
  let a = 0;
  for (let i = start; i <= end; i++) {
    if (calc !== undefined) {
      a = a + calc(i);
    } else {
      a = a + i;
    }
  }
  console.log(a);
}
function calc(num: number) {
  if (num % 2 === 0) {
    return num * 2;
  } else {
    return num + 1;
  }
}
solution(1, 5, calc);
