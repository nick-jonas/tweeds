define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){

	var lookbook = Backbone.Model.extend({

		initialize: function(){

		},

        parse: function(res){
            //res.image = app.imgSrc + res.image;
            res.image = 'assets/img/src' + res.image;
            return res;
        }

	});

	return lookbook;

});