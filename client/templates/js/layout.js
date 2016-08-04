Template.layout.helpers({
  'isConnected': function(){
    return (BotInfo.find().count() > 0);
  },
  'showWindowControls': function(){
    return Electron.isDesktop();
  }
});

Template.layout.events({
  'click #exit-button'(event){
    //Call the quit method
    Meteor.call('quit');
  }
});
