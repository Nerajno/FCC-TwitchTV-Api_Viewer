var channels =["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404","RealKraftyy?"]
//Runs Jquery
$(document).ready(function(){
  // Fetches FCC Stream info and api status call
  //Test
  // var url ="https://wind-bow.glitch.me/twitch-api/streams/"+channels[10]
  //The main api
  var url2 = "https://wind-bow.glitch.me/twitch-api/streams/"
  var i = 0;
  var channelStatus = data1.stream;
  while (i <channels.length){
    console.log(url2+channels[i]+channelStatus);
    i++;
  }
  $.getJSON(url2,function(data1){
    // var channelStatus = data1.stream;
    // console.log(channelStatus);
  });
});

// lestream
