define([
    'jquery',
    'lodash',
    'backbone',
    'app',
    'view/Scroll',
    'view/LookbookView',
    'view/ProductsView',
    'view/InstagramView'
], function($, _, Backbone, app, scroll, LookbookView, ProductsView, InstagramView){

	var AppView = Backbone.View.extend({

		el: $(".container"),

        currentLoadIndex : 0,

        totalLoad: 2,

		initialize: function(){
            var that = this;
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
                    //this.instagram = new InstagramView();
                    break;
            }
        },

        onLoadAllComplete: function(){


            // young buffalos wear tweeds
            scroll.animate('#young-buffalo-wear-tweeds', {delay:0, duration:600, property:'top', start:800, end: -300});

            // product backgrounds
            //scroll.animate('.products-bg', {delay:0, duration:2000, property:'top', start:900, end: -3000});
            scroll.animate('#products .backgrounds', {delay:0, duration:2000, property:'top', start:-352, end:-1000});

            // product circles
            var totalStartY = 0;
            $('.product-circle').each(function(i){
                var top = parseInt($(this).css('top'), 10),
                    id = '#' + $(this).attr('id'),
                    row = Math.floor(i / 3),
                    start = totalStartY + top + (i * 500),
                    end = top + (row * 650);

                console.log(start, end);

                var totalDelay = 0;//Math.floor((totalStartY / 1000)) * 100;
                scroll.animate(id, { delay: totalDelay + (row * 600), duration: 300, property:'top', start:start, end:end });
            });

            // mask transition
            scroll.animate('#mask-transition', {delay:500, duration: 300, property:'margin-top', start:175, end: 0});
            scroll.animate('.forest img', {delay:500, duration: 600, property:'-webkit-mask-position', start:0, end:300});


            // STORY
            scroll.animate('#story', {delay:800, duration:6000, property:'top', start:0, end:-325, pin:true});

            scroll.animate('#kolohe .top', {delay:800, duration:200, property:'top', start:-630, end:0});
            scroll.animate('#kolohe .bottom', {delay:800, duration:200, property:'top', start:1100, end:0});
            scroll.animate('#kolohe .kolohe-text', {delay:950, duration:100, property:'opacity', start:0, end:1});

            scroll.animate('#about .top', {delay:1400, duration:200, property:'top', start:-800, end:0});
            scroll.animate('#about .bottom', {delay:1400, duration:200, property:'top', start:1100, end:0});
            scroll.animate('#about .about-text', {delay:1530, duration:100, property:'opacity', start:0, end:1});


            // buy screen
            scroll.animate('#buy', {delay:2000, duration:200, property:'top', start:-700, end:-1000});

        }

	});

	return AppView;
});