var UPBMate = {};
UPBMate.urlPath = "";


(function() {
	var full = $("script[src*='UPBMate.js']").attr("src");
	var index = full.indexOf("UPBMate.js");
	UPBMate.urlPath = full.substring(0, index);
}());


(function() {
	var style = "@font-face" +
				"{" +
					"font-family: KGPrimaryPenmanship;" +
					"src: url('"+ UPBMate.urlPath +"fonts/KGPrimaryPenmanship.ttf');" +
				"}" +
				"#UPBMate_mainCuprinsUL ul" +
				"{" +
					"list-style-type: circle;" +
					"margin-left: 30px;" +
				"}" +
				"#UPBMate_mainCuprinsUL" +
				"{" +
					"list-style-type: circle;" +
					"margin-left: 30px;" +
					"margin-top: 30px;" +
					"font-family: KGPrimaryPenmanship;" +
					"font-size: 28px;" +
					"color: #5555ff;" +
				"}";
	var styleElem = document.createElement("style");
	$(styleElem).html(style);
	$("head").append(styleElem);
}());





UPBMate.createCuprins = function() {
	var cuprinsHeigth = window.innerHeight - 70;

	var container = document.createElement("div");
	$("body").append(container);
	$(container).css({
		"position": "absolute",
		"top": -cuprinsHeigth,
		"left": 0,
		"width": "100%",
		"height": "100%",
		"background-color": "rgba(100,100,255,0.3)"
	});

	var cuprinsDiv = document.createElement("div");
	$(container).append(cuprinsDiv);
	$(cuprinsDiv).css({
		"width": "100%",
		"height": cuprinsHeigth,
		"background-color": "rgba(240, 240, 255, 0.9)",
		"clear": "both",
		"overflow": "auto"
	});

	var arrow = document.createElement("img");
	$(container).append(arrow);
	$(arrow).attr("src", UPBMate.urlPath +"images/arrow_cuprins.png");
	$(arrow).css({
		"background-color": "rgba(240, 240, 255, 0.9)",
		"float": "right",
		"height": "70px",
		"width": "70px"
	});
	var cuprinsDisplay = false;
	$(arrow).on("click", function(){
		if (cuprinsDisplay) {
			$(container).animate({
					"top" : -cuprinsHeigth
				}, 800, 
				function(){ 
					$(".UPBMate_cuprinsUL").hide(); 
			});
			cuprinsDisplay = false;

		} else {
			$(container).animate({
				"top" : 0
			}, 800);
			cuprinsDisplay = true;
		}
	});

	var cuprinsUL = document.createElement("ul");
	$(cuprinsDiv).append(cuprinsUL);
	$(cuprinsUL).attr("id", "UPBMate_mainCuprinsUL");

	function recursiveMakeCuprins(parent, json) {
		for (key in json) {
			var cuprinsLI = document.createElement("li");
			$(parent).append(cuprinsLI);
			$(cuprinsLI).append("<span>"+ key +"</span>");
			
			$(cuprinsLI).children("span").mouseenter( function() {
				$(this).css({
					"font-style": "italic",
					"text-decoration": "underline"
				});
			});
			$(cuprinsLI).children("span").mouseleave( function() {
				$(cuprinsDiv).find("span").css({
					"font-style": "normal",
					"text-decoration": "none	"
				});
			});

			if ( !$.isEmptyObject(json[key]) ) {
				$(cuprinsLI).children("span").click( function(){
					$(".UPBMate_cuprinsUL").hide();
					$(this.parentNode).children("ul").show();
					var elem = this;
					while ( elem.parentNode !== cuprinsDiv ) {
						elem = elem.parentNode;
						if (elem.tagName == "UL")
							$(elem).show();
					}
				});

				var newUL = document.createElement("ul");
				$(newUL).addClass("UPBMate_cuprinsUL");
				$(newUL).css({
					"display": "none"
				});
				$(cuprinsLI).append(newUL);
				recursiveMakeCuprins(newUL, json[key]);
			} else {
				$(cuprinsLI).children("span").click( function(){
					var URL = ".html";
					var i = this.innerHTML.indexOf(":");
					var dest = this.innerHTML.substring(0,i).toLowerCase().replace(/\s/g, '');
					URL = dest + URL;

					var elem = this;
					while ( elem.parentNode !== cuprinsDiv ) {
						elem = elem.parentNode;
						if (elem.tagName == "LI") {
							var parentStr = $(elem).children("span").text();
							var i = parentStr.indexOf(":");
							var dest = parentStr.substring(0,i).toLowerCase().replace(/\s/g, '');
							URL = dest + "/" + URL;
						}
					}
					URL = "../../../" + URL;
					window.location = URL;
				});
			}
		}
	}
	recursiveMakeCuprins(cuprinsUL, UPBMate.jsonCuprins);
}



UPBMate.createOneByOneInput = function(idElemHTML, arraySol, noClones, cssProperty, callMeMaybe) {
	if ( arguments.length == 4 ) {
		if ( typeof arguments[3] == "function" ) {
			callMeMaybe = arguments[3];
			cssProperty = undefined;
		}
	}
	var remainedClones = noClones;
	var maxCharLimit = 0;
	var writtenSol = [];
	var nowIndex = 0;
	for (var i=0; i<arraySol.length; i+=1) {
		writtenSol.push("");
		arraySol[i] += "";
		if ( arraySol[i].length > maxCharLimit )
			maxCharLimit = arraySol[i].length;
	}

	(function newInput() {
		var innerIndex = nowIndex;
		var jSmallContainer = $("<span style='position: relative; margin: 2px'>");
		$("#"+idElemHTML).append(jSmallContainer);

		var jInput = $("<input type='text'>");
		jSmallContainer.append(jInput);
		jInput.attr("maxlength", maxCharLimit);
		jInput.css("width", 20 + maxCharLimit * 6);
		if ( cssProperty != undefined )
			jInput.css(cssProperty);

		remainedClones -= 1;
		var jCheckMark;
		jInput.on("change", function(){
			if ( jCheckMark === undefined ) {
				jCheckMark = $("<img>");
				jSmallContainer.append(jCheckMark);
				var position = {};
				position["left"] = maxCharLimit * 5 + 9;
				position["top"] = -3;
				jCheckMark.css({
					"width": 18,
					"position": "absolute"
				}).css(position);
			}

			writtenSol[innerIndex] = "";
			var posWritten = writtenSol.indexOf(jInput.val());
			writtenSol[innerIndex] = jInput.val();
			if ( arraySol.indexOf(jInput.val()) > -1 && posWritten == -1 ) { // correct answer
				jCheckMark.hide().show(300).attr("src", UPBMate.urlPath +"check.png");
				if ( remainedClones > 0 ) {
					nowIndex += 1;
					setTimeout(function(){
						newInput().focus();
					}, 1);
				} else if ( callMeMaybe != undefined ) {
					callMeMaybe();
				}
			} else if ( jInput.val() != "" ) {
				jCheckMark.hide().show(300).attr("src", UPBMate.urlPath +"wrong.png");
			} else {
				jCheckMark.hide();
			}
		});
		return jInput;
	}());
}



UPBMate.createOneByOneSelect = function(idElemHTML, arrayOfArrayOptions, arrayIndexSol, noClones, callMeMaybe) {
	var nowIndex = 0;
	var remainedClones = noClones;
	if ( noClones > arrayOfArrayOptions.length )
		remainedClones = arrayOfArrayOptions.length;

	(function newSelect() {
		remainedClones -= 1;
		var jSmallContainer = $("<span style='position: relative; margin: 2px'>");
		$("#"+idElemHTML).append(jSmallContainer);

		var jSelect = $("<select>");
		jSmallContainer.append(jSelect);

		jSelect.append("<option></option>");
		for (var i=0; i< arrayOfArrayOptions[nowIndex].length; i+=1) {
			jSelect.append("<option>"+ arrayOfArrayOptions[nowIndex][i] + "</option>");
		}

		var jCheckMark;
		jSelect.on("change", function(){
			if ( jCheckMark === undefined ) {
				jCheckMark = $("<img>");
				jSmallContainer.append(jCheckMark);
				var position = {};
				position["left"] = jSelect.width() - 15;
				position["top"] = -5;
				jCheckMark.css({
					"width": 22,
					"position": "absolute"
				}).css(position);
			}

			var solution = arrayIndexSol[nowIndex];
			if ( jSelect.find(":selected").text() === arrayOfArrayOptions[nowIndex][solution] ) {
				jCheckMark.hide().show(300).attr("src", UPBMate.urlPath +"images/check_mark_green.png");
				if (remainedClones > 0){
					nowIndex += 1;
					newSelect();
				} else if ( callMeMaybe != undefined ) { 
					callMeMaybe();
				}
			} else if ( jSelect.find(":selected").text() != "" ) {
				jCheckMark.hide().show(300).attr("src", UPBMate.urlPath +"images/wrong_cross_red.png");
			} else {
				jCheckMark.hide();
			}
		});
	}());
}