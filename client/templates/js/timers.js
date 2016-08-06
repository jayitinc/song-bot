selectedType = new ReactiveVar("normal");

Template.timers.helpers({
  'getSelected'(){
    return selectedType.get();
  },
  'normalSelected'(){
    $('select').material_select();
    return (selectedType.get() == "normal");
  }
});

Template.timers.events({
  'change #timer-type'(event){
    var type = $('#timer-type').val();
    selectedType.set(type);
    Meteor.setTimeout(function(){
      $('select').material_select();
    }, 1);
  }
});

Template.timers.onRendered(function(){
    $(".dropdown-button").dropdown();
    $('.modal-trigger').leanModal();
    $('select').material_select();
    Materialize.updateTextFields();
});
