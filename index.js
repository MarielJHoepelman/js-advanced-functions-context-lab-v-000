/* Your Code Here */
const createEmployeeRecord = employeeData => {
  const [
  firstName,
  familyName,
  title,
  payPerHour,
  timeInEvents = [],
  timeOutEvents = [],
] = employeeData;

  return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents,
    timeOutEvents
  };
}

const createEmployeeRecords = records => {
  return records.map(record => {
    return createEmployeeRecord(record);
  });
}

const createTimeEventObject = (setType, time) => {
  const dateTime = time.split(" ");

  const obj = {
    type: setType,
    hour: parseInt(dateTime[1]),
    date: dateTime[0]
  }
  return obj;
}

function createTimeInEvent(date){
  console.log(this)
  console.log(date)
  // this.timeInEvents.push(createTimeInEvent("TimeIn", date));
  // return this;
}








/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
