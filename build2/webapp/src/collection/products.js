define([
    'jquery',
    'backbone',
    'model/product'
    ], function($, Backbone, product){

        var products = Backbone.Collection.extend({

            model : product,

            url : 'assets/json/products.json',

            backgrounds : {},

            initialize: function(){},

            parse: function(res){
                return res.productPages.products;
            }

        });

        return products;
    });