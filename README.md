# Work Day Scheduler

## Concept
This project was about creating a scheduler anyone can use to plan out a day of meetings or other activities. We used HTML, CSS, and JavaScript along with Moments.js and JQuery.

## Sample Code
One example of the dynamic JavaScript is the code for the current day and time to pop up in the header using Moments.js
``` ruby
const m = moment();
currentDayEl = document.querySelector("#currentDay")
currentDayEl.textContent = m.format("dddd, MMMM Do YYYY");
```