$(document).ready(function() {
	
	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline", 
		midClick: true
	});

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".fade_left").animated("fadeInLeft", "fadeOutLeft");
	$(".fade_right, .fade_right ul li a").animated("fadeInRight", "fadeOutRight");
	$(".top_text p, .section_header, .fade_down").animated("fadeInUp", "fadeOutDown");
	$(".fade_down").animated("rotateInUpLeft", "rotateOutUpLeft");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutLeft");
	$(".right .resume_item").animated("fadeInRight", "fadeOutRight");
	$(".resume_icon").animated("bounceInDown", "bounceOutDown");

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});


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

	$(".top_menu li").click(function() {
		$(".top_menu").fadeOut(600);
		$(".sandwich").removeClass("active");
		$(".top_text").removeClass("h_opacify");
	}).append("<span>");

	
	//animate menu opening and closing 
	$(".toggle_menu").click(function() {
		
		if ($(".top_menu").is(":visible")) {
			$(".top_text").removeClass("h_opacify");
			$(".top_menu li a").removeClass("fadeInUp animated");
			$(".top_menu li a").addClass("fadeOutUp animated");
			$(".top_menu").fadeOut(1500);
		
		}
		else {
			$(".top_menu li a").removeClass("fadeOutUp animated");
			$(".top_menu li a").addClass("fadeInUp animated");
			
			$(".top_text").addClass("h_opacify");
			$(".top_menu").fadeIn(600);	
			 
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

	//animate logo while mouse is over
	$(".logo_container img").hover(
		function() {
			$(this).addClass("rubberBand animated");
		},
		function() {
			$(this).removeClass("rubberBand animated");
	});
	
	$(".portfolio_item").each(function(i) {
		$(this).find(".popup_descr a").attr("href", "#work_" + i);
		$(this).find(".port_descr").attr("id", "work_" + i)
	});

});



$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

