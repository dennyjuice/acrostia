jQuery(document).ready(function($){
	
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
});