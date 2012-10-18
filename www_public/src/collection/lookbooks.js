define([
	'jquery',
	'underscore',
	'backbone',
	'models/lookbook'
], function($, _, Backbone, lookbook){

	var lookbooks = Backbone.Collection.extend({

		model: lookbook,

		initialize: function(){
			console.log('initialized collection!');
		}

	});

	return lookbooks;

});