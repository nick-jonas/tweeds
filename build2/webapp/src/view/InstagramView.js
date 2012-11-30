define([
    'jquery',
    'backbone',
    'collection/instagrams',
    'hbs!template/instagram',
    'hbs!template/instagram-detail'
], function($, Backbone, instagrams, tmpl, tmplDetail){

    var InstagramView = Backbone.View.extend({

        el: $("#instagram"),

        instagramColl  : {},

        events: {
            "click .photo-container":  "onPhotoClick"
        },

        initialize : function(){
            _.bindAll(this, 'onData', 'onPhotoClick', 'showPhotoDetail', 'hidePhotoDetail', 'hidePhotoDetail', 'onKeyup');
            instagramColl = new instagrams();
            console.dir(instagramColl);
            instagramColl.bind('reset', this.onData);
            instagramColl.fetch();
        },

        onData : function(){
            $('#instagram').html(tmpl({ 'photos' : instagramColl.toJSON() }));

            this.trigger('loaded');
        },

        onPhotoClick: function(e){
            var photo_id = $(e.currentTarget).data('id');
            var photo_model = instagramColl.get({id:photo_id});
            this.showPhotoDetail(photo_model);
        },

        showPhotoDetail: function( model ){
            var that = this;
            console.dir(model.toJSON());
            $('.ig-detail').show().html(tmplDetail({'photo' : model.toJSON()}));
            $('.ig-detail').find('.close').bind('click', this.hidePhotoDetail);
            $('.ig-detail').css('display', 'block');
            $('.ig-detail .color-bg').animate({'width': '100%'}, 500, function(){
                $('html, body').css('overflow-y', 'hidden');
            });
            $('.ig-detail .photo-detail-container').delay(600).animate({'opacity': 1}, 250);

            setTimeout(function(){
                $('body').bind('click', that.hidePhotoDetail);
            }, 100);

            $(document).bind('keyup', this.onKeyup);
        },

        onKeyup: function(e){
            if(e.keyCode === 27){
                this.hidePhotoDetail();
            }
        },

        hidePhotoDetail: function(){
            $('html, body').css('overflow-y', 'visible');
            $(document).unbind('keyup', this.onKeyup);
            $('body').unbind('click', this.hidePhotoDetail);
            $('.ig-detail .photo-detail-container').animate({'opacity': 0}, 250);
            $('.ig-detail .color-bg').delay(200).animate({'width': '0%'}, 500, function(){
                $('.ig-detail').css('display', 'none');
            });
        }


    });

    return InstagramView;

});