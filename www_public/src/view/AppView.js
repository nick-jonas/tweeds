define([
    'jquery',
    'lodash',
    'backbone',
    'app',
    'view/LookbookView',
    'view/ProductsView',
    'view/InstagramView'
], function($, _, Backbone, app, LookbookView, ProductsView, InstagramView){

	var AppView = Backbone.View.extend({

		el: $(".container"),

        currentLoadIndex : 0,

		initialize: function(){
            var that = this;
            app.on('loaded:success', function(){
                that.loadNext();
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
                    this.instagram = new InstagramView();
                    break;
            }

            this.currentLoadIndex++;

        }

	});

	return AppView;
});