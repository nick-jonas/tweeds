define([
    'jquery',
    'lodash',
    'backbone',
    'handlebars',
    'collection/products',
    'hbs!template/products',
    'app'
], function($, _, Backbone, Handlebars, products, tmpl, app){

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
            var productRows = [],
                thisRow = [],
                thisProd;
            for(var i = 0; i < coll.length; i++){
                thisProd = coll.toJSON()[i];
                thisRow.push(thisProd);
                if((i + 1) % 3 === 0 && i > 0){
                    productRows.push({'row' : thisRow.splice(0, 3)});
                }
            }

            $('#products').html(tmpl({
                'productRows'      : { 'rows' : productRows },
                'backgrounds'      : coll.backgrounds
            }));

            setTimeout(function(){
                app.trigger('loaded:success');
            }, 500);

        }

    });

    return ProductsView;

});