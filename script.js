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

////	Validari ex 1
	var checkA = new Array();
	var okA = new Array();
	for(var i = 0; i < 7; i++) {
		okA[i] = 0;
	}

	if(isNaN(checkA[0])){
		$("#input1").keyup(function() {
			checkA[0] = $("#input1").val();
			checkA[0] = parseInt(checkA[0],10);
			if(!isNaN(checkA[0])){
				if(checkA[0] == 1) {
					$(".red").css("background-color", "#DF0101");
					okA[0] = 1;
					if((((okA[0]==1 && okA[1]==1)&& (okA[2]==1 && okA[3] ==1))
							&& (okA[4]==1 && okA[5]==1))&&okA[6] ==1) {
						$("#checkA2 > img").show("slow");
					}
				} else {
					$("#wrongA>img").show("slow");
					$("#wrongA>img").hide("slow");
					$("#checkA2 > img").hide();
				}
			}
		}).keydown();
	}

	if(isNaN(checkA[1])){
		$("#input4").keyup(function() {
			checkA[1] = $("#input4").val();
			checkA[1] = parseInt(checkA[1],10);
			if(!isNaN(checkA[1])){
				if(checkA[1] == 4) {
					$(".blue").css("background-color", "#013ADF");
					okA[1] = 1;
					if((((okA[0]==1 && okA[1]==1)&& (okA[2]==1 && okA[3] ==1))
							&& (okA[4]==1 && okA[5]==1))&&okA[6] ==1) {
						$("#checkA2 > img").show("slow");
					}
				} else {
					$("#wrongA>img").show("slow");
					$("#wrongA>img").hide("slow");
					$("#checkA2 > img").hide();
				}
			}
		}).keydown();
	}

	if(isNaN(checkA[2])){
		$("#input9").keyup(function() {
			checkA[2] = $("#input9").val();
			checkA[2] = parseInt(checkA[2],10);
			if(!isNaN(checkA[2])){
				if(checkA[2] == 9) {
					$(".orange").css("background-color", "#FF8000");
					okA[2] = 1;
					if((((okA[0]==1 && okA[1]==1)&& (okA[2]==1 && okA[3] ==1))
							&& (okA[4]==1 && okA[5]==1))&&okA[6] ==1) {
						$("#checkA2 > img").show("slow");
					}
				} else {
					$("#wrongA>img").show("slow");
					$("#wrongA>img").hide("slow");
					$("#checkA2 > img").hide();
				}
			}
		}).keydown();
	}

	if(isNaN(checkA[3])){
		$("#input16").keyup(function() {
			checkA[3] = $("#input16").val();
			checkA[3] = parseInt(checkA[3],10);
			if(!isNaN(checkA[3])){
				if(checkA[3] == 1){}
				else if(checkA[3] == 16) {
					$(".green").css("background-color", "#04B404");
					okA[3] = 1;
					if((((okA[0]==1 && okA[1]==1)&& (okA[2]==1 && okA[3] ==1))
							&& (okA[4]==1 && okA[5]==1))&&okA[6] ==1) {
						$("#checkA2 > img").show("slow");
					}
				} else {
					$("#wrongA>img").show("slow");
					$("#wrongA>img").hide("slow");
					$("#checkA2 > img").hide();
				}
			}
		}).keydown();
	}

	if(isNaN(checkA[4])){
		$("#input25").keyup(function() {
			checkA[4] = $("#input25").val();
			checkA[4] = parseInt(checkA[4],10);
			if(!isNaN(checkA[4])){
				if(checkA[4] == 2){}
				else if(checkA[4] == 25) {
					$(".pinkish").css("background-color", "#F5D0A9");
					okA[4] = 1;
					if((((okA[0]==1 && okA[1]==1)&& (okA[2]==1 && okA[3] ==1))
							&& (okA[4]==1 && okA[5]==1))&&okA[6] ==1) {
						$("#checkA2 > img").show("slow");
					}
				} else {
					$("#wrongA2>img").show("slow");
					$("#wrongA2>img").hide("slow");
					$("#checkA2 > img").hide();
				}
			}
		}).keydown();
	}

	if(isNaN(checkA[5])){
		$("#input36").keyup(function() {
			checkA[5] = $("#input36").val();
			checkA[5] = parseInt(checkA[5],10);
			if(!isNaN(checkA[5])){
				if(checkA[5] == 3){}
				else if(checkA[5] == 36) {
					$(".lightBlue").css("background-color", "#81F7F3");
					okA[5] = 1;
					if((((okA[0]==1 && okA[1]==1)&& (okA[2]==1 && okA[3] ==1))
							&& (okA[4]==1 && okA[5]==1))&&okA[6] ==1) {
						$("#checkA2 > img").show("slow");
					}
				} else {
					$("#wrongA2>img").show("slow");
					$("#wrongA2>img").hide("slow");
					$("#checkA2 > img").hide();
				}
			}
		}).keydown();
	}

	if(isNaN(checkA[6])){
		$("#input49").keyup(function() {
			checkA[6] = $("#input49").val();
			checkA[6] = parseInt(checkA[6],10);
			if(!isNaN(checkA[6])){
				if(checkA[6] == 4){}
				else if(checkA[6] == 49) {
					$(".brown").css("background-color", "#B45F04");
					okA[6] = 1;
					if((((okA[0]==1 && okA[1]==1)&& (okA[2]==1 && okA[3] ==1))
							&& (okA[4]==1 && okA[5]==1))&&okA[6] ==1) {
						$("#checkA2 > img").show("slow");
					}
				} else {
					$("#wrongA2>img").show("slow");
					$("#wrongA2>img").hide("slow");
					$("#checkA2 > img").hide();
				}
			}
		}).keydown();
	}

//	--------------------
////	AutoTab ex 1
	
//	$('#input33').autotab({ target: 'input63', format: 'numeric' });
//	$('#input63').autotab({ target: 'input67', format: 'numeric',previous:'input33' });
//	$('#input67').autotab({ target: 'input75', format: 'numeric',previous:'input63' });
//	$('#input75').autotab({ target: 'input88', format: 'numeric',previous:'input67' });
//	$('#input88').autotab({ previous:'input75', format: 'numeric' });
	
	$('#input1').autotab({ target: 'input4', format: 'numeric' });
	$('#input4').autotab({ target: 'input9', format: 'numeric', previous:'input1' });
	$('#input9').autotab({ target: 'input16', format: 'numeric', previous:'input4' });
	$('#input16').autotab({ target: 'input25', format: 'numeric', previous:'input9' });
	$('#input25').autotab({ target: 'input36', format: 'numeric', previous:'input16' });	
	$('#input36').autotab({ target: 'input49', format: 'numeric', previous:'input25' });
	$('#input49').autotab({ previous:'input36', format: 'numeric' });
	
//	--------------------
////	Validari checkBox
	var okCheck = new Array();
	for(var i = 0; i < 4; i++) {
		okCheck[i] = 0;
	}
	$("#radio1").click(function() {
		okCheck[0] = 1;
		if((okCheck[0]== 1 && okCheck[1]== 1) && (okCheck[2]== 1 && okCheck[3] == 1)) {
			$("#checkRadio > img").show("slow");
		}
	});

	$("#radio2").click(function() {
		okCheck[1] = 1;
		if((okCheck[0]== 1 && okCheck[1]== 1) && (okCheck[2]== 1 && okCheck[3] == 1)) {
			$("#checkRadio > img").show("slow");
		}
	});

	$("#radio4").click(function() {
		okCheck[2] = 1;
		if((okCheck[0]== 1 && okCheck[1]== 1) && (okCheck[2]== 1 && okCheck[3] == 1)) {
			$("#checkRadio > img").show("slow");
		}
	});

	$("#radio5").click(function() {
		okCheck[3] = 1;
		if((okCheck[0]== 1 && okCheck[1]== 1) && (okCheck[2]== 1 && okCheck[3] == 1)) {
			$("#checkRadio > img").show("slow");
		}
	});
	
	$("#radio0").click(function() {
		$(this).delay(2000).prop("checked", false);
	});
	
	$("#radio3").click(function() {
		$(this).delay(2000).prop("checked", false);
		});
////	Validari ex 2
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