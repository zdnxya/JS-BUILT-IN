// object freeze

let me = {
    name : "half",
    lastName : "head"
}

Object.freeze(me)

me.name = "zero";
delete me.lastName;

console.info(me)

// object assign

let data1 = {
    name : "zero"
}

let data2 = {
    name : "z",
    age : 99
}

Object.assign(data2, data1)

console.info(data1)
console.info(data2)

// Object Property Name & Value
let person = {
    name : "zero",
    lastName : "day"
}

console.info(Object.values(person))
console.info(Object.getOwnPropertyNames(person))


// looping object 
let person2 = {
    name : "jamal",
    age : 20
}

for (let i in person2) { // for in cocok untuk obj
    console.info(`${i} : ${person2[i]}`)
}


// function as object / class

function objFunc(name, age){
    this.name = name;
    this.age = age;
    this.sayHello = () => {
        console.log(`Hello ${this.name}\nAge : ${this.age}`)
    }
}

let newFunc = new objFunc("M.R Bright Side", 20);
newFunc.sayHello()