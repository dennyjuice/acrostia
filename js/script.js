jQuery(document).ready(function($){
	
	/*---------Different colors for active menu link----*/
	
	function waypointMe(id, color, num, off){
		var waypoints = $(id).waypoint(function(direction) {
  			$('.nav li').removeClass('nav-active');
				$('.nav li:nth-child('+num+')').addClass('nav-active');
				$('.nav li').css({'background-color':  'transparent'});
				$('.nav-active').css({'background-color':  color});
		}, { offset : off });}
	
	var way = waypointMe;
	
	way('#myCarousel', '#74c7d5', 1, '-1%');
	way('#services', '#df5c64', 2, '1%');
	way('#about', '#91778e', 3, '1%');
	way('#work', '#a1ca6c', 4, '1%');
	way('#contacts', '#82c8bd', 5, '1%');
	/*---------------------------------------*/
	
	/*----------Gallery----------*/
	$('.work-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Acrostia</small>';
			}
		}
	});
	/*----------END Gallery----------*/
	
	/*---------------Small parrallax effect---------*/
	$.stellar({
    horizontalScrolling: false,
    responsive: true
  });
	/*---------------END Small parrallax effect---------*/
	
	/*------Hover effect on img in gallery--------*/
	$('.img-hover').hide();
	$('.image-box').hover(function(){
			$('.img-hover', this).show();
			$('img', this).css({'-webkit-filter' : 'blur(8px)',
												 'filter' : 'blur(8px)'});
			$('.img-description', this).css({'box-shadow' : '0 1px 30px 0 #333'});
		}, function(){
			$('.img-hover', this).hide();
			$('img', this).css({'-webkit-filter' : 'blur(0)',
												 'filter' : 'blur(0)'});
			$('.img-description', this).css({'box-shadow' : 'none'});
		}
	);
	/*------END Hover effect on img in gallery--------*/
	
	/*------------portfolio filter--------------*/
	var tempItem = '[rel=' + $('.work-filter-selected').children('a').attr('rel') + ']';
	
	$('.work-title-filter li a').click(function() {
		
    $('.work-title-filter li').removeClass('work-filter-selected');
    $(this).parent('li').addClass('work-filter-selected');
		
		var thisItem = '[rel=' + $(this).attr('rel') + ']';
	
		if (thisItem == "[rel=all]") {
			thisItem = "";
		}

		if (tempItem == "[rel=all]") {
			tempItem = "";
		}
	
		$('.image-box' + tempItem).animate({'opacity' : 0}, 500).hide();
		$('.image-box' + thisItem).animate({'opacity' : 1}, 500).show();

		tempItem = thisItem;
	});
	/*------------END portfolio filter--------------*/
	
	// create anchor links
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 300);
				return false;
			}
		}
	});
	//---------------------------------------------
	
});