Template.layout.helpers({
  'isConnected': function(){
    return (BotInfo.find().count() > 0);
  },
  'showWindowControls': function(){
    return Electron.isDesktop();
  },
  'currentVersion': "0.2.0",
  'updates': function() {
    return changelog;
  },
  'doesNewExist': function(){
    if (this.new != null)
      return true;

    return false;
  },
  'doesFixedExist': function(){
    return (this.fixed != null);
  },
  'doesRemovedExist': function(){
    return (this.removed != null);
  },
  'isFirst': function(index){
    return (index == 0);
  },
  'questions': function(){
    return faq;
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
