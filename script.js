$(document).ready(function() {
	$("#Ex1").hide();
	$("#Ex2").hide();
	$("img").hide();

	$( "#Exercitiul1" ).click(function() {
		$("#Ex1").show();
		$("#Ex2").hide();
	});

	$( "#Exercitiul2" ).click(function() {
		$("#Ex1").hide();
		$("#Ex2").show();
	});

	var checkA = new Array();
	
});