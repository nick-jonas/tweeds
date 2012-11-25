require(
    [
        "jquery",
        "handlebars",
        "view/AppView",
        "view/LookbookView",
        "view/AboutView",
        "view/ProductsView"
    ],

function($, Handlebars, AppView, LookbookView, AboutView, ProductsView) {

    Handlebars.registerHelper('capitalize', function(productTitle){
        return productTitle.toUpperCase();
    });

    var appView = new AppView();
    var lookbookView = new LookbookView();
    var aboutView = new AboutView();
    var productsView = new ProductsView();
});

