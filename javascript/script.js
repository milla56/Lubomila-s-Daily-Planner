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
    description.addClass("present")
  }
  else if (currentHour > timeDiv){
    description.addClass("future")
  }
else (currentHour < timeDiv);{
  description.addClass("past")
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



//events on local storage

 


