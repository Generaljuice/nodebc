let message = ' 3.14 it\'s a great number but 42 it\'s the answer to life.'
let pi = message.slice(1, 5);

console.log(pi)

let number = parseInt(pi);

console.log(number);

let answerToLife = message.slice(30, 32);

console.log(answerToLife);

let float = parseFloat(answerToLife)

console.log(float)

let result  = float  + number

console.log(result)

console.log(pi, answerToLife)


let final = pi.toString()

console.log(final)