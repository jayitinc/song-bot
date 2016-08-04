Template.layout.helpers({
  'isConnected': function(){
    return Meteor.call('isConnected');
  },
  'showWindowControls': function(){
    return Electron.isDesktop();
  }
});
