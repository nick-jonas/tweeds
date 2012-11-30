require(
    [
        "jquery",
        "handlebars",
        "view/NavView",
        "view/InstagramView"
    ],

function($, Handlebars, NavView, InstagramView) {

    Handlebars.registerHelper('capitalize', function(productTitle){
        return productTitle.toUpperCase();
    });

    var that = this,
        navView = new NavView(),
        instagramView = new InstagramView();

    // document.addEventListener("scroll", function(){
    //     console.log($(window).scrollTop());
    // });
});
