define([
    'jquery',
    'lodash',
    'backbone',
    'app',
    'view/Scroll',
    'view/LookbookView',
    'view/ProductsView',
    'view/InstagramView',
    'plugins/scrollorama'
], function($, _, Backbone, app, scroll, LookbookView, ProductsView, InstagramView){

	var AppView = Backbone.View.extend({

		el: $(".container"),

        currentLoadIndex : 0,

        totalLoad: 3,

        myInterval: null,

        scrollorama: {},

        currentHeight: 0,

		initialize: function(){

            _.bindAll(this, 'loadNext', 'onLoadAllComplete', 'initApp', 'animateScrollBlocks', 'onWindowResize');
            var that = this;
            $(window).on('resize', this.onWindowResize);
            this.onWindowResize();

            app.on('loaded:success', function(){
                that.currentLoadIndex++;
                if(that.currentLoadIndex == that.totalLoad){
                    that.onLoadAllComplete();
                }else{
                    that.loadNext();
                }
            });
            this.loadNext();
		},

        onWindowResize: function(){
            var w = $(window).width(),
                h = $(window).height();
            currentHeight = h;
            // $('#lookbook #supersized').css('height', h + 'px');
            // $('.scrollblock').each(function(index){
            //     var pos = $(this).data('position');
            //     $(this).css('height', h + 'px');
            //     if($(this).css('top') !== 0) {
            //         $(this).css('top', (pos * h));
            //         console.log('pos: ' + (pos * h ));
            //     }
            // });

        },

		render: function(){
			return el;
		},

		loadNext: function(){
            switch(this.currentLoadIndex){
                case 0:
                    this.lookbook = new LookbookView();
                    break;
                case 1:
                    this.products = new ProductsView();
                    break;
                case 2:
                    this.instagram = new InstagramView();
                    break;
            }
        },

        onLoadAllComplete: function(){
            var that = this;

            if(window.skipPreloader){
                this.initApp();
            }
            else if(window.isLoaded){
                this.animateOutPreloader();
                this.initApp();
            }else{
                var checkTextValue = setTimeout(function() {
                    if (window.isLoaded){
                        that.animateOutPreloader();
                        that.initApp();
                    } else {
                        setTimeout(arguments.callee, 1000);
                    }
                }, 1000);
            }
        },

        animateOutPreloader: function(){
            $('#preloader-white').animate({'height': '0px'}, 300, function(){
                $('.preloader').fadeTo(500, 0, function(){
                    $(this).remove();
                });
            });
        },

        initApp: function(){
            var that = this;
            // scrollorama
            that.animateScrollBlocks();
            if(app.scrollTo){ // set in router
                $('html, body').animate({scrollTop:app.scrollTo}, 'slow');
            }
            this.onWindowResize();
        },

        animateScrollBlocks: function(){
            scrollorama = $.scrollorama({ blocks:'.scrollblock' });

            var delayCount = 0;

            // LOOKBOOK
            //------------------------------------------------------------------------------------------------------------
            // pin container
            scroll.animate('#lookbook-container', {delay:0, duration:900, property:'top', start:0, end:0, pin:true});
            // animate inner
            scroll.animate('#young-buffalo-wear-tweeds .text-block', {delay:300, duration:600, property:'top', start:-1505, end:0});
            scroll.animate('#young-buffalo-wear-tweeds .left', {delay:0, duration:300, property:'left', start:0, end:56, usePercentage: true, easing:'easeOutQuad'});
            scroll.animate('#young-buffalo-wear-tweeds .right', {delay:0, duration:300, property:'left', start:100, end:44, usePercentage: true, easing:'easeOutQuad'});
            delayCount += 900;

            // PRODUCTS
            //------------------------------------------------------------------------------------------------------------
            // pin container
            scroll.animate('#products-container', {delay:delayCount, duration:1900, property:'top', start:0, end:0, pin:true});
            // animate background
            var $secondBackground = $('#products-container #products .backgrounds .products-bg:eq(1)');
            scroll.animate($secondBackground, {delay:delayCount + 500, duration:300, property:'top', start:800, end:0});
            // animate product circles
            $('.product-circle').each(function(i){
                var top = parseInt($(this).css('top'), 10),
                    id = '#' + $(this).attr('id'),
                    row = Math.floor(i / 3),
                    start = delayCount + top + ((i - (row * 3)) * 600),
                    end = top,// + (row * -650),
                    inDelay = (delayCount - 300) + (row * 800);

                scroll.animate(id, {delay: inDelay, duration: 600, property:'top', start:start, end:end, easing:'easeOutQuad'});
            });
            delayCount += 1900;

            // STORY
            //------------------------------------------------------------------------------------------------------------
            // pin background
            scroll.animate('#story', {delay:delayCount, duration:300, property:'top', start:0, end:0, pin:true});

            scroll.animate('#kolohe .top', {delay:800, duration:500, property:'top', start:-630, end:0, easing:'easeOutQuad'});
            scroll.animate('#kolohe .bottom', {delay:800, duration:500, property:'top', start:1100, end:0, easing:'easeOutQuad'});
            scroll.animate('#kolohe .kolohe-text', {delay:1350, duration:200, property:'opacity', start:0, end:1});

            scroll.animate('#about .top', {delay:1400, duration:500, property:'top', start:-800, end:0, easing:'easeOutQuad'});
            scroll.animate('#about .bottom', {delay:1400, duration:500, property:'top', start:1100, end:0, easing:'easeOutQuad'});
            scroll.animate('#about .about-text', {delay:2030, duration:200, property:'opacity', start:0, end:1});
        }

	});

	return AppView;
});