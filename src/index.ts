export const greeting = "Hello, World!";

/**
 * 테스트 함수.
 * @param msg 반환할 메시지.
 */
export function returnMessage(msg: string) {
    return msg;
}

/**
 * Resolve되었을 때 받은 메시지를 반환하는 Promise를 반환.
 * @param msg 반환할 메시지
 */
export function returnMessageAsync(msg: string) {
    return new Promise((resolve) => {
        resolve(msg);
    });
}

/**
 * 추측한 숫자가 7과 같은지 다른지 판단하고 같으면 추측한 숫자를 반환하고 아니면 reject하는 Promise를 반환.
 * @param guess 추측하는 숫자.
 */
export function notSameThenReject(guess: number) {
    return new Promise((resolve, reject) => {
        if (guess !== 7) {
            reject("Incorrect!");
        } else {
            resolve(guess);
        }
    });
}
