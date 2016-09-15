Template.layout.helpers({
  'isConnected': function(){
    return (BotInfo.find().count() > 0);
  },
  'showWindowControls': function(){
    return true;
  },
  'currentVersion': "0.3.1",
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
    //Meteor.call('quitApp');
    Electrify.call('quit', [], function(err, msg) {
      console.log(msg);
    });
  },
  'click #minimize-button'(event){
    Electrify.call('minimize', [], function(err, msg) {
      console.log(msg);
    });
  },
  'click #maximize-button'(event){
    Electrify.call('maximize', [], function(err, msg) {
      console.log(msg);
    });
  }
});

Template.layout.onRendered(function(){
    $(".dropdown-button").dropdown();
    $('.modal-trigger').leanModal();
});
