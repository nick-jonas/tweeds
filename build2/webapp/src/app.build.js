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

  include:'requireLib',

  name: "main",

  out: "main-build.js",

  optimize: "none"

})


