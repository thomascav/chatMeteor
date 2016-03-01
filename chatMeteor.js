Messages = new Mongo.Collection('messages');

if (Meteor.isClient) {
    Template.messages.helpers({
    messages: function () {
      return Messages.find({});
    }
  });
}
Template.messages.events({
    'keypress textarea' : function(e) {
        if (e.keyCode == 13) {//enter key pressed
            var value = instance.find('textarea').value;
            instance.find('textarea').value = '';

            Messages.insert ({
                messa:value,
                timestamp: new Date ()
                // user: Meteor.userId()
            });
        }
    }
})
}
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
