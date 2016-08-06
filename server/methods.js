Meteor.methods({
  'connectIrc'(username, password, channel){
    ircoptions.identity.username = username;
    ircoptions.identity.password = password;
    ircoptions.channels[0] = channel;
    client = new tmi.client(ircoptions);
    client.connect();

    //Define bot functionality
    //TODO: Move this somewhere more organized.
    client.on('message', function(channel, userstate, message, self){
      //Ignore message if from the bot
      if (self) return;

      //Split the message into parts
      var parts = message.split(' ');

      //Handle the message
      switch(userstate['message-type']){
        case 'chat':
          var commandCursor = Commands.find();
          Fiber(function(){
            commandCursor.forEach(function(row){
              if (message.startsWith(row.name)){
                var response = row.response
                  .replace('%target%', parts[1]);
                client.say(channel, response);
              }
            });
          }).run();
          break;
      }
    });
    //Start timers
    var timerCursor = Timers.find();
    timerCursor.forEach(function(row){
      Meteor.setInterval(function(){
        if (row.type == "normal"){
          client.say(ircoptions.channels[0], row.response);
        }
        else{
          client.say(ircoptions.channels[0], Commands.findOne({name: row.command}).response);
        }
      }, row.frequency * 60000);
      console.log("Timer activated!");
    });
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
  },
  'upsertCommand'(name, response, permissions){
    Commands.upsert({"name":name},{
      "name": name,
      "response": response,
      "permissions": permissions
    });
  },
  'quit'(){
    process.exit();
  }
});
