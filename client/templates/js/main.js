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
  }
});
