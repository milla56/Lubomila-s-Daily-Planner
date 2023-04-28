var containerId = $("#container");

// Current Day
// $(document).ready(function (){
//   let nowMoment = moment().format("MMMM Do YYYY");
//   let currentDay = $("#currentDay");
//   currentDay.innerHTML = nowMoment;
//   let currentHour = moment().format("HH");
// })

$(document).ready(function(){
	const currentDay = moment().format('dddd, MMMM Do YYYY');
	$('#currentDay').html(currentDay);})


// time slot compared to actual the actual times
let currentHour = moment().format("HH");
console.log(currentHour);

$(".calendar").each(function(){
  var timeDiv = $(this).find(".time-div").attr("id"); //time element
  var description = $(this).find(".description");     // text area
  if (currentHour === timeDiv){
    description.addClass("present").css ("background-color", "#ff6961");
  }
  else if (currentHour > timeDiv){
    description.addClass("future").css("background-color","#77dd77");
  }
else (currentHour < timeDiv);{
  description.addClass("past").css("background-color" ,"#d3d3d3")
}
})






 


