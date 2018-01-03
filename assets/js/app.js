// $('#myCollapsible').collapse({
//   toggle: false
// })

var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx",
  "RobotCaleb", "noobs2ninjas", "brunofin", "comster404", "RealKraftyy?"
];

var apiSegmentOne = "https://wind-bow.glitch.me/twitch-api/streams/";

//This helped me to run the function channel by channel.
//https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
function individualIteration(i) {
  return function() {
    console.log(channels[i]);
  }
}
$(document).ready(function() {
  // console.log(channels);
  console.log(channels.length, channels);
  for (var i = 0; i < channels.length; i++) {
    var apiSegmentTwo = apiSegmentOne + channels[i];
    $.getJSON(apiSegmentTwo, function(data) {
      var intitalData = data.stream;
      var test = data._links.channel;
      var convertedUserName = test.split("/").pop();
      $(".userName").text(convertedUserName);
      console.log(conversion);
      if (intitalData === null) {
        console.log(conversion + " is offline.");
        // NOTE:  need to add condition, if channel was never present.
      } else {
        var user = data.stream.channel.display_name;
      $(".userName").text(user);
        // $('#userName')
        var info = data.stream;
        var gameName = data.stream.channel.game;
        let status = data.stream.channel.status;
        let viewers = data.stream.viewers;
        let logo = data.stream.channel.logo;
        let channelAddress = data.stream.channel.url;

        console.log(user + " is online.");
        console.log("Each Info", info, gameName, status, viewers, logo,
          channelAddress);
      }
    });
  }
});

// // Trying to write a promise for this
// let testPromise =function getJSON() {
//   return new Promise(function(resolve, reject) {
//     $.ajax({
//       url:apiSegmentOne+channels[1],
//       method: 'GET'
//     }).done((response)=>{
//       ////this means my api call suceeded, so I will call resolve on the response
//       console.log(url);
//       resolve()
//     }).fail((error)=>{
//       ////this means the api call failed, so I will call reject on the error
//       reject(console.log("api not present");)
//     });
//   });
//
// }
