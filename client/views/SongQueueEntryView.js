// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="artist">(<%= artist %>)</td><td class="title"><%= title %></td><td><button class="upvote"><span class="octicon octicon-heart"></span></button></td><td><button class="downvote"><span class="octicon octicon-arrow-down"></span></button></td><td><button class="dequeue"><span class="octicon octicon-dash"></span></button></td><td class="playCount"><%= playCount %></td><td class="upvotes"><%= upvotes %></td><td class="downvotes"><%= downvotes %></td>'),

  events: {
    'click .dequeue': 'remove',
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
  },

  remove: function(){
    this.model.dequeue();
  }
});
