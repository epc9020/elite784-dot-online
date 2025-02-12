/**
  Developed by Prashant Shrestha
  + https://prashant.me
*/
var lastfmData = {
  baseURL:
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=",
  // Your Last.fm Username
  user: "elite784",
  // Your API key
  api_key: "0267d5e83f8e9a63e4b9c4ef863191a6",
  additional: "&format=json&limit=1&nowplaying=true"
};

var getSetLastFM = function() {
  $.ajax({
    type: "GET",
    url:
      lastfmData.baseURL +
      lastfmData.user +
      "&api_key=" +
      lastfmData.api_key +
      lastfmData.additional,
    dataType: "json",
    success: function(resp) {
      var recentTrack = resp.recenttracks.track[0];
      var formatted =
        recentTrack.name;
      $("a#tracktitle")
        .html(formatted)
        .attr("href", recentTrack.url)
        .attr("title", recentTrack.name + " by " + recentTrack.artist["#text"])
        .attr("target", "_blank");

      var artistFormatted =
        recentTrack.artist["#text"];
      $("a#trackartist")
        .html(artistFormatted)
        .attr("title", "Artist : " + recentTrack.artist["#text"]);
      $("img#trackart").attr("src", recentTrack.image[2]["#text"]);
    },
    error: function(resp) {
      $("a#tracktitle").html(
        "" + "failed to get last.fm data"
      );
      $("img#trackart").attr("src", "");
      var artistFormatted =
        "check console";
      $("a#trackartist")
        .html(artistFormatted)
        .attr("href", "");
    }
  });
};

/*
devnote: please figure this out elite in the future, i really want to show whether or not im scrobbling something...

const track = scrobbles?.recenttracks?.track

if (track.length > 0) {
        const trarray = track[0];
        if (trarray['@attr'] && trarray['@attr']['nowplaying']) {

          $("#playstatus");
          var playStatus =
            " PLAYING";
            
        }
    }



    $("#playstatus");
    var playStatus =
      "check console";
*/

// Get the new one.
getSetLastFM();
// Start the countdown.
setInterval(getSetLastFM, 10 * 1000);
