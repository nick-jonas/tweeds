define([
    'app',
    'jquery',
    'backbone'
], function(app, $, Backbone){

    var product = Backbone.Model.extend({

        initialize : function(){},

        parse : function(res){
            // adjust src path for retina screen
            res.imgSmall = app.imgSrc + res.imgSmall;
            res.imgLarge = app.imgSrc + res.imgLarge;
            return res;
        }

    });

    return product;

});