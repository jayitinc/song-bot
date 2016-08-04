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
    $('#command-name').val('');
    $('#command-response').val('');
    $('#command-perms').val('everyone');
    Materialize.updateTextFields();
  },
  'click #delete-button'(event){
    var id = this._id;
    Commands.remove({'_id': id});
  },
  'click #edit-button'(event){
    $('#command-name').val(this.name);
    $('#command-response').val(this.response);
    $('#command-perms').val(this.permissions);
    Materialize.updateTextFields();
  }
});
