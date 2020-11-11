// UC 2 Switch case
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HOUR = 20;

// UC3
function getWorkingHours(empCheck) {
    switch(empCheck) {
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
        case IS_PART_TIME:
            return PART_TIME_HRS;
        default:
            return 0;
    }
}

// UC5
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
// array of numbers
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

while(totalEmpHrs <= MAX_HOURS && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs))
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 - total days: "+ totalWorkingDays + " Total hrs: "+ totalEmpHrs + " Emp Wage: "+ empWage);

console.log(empDailyWageMap);
// 7A
// arrays Helper function
let totalEmpWage = 0;

function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("total days: "+ totalWorkingDays + " total hours: "+ totalEmpHrs + " Emp Wage: "+ totalEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC-7A -- Emp wagee with reduce: "+ empDailyWageArr.reduce(totalWages, 0)); // totalWage is initialized to 0. 
                        //then dailyWage is added to totalWage for each forEach. i.e. totalWage = totalWage + dailyWage  

// // 7B
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
// array of strings
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC-7B -- Daily wage Map");
console.log(mapDayWithWageArr);

// UC 7C
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");   // returns true or false. 
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);    // if true then added to new array
console.log("UC-7C -- Daily Wage Filter when FullTime wage is earned");
console.log(fullDayWageArr);

// 7D
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC-7D -- First time Fulltime wage was earned on day: "+ mapDayWithWageArr.find(findFullTimeWage));

// 7E
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC-7E -- Check all elements have Full Time Wage: "+ fullDayWageArr.every(isAllFullTimeWage));

// 7F
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC-7F -- Check if any part time is present: "+ mapDayWithWageArr.some(isAnyPartTimeWage));

// 7G
function totalDaysWorked(numOfDays, dailyWage) {
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC-7G -- Number of days Emp Worked: "+ empDailyWageArr.reduce(totalDaysWorked, 0));


