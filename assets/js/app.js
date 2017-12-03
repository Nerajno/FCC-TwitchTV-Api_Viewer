var channels =["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", 
               "RobotCaleb", "noobs2ninjas", "brunofin", "comster404","RealKraftyy?"];
//Runs Jquery
$(document).ready(function(){
  // Fetches FCC Stream info and api status call
  //The main api
  var url2 = "https://wind-bow.glitch.me/twitch-api/streams/";
  var i = 0;
  while (i <channels.length){
    var url3 = url2+channels[i];
    // console.log(url3);
    $.getJSON(url3,function(data){
      console.log(url3);
      var exercise = data.stream;
      console.log(exercise);
      if (exercise === null) {
        console.log("not streaming");
      } else {
        console.log("streaming");
      }
    });
    i++;
  }
  });
