define([
	'jquery',
	'backbone',
	'model/lookbook'
], function($, Backbone, lookbook){

	var lookbooks = Backbone.Collection.extend({

		model: lookbook,

		url: '/assets/json/lookbook.json',

		initialize: function(){
		},

		parse: function(res){
			return res['sections'];
		}
	});

	return lookbooks;

});