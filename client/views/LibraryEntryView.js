// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td class="title"><%= title %></td><td><button class="enqueue">Add to queue</button></td><td><%= playCount %></td><td><%= upvotes %></td><td><%= downvotes %></td>'),

  events: {
    'click .enqueue': function () {
      this.model.enqueue();
    }
  },

  initialize: function () {
    this.model.on('change', function () {
      this.render();
    }, this);
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
