define([
'jquery',
'lodash',
'backbone',
'plugins/slitslider',
'collection/lookbooks'
], function($, _, Backbone, supersized, lookbooks){

    var AboutView = Backbone.View.extend({


        initialize: function(){

            // http://tympanus.net/codrops/2012/06/05/fullscreen-slit-slider-with-jquery-and-css3/
            var slitslider = $( '#slider' ).slitslider( {
                speed:700,
                translateFactor:230,
                maxAngle:25,
                maxScale: 1,
                autoplay: false,
                keyboard: true
            } );

            $('.about-nav-arrows .left').on('click', function(){
                slitslider.previous();
            });

            $('.about-nav-arrows .right').on('click', function(){
                slitslider.next();
            });

        }

    });

    return AboutView;

});