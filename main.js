var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var template = require('./hb.hbs');
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

app.on('start', function() {
  Backbone.history.start();
  model.set({message: "changed"});

});

app.start();
