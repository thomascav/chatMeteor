Messages = new Mongo.Collection('messages');

if (Meteor.isClient) {
    Template.messages.helpers({
    messages: function () {
      return Messages.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
