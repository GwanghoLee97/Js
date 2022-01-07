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
function solution(a: number, b: number) {
  const avg = a * b;
  const setavg = avg.toString(2);
  const i = setavg.split('');
  let count = 0;
  for (let j = 0; j < i.length; j++) {
    if (i[j] == '1') {
      count++;
    }
  }
  console.log(count);
  console.log(i);
}
solution(-2, 7);
//result : 3
