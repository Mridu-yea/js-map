let date1 = new Date("October , 17 , 2006 , 01:30:00")
console.log(date1.toLocaleString());//10/17/2006, 1:30:00 AM



//?----------------------------------------.to FUNCTIONS------------------------------------------------------------------//
let fulldate = new Date("2001-01-21T01:11:00")

console.log(fulldate.toDateString())       // Sun Jan 21 2001
console.log(fulldate.toLocaleTimeString());// 1:11:00 AM
console.log(fulldate.toString())          // Sun Jan 21 2001 01:11:00 GMT+0000 (Coordinated Universal Time)


console.log(fulldate.toLocaleDateString()) // 1/21/2001
console.log(fulldate.toTimeString())       // 01:11:00 GMT+0000 (Coordinated Universal Time)
console.log(fulldate.toLocaleString())    // 1/21/2001, 1:11:00 AM

console.log(fulldate.toISOString())       // 2001-01-21T01:11:00.000Z
console.log(fulldate.toJSON())            // 2001-01-21T01:11:00.000Z

//?-------------------------------------.set FUNCTIONS---------------------------------------------------------------------//
const bday = new Date("2004-07-10T06:20:43")
bday.setFullYear(2006)
bday.setMonth(9)
bday.setDate(17)
bday.setHours(1)
bday.setMinutes(30)
bday.setSeconds(0)
bday.setMilliseconds(0)

//?-----------------------------------------.get FUNCTIONS------------------------------------------------------------------//
console.table({
    year  : bday.getFullYear(),
    month : bday.getMonth(),
    date  : bday.getDate(),
    day   : bday.getDay(),
    time  : bday.toLocaleTimeString(),
    hours : bday.getHours(),
    minute: bday.getMinutes(),
    second: bday.getSeconds(),
    mili  : bday.getMilliseconds(),
})

/*------------------------------------------RESULTSSSSS---------------------------------------------------------------
┌─────────┬──────────────┐
│ (index) │ Values       │
├─────────┼──────────────┤
│ year    │ 2006         │
│ month   │ 9            │
│ date    │ 17           │
│ day     │ 2            │
│ time    │ '1:30:00 AM' │
│ hours   │ 1            │
│ minute  │ 30           │
│ second  │ 0            │
│ mili    │ 0            │
└─────────┴──────────────┘*/




