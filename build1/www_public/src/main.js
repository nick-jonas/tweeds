require([
  // Application.
  "app",

  // Main Router.
  "router",
  "handlebars",
  "view/NavView",
  "view/AppView"
],

function(app, Router, Handlebars, NavView, AppView) {

  // Handlebars debugger
  Handlebars.registerHelper("debug", function(optionalValue) {
    console.log("Current Context");
    console.log("====================");
    console.log(this);
    if (optionalValue) {
        console.log("Value");
        console.log("====================");
        console.log(optionalValue);
    }
  });

  Handlebars.registerHelper('capitalize', function(productTitle){
      return productTitle.toUpperCase();
  });

  // Define your master router on the application namespace and trigger all
  // navigation from this instance.
  app.router = new Router();

  //Backbone.history.start({ pushState: false, root: app.root });

  app.isRetina = ((window.devicePixelRatio===undefined?1:window.devicePixelRatio)>1);
  app.imgSrc = (app.isRetina) ? 'assets/img/src2x' : 'assets/img/src';

  app.navView   = new NavView();

  //app.lookView  = new LookbookView();
  //app.productsView = new ProductsView();
  //app.instaView = new InstagramView();

  app.myApp = new AppView();


  // All navigation that is relative should be passed through the navigate
  // method, to be processed by the router. If the link has a `data-bypass`
  // attribute, bypass the delegation completely.
  $(document).on("click", "a[href]:not([data-bypass])", function(evt) {
    // Get the absolute anchor href.
    var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
    // Get the absolute root.
    var root = location.protocol + "//" + location.host + app.root;

    // Ensure the root is part of the anchor href, meaning it's relative.
    if (href.prop.slice(0, root.length) === root) {
      // Stop the default event to ensure the link will not cause a page
      // refresh.
      evt.preventDefault();

      // `Backbone.history.navigate` is sufficient for all Routers and will
      // trigger the correct events. The Router's internal `navigate` method
      // calls this anyways.  The fragment is sliced from the root.
      Backbone.history.navigate(href.attr, true);
    }
  });

});
