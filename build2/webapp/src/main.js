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

    var that = this,
        appView = new AppView(),
        lookbookView = new LookbookView(),
        aboutView = new AboutView(),
        productsView = new ProductsView(),
        navView = new NavView(),
        youngBuff = new YoungBuffalo().initialize(),
        loaded = false,
        loadRatio = 0,
        intervalCount = 0,
        whiteHeight = 190,
        intervalCount = 1000,
        timeout = 5000, // seconds
        interval = setInterval(function(){
            if(loadRatio < 0.5) {
                loadRatio += 0.05;
                var newHeight = (1 - loadRatio) * whiteHeight;
                $('#preloader-white').stop().animate({'height': newHeight + 'px'}, 300);
            }
            intervalCount++;
            if(intervalCount >= timeout){
                // timeout, load
                that.animateOutPreloader();
            }
        }, intervalCount);

    setTimeout(function(){
        var instagramView = new InstagramView();
        instagramView.bind('loaded', that.onLoaded);
    }, 100);

    this.onLoaded = function(){
       that.animateOutPreloader();
    };

    this.animateOutPreloader = function(){
        $('#preloader-white').stop();
        clearInterval(interval);
        $('#preloader-white').animate({'height': '0px'}, 600, function(){
            $('.preloader').fadeTo(500, 0, function(){
                $(this).remove();
            });
        });
    };

});
