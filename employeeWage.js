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

const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

// UC 10 Object Creation
let empDailyHrsAndWageArr = new Array();
while(totalEmpHrs <= MAX_HOURS && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push(             // defined objects which holds dayNum, dayHrs, dayWage and toString() function and pushed it into the array
        {
            dayNum: totalWorkingDays,
            dailyHours: empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString() {
                return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours + ' And Wage Earned = ' + this.dailyWage
            },
        }
    );
}

console.log("UC 10: Daily Worked Hours: "+ empDailyHrsAndWageArr);      // calls toString() method

// UC 11 

let totalWages = empDailyHrsAndWageArr
                    .filter(element => element.dailyWage > 0)
                    .reduce((totalWage , element) => totalWage += element.dailyWage, 0);
let totalHours = empDailyHrsAndWageArr
                    .filter(element => element.dailyHours > 0)
                    .reduce((totalHour, element) => totalHour += element.dailyHours, 0);

console.log("\nUC11A -- Total Hours: "+ totalHours + " Total Wage: "+ totalWages);

console.log("\nUC11B - Logging full time work days: ");
empDailyHrsAndWageArr.filter(element => element.dailyHours == 8)
                        .forEach(element => process.stdout.write(element.toString()));

let partWorkDaysArr = empDailyHrsAndWageArr.filter(element => element.dailyHours == 4)
                        .map(element => element.toString());    // here toString() object is converted to array 
console.log("\n\nUC11C - Logging part time work days: " + partWorkDaysArr);       // string array

let nonWorkingDaysArr = empDailyHrsAndWageArr.filter(element => element.dailyHours == 0)
                        .map(element => element.dayNum);

console.log("\nUC11D - Logging zero working days: " + nonWorkingDaysArr); 

let firstFullTimeWage = empDailyHrsAndWageArr.filter(element => element.dailyWage == 160)
                            .find(element => element.dayNum);
console.log("\nFirst occurence when Full time wage was earned: " + firstFullTimeWage);

let count = 0;
empDailyHrsAndWageArr.filter(element => element.dailyWage > 0)
        .forEach(element => {
            count++;
        });
console.log("Total Days worked: "+ count);


















                        // function totalWages(totalWage, dailyWage) {
//     return totalWage + dailyWage;
// }
// console.log("UC-7A -- Emp wagee with reduce: "+ empDailyWageArr.reduce(totalWages, 0)); // totalWage is initialized to 0. 
//                         //then dailyWage is added to totalWage for each forEach. i.e. totalWage = totalWage + dailyWage  

// // 7B
// let dailyCntr = 0;
// function mapDayWithWage(dailyWage) {
//     dailyCntr++;
//     return dailyCntr + " = " + dailyWage;
// }
// // array of strings
// let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
// console.log("UC-7B -- Daily wage Map");
// console.log(mapDayWithWageArr);

// // UC 7C
// function fullTimeWage(dailyWage) {
//     return dailyWage.includes("160");   // returns true or false. 
// }
// let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);    // if true then added to new array
// console.log("UC-7C -- Daily Wage Filter when FullTime wage is earned");
// console.log(fullDayWageArr);

// // 7D
// function findFullTimeWage(dailyWage) {
//     return dailyWage.includes("160");
// }
// console.log("UC-7D -- First time Fulltime wage was earned on day: "+ mapDayWithWageArr.find(findFullTimeWage));

// // 7E
// function isAllFullTimeWage(dailyWage) {
//     return dailyWage.includes("160");
// }
// console.log("UC-7E -- Check all elements have Full Time Wage: "+ fullDayWageArr.every(isAllFullTimeWage));

// // 7F
// function isAnyPartTimeWage(dailyWage) {
//     return dailyWage.includes("80");
// }
// console.log("UC-7F -- Check if any part time is present: "+ mapDayWithWageArr.some(isAnyPartTimeWage));

// // 7G
// function totalDaysWorked(numOfDays, dailyWage) {
//     if(dailyWage > 0) return numOfDays+1;
//     return numOfDays;
// }
// console.log("UC-7G -- Number of days Emp Worked: "+ empDailyWageArr.reduce(totalDaysWorked, 0));

// // UC 9
// const findTotal = (totalVal, dailyVal) => {
//     return totalVal + dailyVal;
// }
// let count = 0;
// let totalHours = Array.from(empDailyHrsMAp.values())    // finds total number of hours
//                         .reduce(findTotal, 0);
// let totalSalary = empDailyWageArr                       // finds total salary for daily wage > 0
//                         .filter(dailyWage => dailyWage > 0)
//                         .reduce(findTotal, 0);          // sets starting value of findTotal as 0 
// console.log("UC9A - Emp Wage With Arrow: "+ "Total hours: " + totalHours + " Total Wages: "+ totalSalary);

// let nonWorkingDays = new Array();
// let partWorkingDays = new Array();
// let fullWorkingDays = new Array();
// empDailyHrsMAp.forEach( (value, key)=> {                 // Map has day as key and corresponding hrs as value
//     if (value == 8) 
//         fullWorkingDays.push(key);
//     else if (value == 4) 
//         partWorkingDays.push(key);
//     else 
//         nonWorkingDays.push(key);
// });
// console.log("Full Working Days: " + fullWorkingDays);
// console.log("Part Working Days: "+ partWorkingDays);
// console.log("Non Working Days: "+ nonWorkingDays);

