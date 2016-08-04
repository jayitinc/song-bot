import { Meteor } from 'meteor/meteor';

tmi = require("tmi.js");

ircoptions = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "",
        password: ""
    },
    channels: ["#"]
};

client = new tmi.client(ircoptions);

Meteor.startup(() => {
  if (BotInfo.find().count() > 0)
  {
    var botInfo = BotInfo.findOne();
    Meteor.call('connectIrc', botInfo.username, botInfo.password, botInfo.channel);
  }
  else
  {
    console.log("Could not connect automatically. No bot login info on record.");
  }
});
