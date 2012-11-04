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
            //scroll.animate('#lookbook-container', { duration:500, property:'top', start:0, pin:true });

            // young buffalos wear tweeds
            scroll.animate('#young-buffalo-wear-tweeds', {delay:0, duration:300, property:'top', start:800, end: -700});

            // product backgrounds
            scroll.animate('.products-bg', {delay:0, duration:2000, property:'top', start:900, end: -3000});

            // product circles
            var totalStartY = 900;
            $('.product-circle').each(function(i){
                var top = parseInt($(this).css('top'), 10),
                    id = '#' + $(this).attr('id'),
                    row = Math.floor(i / 3),
                    start = totalStartY + top + (i * 500),
                    end = top + 300;

                var totalDelay = 0;//Math.floor((totalStartY / 1000)) * 100;
                scroll.animate(id, { delay: totalDelay + (row * 400), duration: 300, property:'top', start:start, end:end });
            });



        }

	});

	return AppView;
});