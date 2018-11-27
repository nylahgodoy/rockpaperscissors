// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */


var userChoice = $("#shoot").val();
var computerChoice = $("#shoot").val();
var randomNumber = Math.random();

if (randomNumber < 0.99) {
    computerChoice = "paper";
    userChoice = "rock";
}
$("#shoot").click(function() {
    $("#userChoice").text($("#input").val());
    $("#computerChoice").text($("#input").val());
});




// DOCUMENT READY FUNCTION BELOW

