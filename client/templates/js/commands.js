//Helpers
Template.commands.helpers({
  'commands': function(){
    return Commands.find();
  }
});

//Events
Template.commands.events({
  'submit #command-form'(event){
    //Grab form values
    event.preventDefault();
    var commandName = event.target.name.value;
    var commandResponse = event.target.response.value;
    var commandPermissions = event.target.permissions.value;

    //Add or edit command
    Meteor.call('upsertCommand', commandName, commandResponse, commandPermissions);

    //Reset fields
    //TODO: Reset the form fields.
  }
});
