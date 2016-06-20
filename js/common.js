$(document).ready(function() {
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	}

	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	
	$(".toggle_menu, .menu_item").click(function() {
  		$(".sandwich").toggleClass("active");
	});

	
	//animate menu opening and closing 
	$(".toggle_menu").click(function() {
		
		if ($(".top_menu").is(":visible")) {
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");
		
		}
		else {
			$(".top_menu").fadeIn(600);	
			$(".top_menu li a").addClass("fadeInUp animated");
			
		}
	});

	//animate selected menu item
	$(".top_menu li").hover(
		function() {		
			$(this).addClass("pulse animated");	
		},
		function() {
			$(this).removeClass("pulse animated");
	});

	$(".logo_container img").hover(
		function() {
			$(this).addClass("rubberBand animated");
		},
		function() {
			$(this).removeClass("rubberBand animated");
	});
	
});



$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

