var places = [];
var userInput;

$(".add").click(function() {
    userInput=$(".picture-url").val();
     places.push(".picture-url");
$(".gallery").append("<img src=" + userInput + ">"); 
$("input:text").val(" ");
    
    
});