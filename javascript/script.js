var containerId = $("#container");

// Current Day
$(document).ready(function (){
  let nowMoment = moment().format("MMMM Do YYYY");
  let currentDay = $("#currentDay");
  displayDate.innerHTML = nowMoment;
  let currentHour = moment().format("HH");
})


// time slot compared to actual the actual times
