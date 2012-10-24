define([
	'jquery',
	'underscore',
	'backbone',
	'model/lookbook'
], function($, _, Backbone, lookbook){

	var lookbooks = Backbone.Collection.extend({

		model: lookbook,

		url: '/assets/json/lookbook.json',

		initialize: function(){
			console.log('initialized collection!');
		},

		parse: function(res){
			console.dir(res);
		}
	});

	return lookbooks;

});