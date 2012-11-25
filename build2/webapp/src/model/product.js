define([
    'jquery',
    'backbone'
], function($, Backbone){

    var product = Backbone.Model.extend({

        // initialize : function(){},

        parse : function(res){
            // adjust src path for retina screen
            var imgSrc = 'assets/img/src'
            res.imgSmall = imgSrc + res.imgSmall;
            res.imgLargeFront = imgSrc + res.imgLargeFront;
            res.imgLargeBack = imgSrc + res.imgLargeBack;
            return res;
        }

    });

    return product;

});