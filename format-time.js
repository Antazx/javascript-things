var noTime = "There are no time here";

var timeStartHHMM = "08:35";
var timeStartHHMMSS = "08:35:45";

var timeEndHHMM = "17:23";
var timeEndHHMMSS = "17:23:45";

var timeStringHHMM = `This is the delivery time ${timeStartHHMM} to ${timeEndHHMM}`;
var timeStringHHMMSS = `This is the delivery time ${timeStartHHMMSS} to ${timeEndHHMMSS}`;

console.log(getSAPTime(timeStringHHMM));
console.log(getSAPTime(timeStringHHMMSS));

function getSAPTime(extractedValue, isSapFormat = true) {
    var extractedTimeList = formatDeliveryTime(extractedValue);
    if(extractedTimeList.length < 1) return null;
    var lowestTime = extractedTimeList.sort(getLowestTime)[0];
    return isSapFormat ? toSAPTime(lowestTime): lowestTime;
}

function formatDeliveryTime(fieldValue) {
    var getTimes = new RegExp(/\d\d\:\d\d(:\d\d)?/g);
    var possibleTimes = fieldValue.match(getTimes);
    return possibleTimes ? possibleTimes : [];
}

function getLowestTime(valueA, valueB) {
    var timeA = new Date("May 21, 2021 " + valueA);
    var timeB = new Date("May 21, 2021 " + valueB);

    if (timeA < timeB) return -1;
    if (timeA > timeB) return 1;
    return 0;
}

function toSAPTime(time) {
    if (!time) return "no time found";
    var cleanTime = time.replace(/\D/g, "");
    var sapTime = cleanTime.padEnd(6, "0");
    return sapTime;
}
