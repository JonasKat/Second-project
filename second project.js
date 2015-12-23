/* global $ */
$(document).ready(function() {
	$(".first").on("mouseenter", function() {
		$(this).animate({"bottom": "-30px"});
		var dropBox = $(this).closest(".container");
		$(dropBox).find(".fifth").animate({"bottom": "-40px"});
		$(dropBox).find(".tenth").animate({"bottom": "-50px"});
	});	
	$(".first").on("mouseleave", function() {
		$(this).animate({"bottom": "0px"});
		var dropBox = $(this).closest(".container");
		$(dropBox).find(".fifth").animate({"bottom": "0px"});
		$(dropBox).find(".tenth").animate({"bottom": "0px"});
	});
	$(".fourth").on("click", function() {
		$(this).toggleClass("toggleButton")
		if ($(this).hasClass("toggleButton")) {
		$(this).animate({"top": "10px"});
		$(this).closest(".container").find(".ninth").animate({"top": "10px"});
		}else {
			$(this).animate({"top": "0"});
			var effects = $(this).closest(".container");
			$(effects).find(".ninth").animate({"top": "0"});
		}
	});
	$(".fifth").on("click", function () {
		$(this).toggleClass("fifthtoggleButton");
		$(this).closest(".container").find(".tenth, .seventh").toggleClass("fifthtoggleButton");
	});
	$(".sixth").on("click", function() {
		var random = Math.random();
		var randomEffect = $(this).closest(".container");
		if (random<=0.5) { 
			random = $(this).addClass("opacity");
			random = $(randomEffect).find(".eigth").addClass("opacity");
		} else (0.5 < random); {
			random = $(this).addClass("radius");
			random = $(randomEffect).find(".second").addClass("combo");
		}		
	});
});

