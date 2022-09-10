function isLeepYear(year){
    const reminder = year %4;
    if ((reminder == 0) && (0 != year % 100) || (0 == year % 400)){
        console.log(year + ' is a leap year');
        return true;
    }
    else{
        console.log(year + ' is not a leap year');
        return false;
    }
}

const result = isLeepYear(2000);
console.log(result);
