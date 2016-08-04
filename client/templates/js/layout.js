Template.layout.helpers({
  'isConnected': function(){
    return (BotInfo.find().count() > 0);
  },
  'showWindowControls': function(){
    return Electron.isDesktop();
  }
});
