define([
	'jquery',
	'underscore',
	'backbone',
	'collection/lookbooks',
	'plugins/text!templates/lookbook.html'
], function($, _, Backbone, lookbooks, lookbookTemplate){

	var LookbookView = Backbone.View.extend({

		// tagName: "li",

		// className: "lookbook-item",

		// template: $(lookbookTemplate),

		events: {
			"click .arrow"		: "onArrowClick"
		},

		initialize: function(){
			_.bindAll(this, 'render', 'remove');

			var that = this;
			this.collection = new lookbooks();
			this.collection.fetch({
				'success':function(coll, res){
					that.render();
				},
				'error':function(coll, res){
					console.log('error fetching lookbook!');
					console.dir(res);
				}
			});
		},

		onArrowClick: function(){
			console.log('clicked arrow!');
		},

		render: function(){
			console.log('render!');
		}
	});

	return LookbookView;
});

