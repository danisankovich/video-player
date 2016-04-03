var video = document.getElementById('videothing');
var videoControls = document.getElementById('videoControls');

(function(window, document) {
  var videoPlayer = {
    init : function() {
  		var self = this;
      video.addEventListener('click', this.playPause, false);
      video.addEventListener('ended', function() {
        this.currentTime = 0;
        this.pause();
      }, false);
  	},
    initializeControls : function() {
  		videoPlayer.showHideControls();
  	},
    showHideControls : function() {
      video.addEventListener('mouseover', function() {
        videoControls.style.opacity = 1;
      }, false);
      videoControls.addEventListener('mouseover', function() {
        videoControls.style.opacity = 1;
      }, false);
      video.addEventListener('mouseout', function() {
        videoControls.style.opacity = 0;
      }, false);
      videoControls.addEventListener('mouseout', function() {
        videoControls.style.opacity = 0;
      }, false);
    },
    playPause: function() {
      if ( video.paused || video.ended ) {
        if ( video.ended ) { video.currentTime = 0; }
        video.play();
      }
      else { video.pause(); }
    }
  };
  videoPlayer.init();
})(this, document);
