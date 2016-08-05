Template.layout.helpers({
  'isConnected': function(){
    return (BotInfo.find().count() > 0);
  },
  'showWindowControls': function(){
    return Electron.isDesktop();
  },
  'currentVersion': "0.2.0",
  'updates': function() {
    return changelogJson;
  },
  'doesNewExist': function(){
    if (this.new != null)
      return true;

    return false;
  },
  'doesFixedExist': function(){
    if (this.fixed != null)
      return true;

    return false;
  },
  'doesRemovedExist': function(){
    if (this.removed != null)
      return true;

    return false;
  },
  'isFirst': function(index){
    return (index == 0);
  }
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
