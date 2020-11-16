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

