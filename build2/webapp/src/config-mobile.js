// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main-mobile"],

  pragmasOnSave: {
      //removes Handlebars.Parser code (used to compile template strings) set
      //it to `false` if you need to parse template strings even after build
      excludeHbsParser : true,
      // kills the entire plugin set once it's built.
      excludeHbs: true,
      // removes i18n precompiler, handlebars and json2
      excludeAfterBuild: true
  },

  paths: {

    // Comment out for development
    //main: "main-build-mobile",

    // JavaScript folders.
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",

    // Libraries.
    jquery:         "../assets/js/libs/jquery",
    // modernizr:      "../assets/js/libs/modernizr",
    lodash:         "../assets/js/libs/lodash",
    backbone:       "../assets/js/libs/backbone",
    hbs:            "../assets/js/libs/hbs",
    handlebars:     "../assets/js/libs/Handlebars",
    underscore:     "../assets/js/libs/hbs/underscore",
    i18nprecompile: "../assets/js/libs/hbs/i18nprecompile",
    json2:          "../assets/js/libs/hbs/json2",
    // Just a short cut so we can put our html outside the js dir
    // When you have HTML/CSS designers this aids in keeping them out of the js directory
    templates: './template'
  },

  locale: "en_ca",

  // default plugin settings, listing here just as a reference
  hbs : {
      templateExtension : 'html',
      // if disableI18n is `true` it won't load locales and the i18n helper
      // won't work as well.
      disableI18n : false,
      disableHelpers: true
  },

  shim: {
    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    },

    "plugins/text": ["require"],
    "plugins/cond": ["jquery"],
    "plugins/slitslider": ["jquery", "plugins/cond"]
  }

});
