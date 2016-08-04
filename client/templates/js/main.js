Template.main.helpers({
  'isBotInfo': function(){
    return (BotInfo.find().count() > 0);
  }
});
