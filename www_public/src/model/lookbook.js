define([
	'underscore',
	'backbone'
], function(_, Backbone){

	var lookbook = Backbone.Model.extend({

		initialize: function(){
			console.log('created lookbook: ' + this.id);
		}

	});

	return lookbook;

});