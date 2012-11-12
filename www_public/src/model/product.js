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
            res.imgLargeFront = app.imgSrc + res.imgLargeFront;
            res.imgLargeBack = app.imgSrc + res.imgLargeBack;
            return res;
        }

    });

    return product;

});