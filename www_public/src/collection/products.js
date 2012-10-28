define([
    'jquery',
    'backbone',
    'model/product',
    'app'
    ], function($, Backbone, product, app){

        var products = Backbone.Collection.extend({

            model : product,

            url : '/assets/json/products.json',

            backgrounds : {},

            initialize: function(){},

            parse: function(res){
                this.backgrounds = res.productPages.backgrounds;
                for(var i = 0; i < this.backgrounds.length; i++){
                    this.backgrounds[i] = app.imgSrc + this.backgrounds[i];
                }
                return res.productPages.products;
            }

        });

        return products;
    });