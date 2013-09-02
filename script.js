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
	
	/////////Validari ex 2
	var val1;
	if(isNaN(val1)){
		$("#in0cata").keyup(function() {
			val1 = $("#in0cata").val();
			val1 = parseInt(val1,10);
		if(!isNaN(val1)){
			if(val1==0)
			{
			$("#check1cata").show("slow");
			}
		else{
			$("#check1cata").hide("slow");
			$("#wrong1cata").show("slow");
			$("#wrong1cata").hide("slow");
			}
			}
	}).keydown();
	}
	var val1;
	if(isNaN(val1)){
		$("#in1cata").keyup(function() {
			val1 = $("#in1cata").val();
			val1 = parseInt(val1,10);
		if(!isNaN(val1)){
			if(val1==1)
			{
			$("#check2cata").show("slow");
			}
		else{
			$("#check2cata").hide("slow");
			$("#wrong2cata").show("slow");
			$("#wrong2cata").hide("slow");
			}
			}
	}).keydown();
	}
	var val1;
	if(isNaN(val1)){
		$("#in2cata").keyup(function() {
			val1 = $("#in2cata").val();
			val1 = parseInt(val1,10);
		if(!isNaN(val1)){
			if(val1==4)
			{
			$("#check3cata").show("slow");
			}
		else{
			$("#check3cata").hide("slow");
			$("#wrong3cata").show("slow");
			$("#wrong3cata").hide("slow");
			}
			}
	}).keydown();
	}
	var val1;
	if(isNaN(val1)){
		$("#in3cata").keyup(function() {
			val1 = $("#in3cata").val();
			val1 = parseInt(val1,10);
		if(!isNaN(val1)){
			if(val1==9)
			{
			$("#check4cata").show("slow");
			}
		else{
			$("#check4cata").hide("slow");
			$("#wrong4cata").show("slow");
			$("#wrong4cata").hide("slow");
			}
			}
	}).keydown();
	}
	
	var val1;
	if(isNaN(val1)){
		$("#in4cata").keyup(function() {
			val1 = $("#in4cata").val();
			val1 = parseInt(val1,10);
		if(!isNaN(val1)){
			if(val1==1){}
			else if(val1==16)
			{
			$("#check5cata").show("slow");
			}
		else{
			$("#check5cata").hide("slow");
			$("#wrong5cata").show("slow");
			$("#wrong5cata").hide("slow");
			}
			}
	}).keydown();
	}
	
	var val1;
	if(isNaN(val1)){
		$("#in5cata").keyup(function() {
			val1 = $("#in5cata").val();
			val1 = parseInt(val1,10);
		if(!isNaN(val1)){
			if(val1==2){}
			else if(val1==25)
			{
			$("#check6cata").show("slow");
			}
		else{
			$("#check6cata").hide("slow");
			$("#wrong6cata").show("slow");
			$("#wrong6cata").hide("slow");
			}
			}
	}).keydown();
	}
	
	var val1;
	if(isNaN(val1)){
		$("#in6cata").keyup(function() {
			val1 = $("#in6cata").val();
			val1 = parseInt(val1,10);
		if(!isNaN(val1)){
			if(val1==3){}
			else if(val1==36)
			{
			$("#check7cata").show("slow");
			}
		else{
			$("#check7cata").hide("slow");
			$("#wrong7cata").show("slow");
			$("#wrong7cata").hide("slow");
			}
			}
	}).keydown();
	}
	
	var val1;
	if(isNaN(val1)){
		$("#in7cata").keyup(function() {
			val1 = $("#in7cata").val();
			val1 = parseInt(val1,10);
		if(!isNaN(val1)){
			if(val1==4){}
			else if(val1==49)
			{
			$("#check8cata").show("slow");
			}
		else{
			$("#check8cata").hide("slow");
			$("#wrong8cata").show("slow");
			$("#wrong8cata").hide("slow");
			}
			}
	}).keydown();
	}
	
	var val1;
	if(isNaN(val1)){
		$("#in8cata").keyup(function() {
			val1 = $("#in8cata").val();
			val1 = parseInt(val1,10);
		if(!isNaN(val1)){
			if(val1==6){}
			else if(val1==64)
			{
			$("#check9cata").show("slow");
			}
		else{
			$("#check9cata").hide("slow");
			$("#wrong9cata").show("slow");
			$("#wrong9cata").hide("slow");
			}
			}
	}).keydown();
	}
	
	var val1;
	if(isNaN(val1)){
		$("#in9cata").keyup(function() {
			val1 = $("#in9cata").val();
			val1 = parseInt(val1,10);
		if(!isNaN(val1)){
			if(val1==8){}
			else if(val1==81)
			{
			$("#check10cata").show("slow");
			}
		else{
			$("#check10cata").hide("slow");
			$("#wrong10cata").show("slow");
			$("#wrong10cata").hide("slow");
			}
			}
	}).keydown();
	}
	var val1;
	if(isNaN(val1)){
		$("#in10cata").keyup(function() {
			val1 = $("#in10cata").val();
			val1 = parseInt(val1,10);
		if(!isNaN(val1)){
			if(val1==1){} else if(val1==10){}
			else if(val1==100)
			{
			$("#check11cata").show("slow");
			}
		else{
			$("#check11cata").hide("slow");
			$("#wrong11cata").show("slow");
			$("#wrong11cata").hide("slow");
			}
			}
	}).keydown();
	}
	
	var val1;
	if(isNaN(val1)){
		$("#in11cata").keyup(function() {
			val1 = $("#in11cata").val();
			val1 = parseInt(val1,10);
		if(!isNaN(val1)){
			if(val1==1){} else if(val1==12){}
			else if(val1==121)
			{
			$("#check12cata").show("slow");
			}
		else{
			$("#check12cata").hide("slow");
			$("#wrong12cata").show("slow");
			$("#wrong12cata").hide("slow");
			}
			}
	}).keydown();
	}
	
	var val1;
	if(isNaN(val1)){
		$("#in12cata").keyup(function() {
			val1 = $("#in12cata").val();
			val1 = parseInt(val1,10);
		if(!isNaN(val1)){
			if(val1==1){} else if(val1==14){}
			else if(val1==144)
			{
			$("#check13cata").show("slow");
			}
		else{
			$("#check13cata").hide("slow");
			$("#wrong13cata").show("slow");
			$("#wrong13cata").hide("slow");
			}
			}
	}).keydown();
	}
	
	var val1;
	if(isNaN(val1)){
		$("#in13cata").keyup(function() {
			val1 = $("#in13cata").val();
			val1 = parseInt(val1,10);
		if(!isNaN(val1)){
			if(val1==1){} else if(val1==16){}
			else if(val1==169)
			{
			$("#check14cata").show("slow");
			}
		else{
			$("#check14cata").hide("slow");
			$("#wrong14cata").show("slow");
			$("#wrong14cata").hide("slow");
			}
			}
	}).keydown();
	}
	
	var val1;
	if(isNaN(val1)){
		$("#in14cata").keyup(function() {
			val1 = $("#in14cata").val();
			val1 = parseInt(val1,10);
		if(!isNaN(val1)){
			if(val1==1){} else if(val1==19){}
			else if(val1==196)
			{
			$("#check15cata").show("slow");
			}
		else{
			$("#check15cata").hide("slow");
			$("#wrong15cata").show("slow");
			$("#wrong15cata").hide("slow");
			}
			}
	}).keydown();
	}
	
	var val1;
	if(isNaN(val1)){
		$("#in15cata").keyup(function() {
			val1 = $("#in15cata").val();
			val1 = parseInt(val1,10);
		if(!isNaN(val1)){
			if(val1==2){} else if(val1==22){}
			else if(val1==225)
			{
			$("#check16cata").show("slow");
			}
		else{
			$("#check16cata").hide("slow");
			$("#wrong16cata").show("slow");
			$("#wrong16cata").hide("slow");
			}
			}
	}).keydown();
	}
	$("#redCata1").click(function(){
		$('#redCata1').css('background-color','red');
		console.log('click');
	});
	$("#redCata2").click(function(){
		$('#redCata2').css('background-color','red');
		console.log('click');
	});
	$("#redCata3").click(function(){
		$('#redCata3').css('background-color','blue');
		console.log('click');
	});
	$("#redCata4").click(function(){
		$('#redCata4').css('background-color','blue');
		console.log('click');
	});
});