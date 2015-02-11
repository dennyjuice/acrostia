jQuery(document).ready(function($){
/*	
	$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: 750,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});
	*/
	
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
	
	/*------Hover effect on img in gallery--------*/
	$('.img-hover').hide();
	$('.image-box').hover(function(){
			$('.img-hover', this).show();
			$('img', this).css({'-webkit-filter' : 'blur(8px)',
												 'filter' : 'blur(8px)'});
		}, function(){
			$('.img-hover', this).hide();
			$('img', this).css({'-webkit-filter' : 'blur(0)',
												 'filter' : 'blur(0)'});
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
});