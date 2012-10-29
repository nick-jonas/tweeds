define([
    'jquery',
    'env',
    'backbone',
    'collection/instagrams',
    'hbs!template/instagram'
], function($, Env, Backbone, instagrams, tmpl){

    var InstagramView = Backbone.View.extend({

        coll  : {},

        initialize : function(){
          coll = new instagrams();
          coll.bind('reset', this.onData);
          coll.fetch();
        },

        onData : function(){
            $('#instagram').html(tmpl({ 'photos' : coll.toJSON() }));
        }


    });

    return InstagramView;

});