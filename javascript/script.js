var containerId = $("#container");
var saveBtn = $('.save button');
var timeDiv = $(".time-div"); // time element
var description = $(".description"); //text area

// Current Day
$(document).ready(function(){
	const currentDay = moment().format('dddd, MMMM Do YYYY');
	$('#currentDay').html(currentDay);})


// time slot compared to actual the actual times
let currentHour = moment().format("HH");
console.log(currentHour);

timeDiv.each(function(){
  var timeElement = parseInt($(this).attr('id').split("hour")[1]);
  if (currentHour === timeDiv){
    description.addClass("present");
    description.removeClass("future");
    description.removeClass("past");
  }
  else if (currentHour > timeDiv){
    description.addClass("future");
    description.removeClass("present");
    description.removeClass("past");
  }
else (currentHour < timeDiv);{
  description.addClass("past");
  description.removeClass("present");
  description.removeClass("future");
}
})


// save btn

saveBtn.on("click",function(event){
  event.preventDefault();
 
  var textInput = $(this).siblings(".description").val();
  var time = $(this).parent().attr('id');

  localStorage.setItem(time,textInput)
  
}) 
  
//remove btn ?



//get items from local storage
$("#hour-09 .description").val(localStorage.getItem("hour-09"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));
$("#hour-19 .description").val(localStorage.getItem("hour-19"));











 


