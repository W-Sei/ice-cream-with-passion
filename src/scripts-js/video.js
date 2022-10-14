(() => {
function onYouTubePlayerAPIReady() {
  player = new YT.Player('Youtube', {
    events: {'onReady': onPlayerReady}
  });
}
function onPlayerReady(event) {
  document.getElementById("playYoutube").addEventListener("click", function() {player.playVideo();});
  document.getElementById("pauseYoutube").addEventListener("click", function() {player.pauseVideo();});
}
})();