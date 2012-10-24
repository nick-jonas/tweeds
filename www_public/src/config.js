// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // JavaScript folders.
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",

    // Libraries.
    jquery: "../assets/js/libs/jquery",
    lodash: "../assets/js/libs/lodash",
    backbone: "../assets/js/libs/backbone",
    underscore: "../assets/js/libs/underscore-min",
    // Just a short cut so we can put our html outside the js dir
    // When you have HTML/CSS designers this aids in keeping them out of the js directory
    templates: '../templates'
  },

  shim: {
    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    },

    "plugins/text": ["require"],

    // Backbone.LayoutManager depends on Backbone.
    "plugins/backbone.layoutmanager": ["backbone"]
  }

});
