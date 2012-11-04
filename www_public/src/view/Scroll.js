define([
    'plugins/scrollorama'
], function(){

    var scroll = {

        scrollorama: {},

        animate: function(target, options){
            scrollorama = $.scrollorama({ blocks:'.scrollblock' });
            scrollorama.animate(target, options);
        }
    }

    return scroll;

});