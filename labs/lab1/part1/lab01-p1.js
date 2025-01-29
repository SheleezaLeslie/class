import lodash from 'lodash';

// create object
const holidays = [
    {name: 'Christmas', date: new Date('2025-12-25')},
    {name: 'Canada Day', date: new Date('2025-07-01')},
    {name: 'April Fools', date: new Date('2025-04-01')},
];

let today = new Date();

// loop to calculate difference between dates
holidays.forEach((holiday) => {
    let dateDiff = holiday.date - today;
    console.log(Math.floor(dateDiff/ (1000 * 60 * 60 * 24)));
});

let randHoliday = lodash.sample(holidays);
console.log(lodash.findIndex(holidays, {name: 'Christmas'}));
console.log(lodash.findIndex(holidays, {name: 'Canada Day'}));