define([
    'plugins/scrollorama'
], function(){

    var scroll = {

        scrollorama: {},

        done: false,

        animate: function(target, options){
            // if(this.done === false){
            //     scrollorama = $.scrollorama({ blocks:'.scrollblock' });
            //     console.log('scroller!!');
            //     this.done = true;
            // }
            scrollorama = $.scrollorama({ blocks:'.scrollblock' });
            scrollorama.animate(target, options);
        }
    }

    return scroll;

});