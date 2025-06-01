// NaN
const num = "12345";
const number = Number(num);

console.log(typeof num)
console.log(typeof number)
console.log(number)

const data = Number("fufafa")
console.log(Number.isInteger(data))
console.log(Number.isNaN(data))

// formatNumber

const currency = Number("12000");

console.log(currency.toString(4))
console.log("ID CURRENCY" + " " + currency.toLocaleString("id-ID"))
console.log("US CURRENCY" + " " + currency.toLocaleString("en-US"))

 