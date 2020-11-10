// UC1
{
    const IS_ABSENT = 0;
    let check = Math.floor(Math.random() * 10 ) % 2;
    if(check == IS_ABSENT) {
        console.log("UC1 - Employee is Absent.");
        return;
    }
    else {
        console.log("UC1 - Employee is Present");
    }
}

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
            return FULL_TIME_HRS;
        default:
            return 0;
    }
}
let empCheck = Math.floor(Math.random() * 10) % 3;
let empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("UC3 - Emp Wage: "+empWage + " for hours: "+ empHrs);
