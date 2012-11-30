require(
    [
        "jquery",
        "handlebars",
        "view/AppView",
        "view/NavView",
        "view/LookbookView",
        "view/AboutView",
        "view/ProductsView",
        "view/InstagramView",
        "view/YoungBuffalo"
    ],

function($, Handlebars, AppView, NavView, LookbookView, AboutView, ProductsView, InstagramView, YoungBuffalo) {

    $('#preloader-white').css('display', 'block');
    $('.preloader-black').css('display', 'block');

    Handlebars.registerHelper('capitalize', function(productTitle){
        return productTitle.toUpperCase();
    });

    Handlebars.registerHelper('encode', function(url){
        return encodeURIComponent(url);
    });

    var that = this,
        appView = new AppView(),
        aboutView = new AboutView(),
        productsView = new ProductsView(),
        navView = new NavView(),
        instagramLoaded = false,
        loadRatio = 1,
        whiteHeight = 190,
        intervalCount = 1000,
        timeout = 5000, // seconds
        lastHeight = 190,
        newHeight = 0,
        interval = setInterval(function(){
            if(loadRatio > 0.5) {
                loadRatio -= 0.05;
                //console.log(loadRatio);
                newHeight = (loadRatio * whiteHeight);

                $('#preloader-white').animate({height: newHeight + 'px'}, 300);
                lastHeight = newHeight;
            }
            intervalCount++;
            if(window.isLoaded === true){
                // timeout, load
                that.animateOutPreloader();
            }
        }, intervalCount);

    setTimeout(function(){
        var instagramView = new InstagramView();
        //instagramView.bind('loaded', that.onInstagramLoaded);
    }, 100);

    // this.onLoaded = function(){
    //    that.animateOutPreloader();
    // };

    this.animateOutPreloader = function(){
        var lookbookView = new LookbookView(),
            youngBuff = new YoungBuffalo().initialize();
        $('#preloader-white').stop();
        clearInterval(interval);
        $('#preloader-white').animate({'height': '0px'}, 600, function(){
            $('.preloader').fadeTo(500, 0, function(){
                $(this).remove();
            });
        });
    };

});
