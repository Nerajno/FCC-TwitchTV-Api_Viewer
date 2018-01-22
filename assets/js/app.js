var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx",
  "RobotCaleb", "noobs2ninjas", "brunofin", "comster404", "RealKraftyy?","user_to_test"
];


var apiSegmentOne = "https://wind-bow.glitch.me/twitch-api/streams/";

var freecodecampChecker = apiSegmentOne + channels[3];
$.getJSON(freecodecampChecker, function(data) {
  console.log(freecodecampChecker);
  var streamStatus = data.stream;
  if (streamStatus === null) {
    console.log("Aint Wrking");
  } else {
    $(".fa-times-circle").css("color", "green"); // Correct method to change color of Css
  }
});



//Running for each itteration
//This helped me to run the function channel by channel.
//https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
function individualIteration(i) {
  console.log();
  return function() {};
}
$(document).ready(function() {
  // console.log(channels.length, channels);
  for (var i = 0; i < channels.length; i++) {
    var apiSegmentTwo = apiSegmentOne + channels[i];
    $.getJSON(apiSegmentTwo, function(data) {
      var tits = data.error;
      console.log(tits);
      var intitalData = data.stream;
      // console.log(intitalData);
      var test = data._links.channel;
      var convertedUserName = test.split("/").pop();
      if (intitalData === null) {
        var spaceHolder = ' ';
        var info = data.stream;
        var gameName = "N/A..... offline";
        let status = "N/A..... offline";
        let viewers = "N/A..... offline";
        let logo = "N/A..... offline";
        let channelAddress = "N/A..... offline";
        //This writes the information to a card... I know that there is an easier way but I dont know it yet.
        $(".tab-main-content").append('<div class=""><button class="accordion" data-toggle="collapse" data-target="testing">' + '<i class="fa fa-window-close" aria-hidden="true"></i>' + ' ' + convertedUserName +
          ' is offline.' + '</button><panel id="testing" class=""><div class="container py-3"><div class="card"><div class="row"><div class="col-md-4"><img src="https://farm5.staticflickr.com/4675/24807227997_48796d28ea.jpg"></div><div class="col-md-8"><div class="card-block px-3">' +
          '<p class=' + gameName + '> Game Name: ' + gameName + '</p><p class=' + status + '> Current Game Status : ' + status + '</p><p class=' + viewers + '> Live Viewers : ' + viewers + '</p><p class=' + channelAddress + '><a target="_blank" href=' + channelAddress +
          '> Channel Web Address : ' + channelAddress + ' ' + '<i class="fa fa-external-link" aria-hidden="true"></i></a></p></div></div></div></div></div></panel></div>');

       $('.tab-main-content').append('<button class="btn" data-toggle="collapse" data-target="#demo">Collapsible</button><div id="demo" class="collapse">Some text..</div>')

     //  // NOTE: testing
     // $(".tab-main-content").append('<div class="panel-group accordion" id="accordion"><div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse"'+
     // ' data-parent="#accordion" href="#collapse1">'+ convertedUserName +'</a></h4></div><div id="collapse1" class="panel-collapse collapse in"><div class="panel-body">Lorem ipsum dolor sit amet, consectetur'+
     // 'adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div></div></div></div>')

      // //   }else if (intitalData ===){
      // //
      //
      //
      //   // NOTE:  need to add condition, if channel was never present.
      //   // NOTE: Found it
      //   //         {
      //   //   "error":"Not Found",
      //   //   "status":404,
      //   //   "message":"Channel 'user_to_test' does not exist"
      //   // }
       }else {

        var user = data.stream.channel.display_name;
        var info = data.stream;
        var gameName = data.stream.channel.game;
        let status = data.stream.channel.status;
        let viewers = data.stream.viewers;
        let logo = data.stream.channel.logo;
        let channelAddress = data.stream.channel.url;
        //This writes the information to a card... I know that there is an easier way but I dont know it yet.
        $(".tab-main-content").append('<div class=""><button class="accordion">' + '<i class="fa fa-television" aria-hidden="true"></i> ' + convertedUserName +
          ' is online.' + '</button><panel><div class="container py-3"><div class="card"><div class="row"><div class="col-md-4"><img src=' + logo + '></div><div class="col-md-8"><div class="card-block px-3">' +
          '<p class=' + gameName + '>Game Name: ' + gameName + '</p><p class=' + status + '> Current Game Status : ' + status + '</p><p class=' + viewers + '> Live Viewers : ' + viewers + ' viewers online.</p><p class=' + channelAddress + '><a target="_blank" href=' + channelAddress + '> Channel Web Address : ' + channelAddress + ' ' +
          '<i class="fa fa-external-link" aria-hidden="true"></i></a></p></div></div></div></div></div></panel></div>');
      }
    });
  }



});
