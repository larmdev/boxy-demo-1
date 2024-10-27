const { addHours, format } = require('date-fns');

function isNullOrEmpty(str) {
    return str === null || str === undefined || str.trim() === '';
}


function NowBkk() {
    const now = new Date();
    return addHours(now, 7);
}


function FormatDateTime(date, time) {

    if (isNullOrEmpty(date)) return null;
    if (isNullOrEmpty(time)) return null;

    const dateTimeString = `${date}T${time}:00.000Z`;
    const newDate = new Date(dateTimeString);
    return newDate;
}

module.exports = { NowBkk, FormatDateTime}