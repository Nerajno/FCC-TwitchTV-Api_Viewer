var channels =["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404","RealKraftyy?"]
//Runs Jquery
$(document).ready(function(){
  // Fetches FCC Stream info and api status call
  //The main api
  var url2 = "https://wind-bow.glitch.me/twitch-api/streams/";
  var i = 0;
  while (i <channels.length){
    console.log(url2+channels[i]);
    i++;
  }
  var testing = url2+channels[1]
  var exercise = url2+channels[3]
  // console.log(testing);
  $.getJSON(exercise,function(data){
    var exercise = data.stream;
    console.log(exercise);

  });
});
