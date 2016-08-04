Meteor.methods({
  'connectIrc'(username, password){
    ircoptions.identity.username = username;
    ircoptions.identity.password = password;
    client = new tmi.client(ircoptions);
    client.connect();
  },
  'isConnected'(){
    return (client.readyState() == "OPEN");
  }
});
