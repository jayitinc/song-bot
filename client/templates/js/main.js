Template.main.helpers({
  'isBotInfo': function(){
    return (BotInfo.find().count() > 0);
  },
  'showWindowControls': function(){
    return Electron.isDesktop();
  }
});

Template.main.events({
  'click #oauth-button'(event){
    console.log("Opening TwitchApps TMI...");
    Electron.openExternal("http://twitchapps.com/tmi");
  },
  'submit #login-form'(event){
    event.preventDefault();
    var username = event.target.botuser.value;
    var password = event.target.botpass.value;
    Meteor.call('submitLoginInfo', username, password);
    Meteor.call('connectIrc', username, password);
  }
});
