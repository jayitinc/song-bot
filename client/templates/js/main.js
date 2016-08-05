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
    var channel = "#" + event.target.botchan.value.replace('#','');
    Meteor.call('submitLoginInfo', username, password, channel);
    Meteor.call('connectIrc', username, password, channel);
  }
});

Template.main.onRendered(function() {
  $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});
