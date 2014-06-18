// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    this.on('ended', function(song){
      this.shift();
      this.playFirst();
    }, this);
  },

  playFirst: function () {
    if (this.length > 0) {
      this.at(0).play();
    }
  }
});
