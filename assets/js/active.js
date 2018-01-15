(function ($) {
	
	"use strict";
	$(window).load(function(){
		// preloader
		$(".falgun-preloader").fadeOut();
	});
	$(document).ready(function(){
		// stickyHeader
		$(window).scroll(function(){
			var distance = $("html").scrollTop();
			var menuHeight = $(".header-area").outerHeight();
			if (distance > menuHeight ) {
				$(".header-area").css({
					"position" : "fixed",
					"top" : "0",
					"left" : "0",
					"background" : "rgba(0,0,0,.8)",
					"width" : "100%",
					"zIndex" : "9998",
				});
			}
			else {
				$(".header-area").removeAttr("style");
			}
		});
		// ityped
		window.ityped.init(document.querySelector('.ityped'),{
			strings: ['ux ui designer.', 'front end developer.'],
			loop: true,
		})
		// smooth scroll menu
		$('.smooth-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			var headerH = '69';
			$('html, body').stop().animate({
				scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1200);
			event.preventDefault();
		}); 
		// parallax background
		$(window).scroll(function(){
			parallax();
		});
		function parallax(){
			var windowScroll = $(window).scrollTop();
			$(".parallax-bg").css("background-position", "center "+
			(windowScroll*0.5)+"px")
		}
		// portfolio tab
		var containerEl = document.querySelector('.portfolio-items'); 
		var mixer = mixitup(containerEl);
			
		
		// scrollButton
		$(window).scroll(function(){
			var durotto = $("html").scrollTop();
			if (durotto > 200) {
				$(".scroll-button").fadeIn();
			}
			else {
				$(".scroll-button").fadeOut();
			}
		});
		
		$(".scroll-button").click(function(){
			$("html").animate({"scrollTop" : "0"}, 2000);
		});
		//slider
		$('.owl-carousel').owlCarousel({
			loop:true,
			nav:false,
			dots:true,
			autoplay:true,
			autoplayTimeout:5000,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		})
	});
	
}(jQuery));