define([
    'jquery',
    'backbone',
    'model/product'
    ], function($, Backbone, product){

        var products = Backbone.Collection.extend({

            model : product,

            url : '/assets/json/products.json',

            backgrounds : {},

            initialize: function(){},

            parse: function(res){
                this.backgrounds = res.productPages.backgrounds;
                return res.productPages.products;
            }

        });

        return products;
    });