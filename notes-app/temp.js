// UNIX Epoch - January 1st 1970 00:00:00
// 0 - represents the UNIX Epoch exactly - 1 second forward in time is 1000
const dateOne = new Date('January 21 2016 22:01:04')
const dateTwo = new Date('February 2 2006 12:05:04')
const dateOneTimestamp = dateOne.getTime()
const dateTwoTimestamp = dateTwo.getTime()

if (dateOneTimestamp < dateTwoTimestamp){
    console.log(dateOne.toString())
} else if (dateTwoTimestamp < dateOneTimestamp){
    console.log(dateTwo.toString())
}