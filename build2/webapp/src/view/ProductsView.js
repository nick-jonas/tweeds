define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'collection/products',
    'hbs!template/products',
    'hbs!template/product-detail',
], function($, _, Backbone, Handlebars, products, tmpl, detailTmpl){

    var ProductsView = Backbone.View.extend({

        'tagName'                   : 'li',
        'className'                 : 'product',
        'productColl'               : {}, // Backbone productCollection
        'that'                      : this,
        'isAnimTrianglesComplete'   : false,

        initialize: function(){
            _.bindAll(this, 'onData', 'onWindowResize', 'openDetail', 'closeDetail', 'onKeyup');
            productColl = new products();
            productColl.bind('reset', this.onData);
            productColl.fetch();
            //$(window).on('resize', this.onWindowResize);
        },

        onData: function(){
            var productRows = [],
                thisRow = [],
                that = this,
                thisProd;

            // Handlebars.registerHelper('getProductRowDepthIndex', function(rowIndex){
            //     return 100 + rowIndex;
            // });

            // Handlebars.registerHelper('getProductBackgroundDepthIndex', function(rowIndex){
            //     return 100 + rowIndex;
            // });

            // for(var i = 0; i < productColl.length; i++){
            //     thisProd = productColl.toJSON()[i];
            //     thisRow.push(thisProd);
            //     if((i + 1) % 3 === 0 && i > 0){
            //         productRows.push({'row' : thisRow.splice(0, 3)});
            //     }
            // }

            // $('#products').html(tmpl({
            //     'productRows'      : { 'rows' : productRows },
            //     'backgrounds'      : productColl.backgrounds
            // }));

            // add click listeners
            $('.product-circle').bind('click', function(){
                var product_id = $(this).attr('id');
                if(product_id !== 'collection-label'){
                    var model = productColl.get(product_id);
                    that.openDetail(model);
                }
            });

        },

        openDetail: function( productModel ){
            var that = this;
            $('body').append(detailTmpl({
                'product'      : productModel.toJSON()
            }));

            // animate left & right
            $('.product-detail .left-half').animate({left:'-49%'}, 600);
            $('.product-detail .right-half').animate({right:'-57%'}, 600, function(){
                $('html, body').css('overflow-y', 'hidden');
                that.showContainer();
            });
            $('.product-detail .close-btn').bind('click', function(){
                that.closeDetail();
            });

            $('.product-detail .product-switcher .switch').bind('click', this.switchProductShot);

            $(document).bind('keyup', this.onKeyup);

            // this.sizeTriangles();
            // this.animateTriangles(this.showContainer);
        },

        onKeyup: function(e){
            if(e.keyCode === 27){
                this.closeDetail();
            }
        },

        closeDetail: function(){

            $('html, body').css('overflow-y', 'visible');

            this.hideContainer();
            // $('.product-detail .left-half .triangle').delay(100).animate({'right': 0}, 400);
            // $('.product-detail .right-half .triangle').delay(100).animate({'left': 0}, 400);
            $('.product-detail .left-half').delay(300).animate({width:'0%'}, 400);
            $('.product-detail .right-half').delay(300).animate({width:'0%'}, 400, function(){

                $('.product-detail').remove();
            });
        },

        switchProductShot: function(e){
            var $back = $('.product-detail .product-switcher .switch.back'),
                $front = $('.product-detail .product-switcher .switch.front'),
                $backImage = $('.product-shot .back'),
                $frontImage = $('.product-shot .front');
            if($(e.currentTarget).hasClass('front')){
                // switch to front
                $('.product-shot').fadeTo(300, 0, function(){
                    $back.removeClass('on');
                    $front.addClass('on');
                    $frontImage.removeClass('hide');
                    $backImage.addClass('hide');
                    $(this).fadeTo(300, 1);
                });
            }else{
                // switch to back
                $('.product-shot').fadeTo(300, 0, function(){
                    $front.removeClass('on');
                    $back.addClass('on');
                    $backImage.removeClass('hide');
                    $frontImage.addClass('hide');
                    $(this).fadeTo(300, 1);
                });
            }
        },

        animateTriangles: function( fn ){
            $('.product-detail .left-half .triangle').animate({'right': -150}, 'slow');
            $('.product-detail .right-half .triangle').animate({'left': -150}, 'slow', function(){
                fn.apply(this);
            });
        },

        showContainer: function(){
            $('.product-detail .container').delay(300).fadeTo(800, 1);
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