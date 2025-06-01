// (year, month, day)

// default 

const today = new Date();
console.info(today)

const customDate = new Date(2020, 6, 27);
console.info(customDate)

// epoch time

console.info(Date.now())

// parsing date (YYYY(YEAR)-MM(MONTH)-DD-T-HH(DATE-PEMISAH-HOURS)-mm(MINUTES)-ss(SECOND)-sss(mili seconds)-Z)

const parsingDate = new Date("2006-06-27T10:20:20.123+07:00");
console.log(parsingDate);

const formatParsing = new Date(parsingDate);
console.info(formatParsing)