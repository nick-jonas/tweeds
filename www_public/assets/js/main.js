$(document).ready(function(){

	// MAIN NAVIGATION
	$("#nav-arrow").click(function(){
		var $mainNav = $('.main-nav');
		if($mainNav.hasClass('closed')){
			$mainNav.removeClass('closed');
			$mainNav.addClass('open');
		}else{
			$mainNav.removeClass('open');
			$mainNav.addClass('closed');
		}
	});


	// LOOKBOOK SECTION
	// dependencies: $, SuperSize plugin http://buildinternet.com/project/supersized/
	// var $lookItems = $('#lookbook .item'),
		var $leftLookArrow = $('#lookbook .arrow.left'),
			$rightLookArrow = $('#lookbook .arrow.right');
		$leftLookArrow.click(function(e){
			e.preventDefault();
			api.prevSlide();
		});
		$rightLookArrow.click(function(e){
			e.preventDefault();
			api.nextSlide();
		});


	$.supersized({
		// Functionality
		slideshow               :   1,			// Slideshow on/off
		autoplay				:	1,			// Slideshow starts playing automatically
		start_slide             :   1,			// Start slide (0 is random)
		stop_loop				:	0,			// Pauses slideshow on last slide
		random					: 	0,			// Randomize slide order (Ignores start slide)
		slide_interval          :   5000,		// Length between transitions
		transition              :   6, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	1000,		// Speed of transition
		new_window				:	0,			// Image links open in new window/tab
		pause_hover             :   0,			// Pause slideshow on hover
		keyboard_nav            :   1,			// Keyboard navigation on/off
		performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
		image_protect			:	1,			// Disables image dragging and right click with Javascript

		// Size & Position
		min_width		        :   700,			// Min width allowed (in pixels)
		min_height		        :   509,			// Min height allowed (in pixels)
		vertical_center         :   1,			// Vertically center background
		horizontal_center       :   1,			// Horizontally center background
		fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
		fit_portrait         	:   1,			// Portrait images will not exceed browser height
		fit_landscape			:   0,			// Landscape images will not exceed browser width

		// Components
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		thumb_links				:	1,			// Individual thumb links for each slide
		thumbnail_navigation    :   0,			// Thumbnail navigation
		slides 					:  	[			// Slideshow Images
											{image : '/assets/img/src/lookbook/1.jpg', title : 'Image Title'},
											{image : '/assets/img/src/lookbook/2.jpg', title : 'Image Title'},
											{image : '/assets/img/src/lookbook/3.jpg', title : 'Image Title'},
											{image : '/assets/img/src/lookbook/4.jpg', title : 'Image Title'},
											{image : '/assets/img/src/lookbook/5.jpg', title : 'Image Title'}
									]

	});
});