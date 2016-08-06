Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function(){
  this.render('main');
});

Router.route('/commands');
Router.route('/timers');
