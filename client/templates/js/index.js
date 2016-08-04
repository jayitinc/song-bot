Template.layout.helpers({
  'isConnected': function(){
    return Meteor.call('isConnected');
  }
});
