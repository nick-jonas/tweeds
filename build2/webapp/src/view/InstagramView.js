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
            _.bindAll(this, 'onData', 'onPhotoClick', 'showPhotoDetail', 'hidePhotoDetail');
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
            this.showPhotoDetail(photo_model);
        },

        showPhotoDetail: function( model ){
            $('.ig-detail').show().html(tmplDetail({'photo' : model.toJSON()}));
            $('.ig-detail').find('.close').bind('click', this.hidePhotoDetail);
            $('.ig-detail').animate({'height': '100%'}, 400, function(){

            });
        },

        hidePhotoDetail: function(){
            $('.ig-detail').animate({'height': '0%'}, 400, function(){
                $('.ig-detail').hide();
            });
        }


    });

    return InstagramView;

});