define([
    'jquery',
    'lodash',
    'backbone',
    'handlebars',
    'collection/products',
    'hbs!template/products',
    'hbs!template/product-detail',
    'app'
], function($, _, Backbone, Handlebars, products, tmpl, detailTmpl, app){

    var ProductsView = Backbone.View.extend({

        'tagName'                   : 'li',
        'className'                 : 'product',
        'productColl'               : {}, // Backbone productCollection
        'that'                      : this,
        'isAnimTrianglesComplete'   : false,

        initialize: function(){
            _.bindAll(this, 'reset', 'render', 'onData', 'onWindowResize', 'openDetail', 'closeDetail');
            productColl = new products();
            productColl.bind('reset', this.onData);
            productColl.fetch();
            $(window).on('resize', this.onWindowResize);
        },

        onData: function(){
            var productRows = [],
                thisRow = [],
                that = this,
                thisProd;

            Handlebars.registerHelper('getProductRowDepthIndex', function(rowIndex){
                return 100 + rowIndex;
            });

            Handlebars.registerHelper('getProductBackgroundDepthIndex', function(rowIndex){
                return 100 + rowIndex;
            });

            for(var i = 0; i < productColl.length; i++){
                thisProd = productColl.toJSON()[i];
                thisRow.push(thisProd);
                if((i + 1) % 3 === 0 && i > 0){
                    productRows.push({'row' : thisRow.splice(0, 3)});
                }
            }

            $('#products').html(tmpl({
                'productRows'      : { 'rows' : productRows },
                'backgrounds'      : productColl.backgrounds
            }));

            // add click listeners
            $('.product-circle').bind('click', function(){
                var product_id = $(this).attr('id');
                var model = productColl.get(product_id);
                that.openDetail(model);
            });

            app.trigger('loaded:success');

        },

        openDetail: function( productModel ){
            var that = this;
            $('#products').append(detailTmpl({
                'product'      : productModel.toJSON()
            }));
            $('body').css('overflow', 'hidden');
            // animate left & right
            $('.product-detail .left-half').animate({width:'50%'}, 400);
            $('.product-detail .right-half').animate({width:'50%'}, 400);
            $('.product-detail .close-btn').bind('click', function(){
                that.closeDetail();
            });
            this.sizeTriangles();
            this.animateTriangles(this.showContainer);
        },

        closeDetail: function(){
            this.hideContainer();
            $('.product-detail .left-half .triangle').delay(100).animate({'right': 0}, 400);
            $('.product-detail .right-half .triangle').delay(100).animate({'left': 0}, 400);
            $('.product-detail .left-half').delay(300).animate({width:'0%'}, 400);
            $('.product-detail .right-half').delay(300).animate({width:'0%'}, 400, function(){
                $('body').css('overflow', 'visible');
                $('.product-detail').remove();
            });
        },

        animateTriangles: function( fn ){
            $('.product-detail .left-half .triangle').animate({'right': -150}, 'slow');
            $('.product-detail .right-half .triangle').animate({'left': -150}, 'slow', function(){
                fn.apply(this);
            });
        },

        showContainer: function(){
            $('.product-detail .container').fadeTo(1000, 1);
        },

        hideContainer: function(){
            $('.product-detail .container').fadeTo(200, 0);
        },

        sizeTriangles: function(){
            var w = $(window).width(),
                h = $(window).height();
            $('.product-detail .left-half .triangle').css('border-top-width', (h / 2) + 'px');
            $('.product-detail .right-half .triangle').css('border-bottom-width', (h / 2) + 'px');
        },

        onWindowResize: function(){
            this.sizeTriangles();
        }

    });

    return ProductsView;

});