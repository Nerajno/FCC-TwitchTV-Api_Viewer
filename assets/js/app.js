var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx",
    "RobotCaleb", "noobs2ninjas", "brunofin", "comster404", "RealKraftyy?"];

var apiSegmentOne = "https://wind-bow.glitch.me/twitch-api/streams/";

//This helped me to run the function channel by channel.
// //https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
function individualIteration(i) {
         return function(){
           console.log(channels[i]);
        }
         }
$(document).ready(function (){
      // console.log(channels);
      console.log(channels.length, channels);
    for (var i = 0; i < channels.length; i++) {
      var apiSegmentTwo = apiSegmentOne+channels[i];
       $.getJSON(apiSegmentTwo, function (data) {
         var intitalData = data.stream;
         var test = data._links.channel;
          var conversion =test.split("/").pop();
          // console.log(conversion);
      if (intitalData === null) {
         console.log(conversion+" is offline.");
      } else {
         var user = data.stream.channel.display_name;
         var info = data.stream;
         var gameName = data.stream.channel.game;
         let status = data.stream.channel.status;
         let viewers = data.stream.viewers;
         let logo = data.stream.channel.logo;
         let channelAddress = data.stream.channel.url;
        console.log(user+" is online.");
        console.log("Each Info", info, gameName, status, viewers, logo,
        channelAddress);


      }
       });
    }
  });
