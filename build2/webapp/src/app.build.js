({

// command: $ node ../../r.js -o app.build.js

  baseUrl: "./",
  appUrl: "./",

  paths:{
    libs:           "../assets/js/libs",
    plugins:        "../assets/js/plugins",

    jquery:         "../assets/js/libs/jquery",
    requireLib:     "../assets/js/libs/require",
    lodash:         "../assets/js/libs/lodash",
    backbone:       "../assets/js/libs/backbone",
    hbs:            "../assets/js/libs/hbs",
    handlebars:     "../assets/js/libs/Handlebars",
    underscore:     "../assets/js/libs/hbs/underscore",
    i18nprecompile: "../assets/js/libs/hbs/i18nprecompile",
    json2:          "../assets/js/libs/hbs/json2"
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
  },

  hbs : {
      templateExtension : 'html',
      // if disableI18n is `true` it won't load locales and the i18n helper
      // won't work as well.
      disableI18n : false,
      disableHelpers: true
  },

  include:'requireLib',

  name: "main",

  out: "main-build.js",

  optimize: "none"

})


