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

// UC5
{
    const NUM_OF_WORKING_DAYS = 20;
    const MAX_HOURS = 160;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while(totalEmpHrs <= MAX_HOURS && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("UC5 - total days: "+ totalWorkingDays + " Total hrs: "+ totalEmpHrs + " Emp Wage: "+ empWage);
}