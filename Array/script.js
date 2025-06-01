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