selectedType = new ReactiveVar("normal");

Template.timers.helpers({
  'getSelected'(){
    return selectedType.get();
  },
  'normalSelected'(){
    $('select').material_select();
    return (selectedType.get() == "normal");
  },
  'processResp'(){
    if (this.type == 'normal')
      return this.response;

    var command = this.command;
    return Commands.findOne({name: command}).response;
  },
  'timers'(){
    return Timers.find();
  },
  'commands'(){
    return Commands.find();
  }
});

Template.timers.events({
  'change #timer-type'(event){
    var type = $('#timer-type').val();
    selectedType.set(type);
    Meteor.setTimeout(function(){
      $('select').material_select();
    }, 1);
  },
  'submit #timer-form'(event){
    event.preventDefault();

    var id = $('#timer-hidden').val();
    var type = $('#timer-type').val();
    var frequency = $('#timer-frequency').val();

    var obj = {
      "type": type,
      "frequency": frequency
    };

    console.log(obj);

    if (type == "normal")
      obj.response = $('#timer-response').val();
    else
      obj.command = $('#timer-command').val();

    if (id == "")
      Timers.insert(obj);
    else
      Timers.update({"_id": id}, obj);
  },
  'click #edit-button'(event){
    $('#timer-hidden').val(this._id);
    $('#timer-type').val(this.type);
    selectedType.set(this.type);
    $('#timer-frequency').val(this.frequency);
    $('#timer-response').val(this.response);
    Meteor.setTimeout(function(){
      $('select').material_select();
      $('#timer-command').val(this.command);
    }, 10);

    Materialize.updateTextFields();
  },
  'click #delete-button'(event){
    Timers.remove({"_id": this._id});
  }
});

Template.timers.onRendered(function(){
    $(".dropdown-button").dropdown();
    $('.modal-trigger').leanModal();
    $('select').material_select();
    Materialize.updateTextFields();
});
