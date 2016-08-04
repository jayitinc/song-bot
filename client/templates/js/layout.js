Template.layout.helpers({
  'isConnected': function(){
    return (BotInfo.find().count() > 0);
  },
  'showWindowControls': function(){
    return Electron.isDesktop();
  },
  'version': "0.2.0"
});

Template.layout.events({
  'click #exit-button'(event){
    //Call the quit method
    Meteor.call('quit');
  }
});

Template.layout.onRendered(function(){
    $(".dropdown-button").dropdown();
    $('.modal-trigger').leanModal();
});
