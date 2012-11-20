define([
    'app',
	'jquery',
	'underscore',
	'backbone'
], function(app, $, _, Backbone){

	var lookbook = Backbone.Model.extend({

		initialize: function(){

		},

        parse: function(res){
            res.image = app.imgSrc + res.image;
            return res;
        }

	});

	return lookbook;

});