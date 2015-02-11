window.App = Ember.Application.create();

App.Router.map(function() {
  LOG_TRANSITIONS: true
  this.resource('home')
  this.resource('portfolio')
  this.resource('resume')
});
