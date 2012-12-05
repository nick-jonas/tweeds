define([
    'jquery',
    'backbone',
    'model/instagram'
], function($, Backbone, instagram){

    var instagrams = Backbone.Collection.extend({

        model: instagram,
        key: '3d9bd9f50a30499ca9387b41e9fc924a',
        //key: '0f0dfb220860435e8ea0b15d6a8d5785',
        tag: 'youngbuffalo',
        url: '',
        user_ids : ['42408237', /* tweeds_ */
                    '215651854', /* lowee_ */
                    '217900764' /*  koloheandino_official */
                    ],

        initialize: function(){
            this.url = 'https://api.instagram.com/v1/tags/' + this.tag + '/media/recent?client_id=' + this.key + '&callback=?';
        },

        parse: function(res){
            var pics = res.data,
                that = this;

            // pics = pics.filter(function(el){
            //     return that.user_ids.indexOf(el.user.id) >= 0;
            // });

            return pics;
        }
    });

    return instagrams;

});