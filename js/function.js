$(document).ready(function() { 
	$("#home").show();
	$("#connexion").hide();
	$("#post").hide();
 
 
 $("#to_connect").click(function() {    
 	$("#connexion").show("slide", { direction: "down" },1000);
	$("#home").hide("slide", { direction: "up" },100);
	$("#post").hide();
  });
  $("#sign").click(function() {    
 	$("#post").show("slide", { direction: "right" },1000);
	$("#connexion").hide("slide", { direction: "left" },100);
	$("#home").hide();
  });
 });