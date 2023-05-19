const test = document.getElementById('test');
const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');
const days = document.getElementById('day');

var day = 62;
var hour = 23;
var minute = 59;
var second = 59;
days.innerText = day;
hours.innerText = hour;
minutes.innerText = minute;
seconds.innerText = second;


function setDeadline() {
    second--;
    if (second < 0) {
        second = 59;
        minute--;
        if (minute < 0) {
            minute = 59;
            hour--;
            if (hour < 0) {
                hour = 23;
                day--;
                if (day < 0) {
                    day = 62;
                    hour = 23;
                    minute = 59;
                    second = 59;
                }
            }
        }
    }
    if (day < 0) {
        day = 62;
        hour = 23;
        minute = 3;
        second = 19;
    }
    days.innerText = day;
    hours.innerText = hour;
    minutes.innerText = minute;
    seconds.innerText = second;
}
setInterval(setDeadline, 1000);