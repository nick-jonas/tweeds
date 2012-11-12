define([
  // Application.
  "app"
],

function(app) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({

    routes: {
      ""            : "index",
      "lookbook"    : "lookbook",
      "collection"  : "collection",
      "products"    : "collection",
      "about"       : "about",
      "story"       : "about",
      "buy"         : "buy",
      "instagram"   : "instagram"
    },

    initialize: function(){
        document.addEventListener("scroll", function(){
            //console.log($(window).scrollTop());
        });
    },

    index: function() {

    },

    lookbook: function(){
      app.scrollTo = app.positions.collection;
    },

    collection: function() {
        app.scrollTo = app.positions.collection;
    },

    about: function(){
        app.scrollTo = app.positions.about;
    },

    buy: function(){
        app.scrollTo = app.positions.buy;
    },

    ig: function(){
        app.scrollTo = app.positions.ig;
    }
  });

  return Router;

});
