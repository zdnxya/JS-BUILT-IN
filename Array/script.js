const arr = ["bob", "admin", "0x"];

// forEach cocok untuk array beda dengan for in atau for of biasanya untuk object
// normal function
arr.forEach(function(value, index){
    console.info(`${value} : ${index + 1}`)
})
console.info("============================")
arr.forEach((value, index) => console.info(`${value} : ${index + 1}`))

// single arrow parameter
console.info("============Arrow Function Single Parameter===============")
arr.forEach(value => console.info(`${value}`))

// array fifo first in first out

console.log("=========FIFO=======");
const template = [];
template.push("bob")
template.push("0x")
template.push("ZeroDay")

console.info(template.shift())
console.info(template.shift())
console.info(template.shift())

// array LIFO LAST IN FIRST OUT it's like a card
console.log("=========LIFO=======");

const stack = [];

stack.push("Jack");
stack.push("Queen");
stack.push("King");
stack.push("As");
stack.push("Poker");
stack.push("Joker");

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


// array search

const listNum = [1, 5 ,4, 3, 2, 1, 0, 10, 9]

console.info(listNum.find(num => num > 5)); // mencari angka yg lebih besar dari 5 selanjut nya
console.info(listNum.findIndex(num => num > 1)); // mencari index ke brp yg lebih besar dari 5    
console.info(listNum.includes(6)) // mencari sesuai parameter ada atau tidak
console.info(listNum.indexOf(5)+1)

// array filter

const anothorNumber = [1,2,4,5,6,7,8,9,10,11,12];

console.info(anothorNumber.filter(value => value % 2 == 1) + " " + "Odd");
console.info(anothorNumber.filter(value => value % 2 == 0) + " " + "Even");

// array transform

const vulnName = ["ssrf", "idor", "buffer overflow"]

console.info(vulnName.map(list => list.toUpperCase()))

const toStr = vulnName.reduce((result, list) => result + " " + list)

console.info(toStr)




