define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){

	var AppView = Backbone.View.extend({

		el: $(".container"),

		events: {
			"click .arrow"		: "onArrowClick"
		},

		initialize: function(){

		},

		render: function(){
			return el;
		},

		onArrowClick: function(){
			"clicked arrow!";
		}


	});

	return AppView;
});