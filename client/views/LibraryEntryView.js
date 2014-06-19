// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="artist">(<%= artist %>)</td><td class="title"><%= title %></td><td><button class="upvote"><span class="octicon octicon-heart"></span></button></td><td><button class="downvote"><span class="octicon octicon-arrow-down"></span></button></td><td><button class="enqueue"><span class="octicon octicon-plus"></span></button></td><td class="playCount"><%= playCount %></td><td class="upvotes"><%= upvotes %></td><td class="downvotes"><%= downvotes %></td>'),

  events: {
    'click .enqueue': function () {
      this.model.enqueue();
    },
    'click .upvote': function () {
      this.model.upvote();
    },
    'click .downvote': function () {
      this.model.downvote();
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
