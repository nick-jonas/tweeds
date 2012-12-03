define([
	'jquery',
	'lodash',
	'backbone',
	'plugins/supersized',
	'collection/lookbooks'
], function($, _, Backbone, supersized, lookbooks){

	var LookbookView = Backbone.View.extend({

		$playButton: $('#playbutton'),
		$vidPlayer: $('#video-player'),
		player: null, // video-js object
		overTimeoutInterval: null,

		initialize: function(){
			_.bindAll(this, 'reset', 'render', 'onLookData', 'onWindowResize', 'onSlideChange', 'showVideo', 'hideVideo', 'onVideoPlay', 'onVideoPause', 'onPlayOver', 'onPlayOut', 'onPlayButtonMouseOutTimeout');
			this.lookbookCollection = new lookbooks();
			this.lookbookCollection.bind('reset', this.onLookData);
			this.lookbookCollection.fetch();

			$(window).on('resize', this.onWindowResize);
		},

		onLookData: function(){
			var imageData = this.lookbookCollection.toJSON();

			var $leftLookArrow = $('#prevslide'),
				$rightLookArrow = $('#nextslide');

			$leftLookArrow.click(function(e){
				e.preventDefault();
				api.prevSlide();
			});
			$rightLookArrow.click(function(e){
				e.preventDefault();
				api.nextSlide();
			});

			var vent = _.extend({}, Backbone.Events);
			vent.on('supersized:onSlideChange', this.onSlideChange);

			$.supersized({
				'vent'					:  	vent,
				// Functionality
				slideshow               :   1,			// Slideshow on/off
				autoplay				:	0,			// Slideshow starts playing automatically
				start_slide             :   1,			// Start slide (0 is random)
				stop_loop				:	0,			// Pauses slideshow on last slide
				random					:	0,			// Randomize slide order (Ignores start slide)
				slide_interval			:	5000,		// Length between transitions
				transition              :	6, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
				transition_speed		:	1000,		// Speed of transition
				new_window				:	0,			// Image links open in new window/tab
				pause_hover             :   0,			// Pause slideshow on hover
				keyboard_nav            :   1,			// Keyboard navigation on/off
				performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
				image_protect			:	1,			// Disables image dragging and right click with Javascript

				// Size & Position
				min_width		        :   700,			// Min width allowed (in pixels)
				min_height		        :   $(window).height(),			// Min height allowed (in pixels)
				vertical_center         :   1,			// Vertically center background
				horizontal_center       :   1,			// Horizontally center background
				fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
				fit_portrait         	:   0,			// Portrait images will not exceed browser height
				fit_landscape			:   0,			// Landscape images will not exceed browser width

				// Components
				slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
				thumb_links				:	1,			// Individual thumb links for each slide
				thumbnail_navigation    :   0,			// Thumbnail navigation
				slides 					:  	imageData

			});

			//this.sizeTriangles();
		},

		onSlideChange: function(index){
			var model = this.lookbookCollection.at(index).toJSON();

			if(model.video){
				// show video
				this.showVideo(model);
			}else{
				// hide video
				this.hideVideo();
			}
		},

		showVideo: function( mediaObj ) {
			var videoObj = mediaObj.video,
				html = '<video id="' + videoObj.id + '" class="video-js vjs-default-skin" width="' + videoObj.width + '" height="' + videoObj.height + '" preload="auto"><source type="video/mp4" src="' + videoObj.path + '"></video';

			this.$playButton.addClass('active');
			this.$playButton.data('data-src', videoObj.path);
			this.$playButton.unbind('click', this.onVideoPause);
			this.$playButton.bind('click', this.onVideoPlay);
			this.$playButton.find('img').attr('src', '/assets/img/src/lookbook/playbutton.png');

			if(!this.player){
				this.$vidPlayer.html(html);
				this.player = _V_(videoObj.id);
			}
			$('html').bind('mouseover', this.onPlayOver);
			$('html').bind('mouseout', this.onPlayOut);
		},

		onPlayOver: function(){
			if(this.overTimeoutInterval){
				clearTimeout(this.overTimeoutInterval);
			}
			// show play button
			this.$playButton.fadeIn(500);
		},

		onPlayOut: function(){
			if(this.overTimeoutInterval){
				clearTimeout(this.overTimeoutInterval);
			}
			this.overTimeoutInterval = setTimeout(this.onPlayButtonMouseOutTimeout, 2000);
		},

		onPlayButtonMouseOutTimeout: function(){
			if(this.overTimeoutInterval){
				clearTimeout(this.overTimeoutInterval);
			}
			// hide play button only if video is playing
			if(this.player){
				if(!this.player.paused()){
					this.$playButton.fadeOut(500);
				}
			}
		},

		hideVideo: function() {
			this.$playButton.removeClass('active');
			this.$playButton.unbind('click', this.onVideoPause);
			this.$playButton.unbind('mouseover', this.onPlayOver);
			if(this.player){
				this.player.pause();
			}
			$('.video-js').css('display', 'none');
			$('html').unbind('mouseover', this.onPlayOver);
			$('html').unbind('mouseout', this.onPlayOut);
		},

		onVideoPlay: function(){
			if(this.player){
				this.player.play();
				this.$playButton.find('img').attr('src', '/assets/img/src/lookbook/pausebutton.png');
				$('.video-js').css('display', 'block');
				this.player.play();
				this.$playButton.unbind('click', this.onVideoPlay);
				this.$playButton.bind('click', this.onVideoPause);
			}
		},

		onVideoPause: function(){
			if(this.player){
				this.player.pause();
				this.$playButton.unbind('click', this.onVideoPause);
				this.$playButton.bind('click', this.onVideoPlay);
				this.$playButton.find('img').attr('src', '/assets/img/src/lookbook/playbutton.png');
			}
		},

		onWindowResize: function(){
			this.sizeTriangles();
		},

		sizeTriangles: function(){
			var w = $(window).width(),
				h = $(window).height(),
				left = $('#lookbook-container .text-block .triangle-container .triangle .left-tri'),
				right = $('#lookbook-container .text-block .triangle-container .triangle .right-tri');
			left.css('border-left-width', w / 2);
			right.css('border-right-width', w / 2);
		}
	});

	return LookbookView;
});

