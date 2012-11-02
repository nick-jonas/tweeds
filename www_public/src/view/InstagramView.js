define([
    'jquery',
    'env',
    'backbone',
    'collection/instagrams',
    'hbs!template/instagram',
    'hbs!template/instagram-detail',
    'app'
], function($, Env, Backbone, instagrams, tmpl, tmplDetail, app){

    var InstagramView = Backbone.View.extend({

        el: $("#instagram"),

        coll  : {},

        events: {
            "click .photo-container":  "onPhotoClick"
        },

        initialize : function(){
          coll = new instagrams();
          coll.bind('reset', this.onData);
          coll.fetch();
        },

        onData : function(){
            $('#instagram').html(tmpl({ 'photos' : coll.toJSON() }));
            app.trigger('loaded:success');
        },

        onPhotoClick: function(e){
            var photo_id = $(e.currentTarget).data('id');
            var photo_model = coll.get({id:photo_id});
           $('.ig-detail').show().html(tmplDetail({'photo' : photo_model.toJSON()}));
           $('.ig-detail').find('.close').bind('click', this.onCloseDetail);
        },

        onCloseDetail: function(e){
            $('.ig-detail').hide();
        }


    });

    return InstagramView;

});