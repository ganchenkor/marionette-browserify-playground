$ = require('jquery')
Backbone = require('backbone')
Backbone.$ = $
Marionette = require('backbone.marionette')
template = require('./hb.hbs')
model = new Backbone.Model({message: "hello2"})

app = new Marionette.Application()
app.addRegions
  main: '#main'
app.on 'before:start', ->
  View = Marionette.ItemView.extend
    template: template
    modelEvents:
      'all': 'render'
  view = new View
              model: model
  app.main.show(view)

app.on 'start', ->
  Backbone.history.start()
  model.set({message: "changed"})

app.start()
