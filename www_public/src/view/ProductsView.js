define([
    'jquery',
    'lodash',
    'backbone',
    'collection/products',
    'hbs!template/products'
], function($, _, Backbone, products, tmpl){

    var ProductsView = Backbone.View.extend({

        'tagName'   : 'li',
        'className' : 'product',
        'coll'      : {}, // Backbone collection

        initialize: function(){
            _.bindAll(this, 'reset', 'render');
            coll = new products();
            coll.bind('reset', this.onData);
            coll.fetch();
        },

        onData: function(){
            console.dir(coll.toJSON());
            $('#products').html(tmpl({products:coll.toJSON()}));
        }

    });

    return ProductsView;

});