Meteor.methods({
  'connectIrc'(username, password, channel){
    ircoptions.identity.username = username;
    ircoptions.identity.password = password;
    ircoptions.channels[0] = channel;
    client = new tmi.client(ircoptions);
    client.connect();
  },
  'isConnected'(){
    return (client.readyState() == "OPEN");
  },
  'submitLoginInfo'(username, password, channel){
    BotInfo.insert({
      "username": username,
      "password": password,
      "channel": channel
    });
  }
});
