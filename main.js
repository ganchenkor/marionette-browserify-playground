var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var mmenu = require('jQuery.mmenu');
// $.mmenu = require('./node_modules/jQuery.mmenu/src/js/umd/jquery.mmenu.umd.all.js');
// window.mmenu = require('jQuery.mmenu');
var template = require('./hb.hbs');
//var template = require('./tmpl.html');
// var template = require('./jade.jade');
var model = new Backbone.Model({message: "hello2"});

var app = new Marionette.Application();
app.addRegions({
  main: '#main'
});
app.on('before:start', function(){
  var View = Marionette.ItemView.extend({
    template: template,
    modelEvents: {
      'all': 'render'
    }
  });
  var view = new View({model: model});
  app.main.show(view);
});

$(function() {
  $('nav#menu').mmenu();
});

app.on('start', function() {
  Backbone.history.start();
  model.set({message: "changed"});

});

app.start();
