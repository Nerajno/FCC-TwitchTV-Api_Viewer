

var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx",
  "RobotCaleb", "noobs2ninjas", "brunofin", "comster404", "RealKraftyy?"
];
var apiSegmentOne = "https://wind-bow.glitch.me/twitch-api/streams/";
//This helped me to run the function channel by channel.
//https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example

function individualIteration(i) {
  return function() {
  };
}
$(document).ready(function() {
  // console.log(channels.length, channels);
  for (var i = 0; i < channels.length; i++) {
    var apiSegmentTwo = apiSegmentOne + channels[i];
    $.getJSON(apiSegmentTwo, function(data){
      var intitalData = data.stream;
      var test = data._links.channel;
      var convertedUserName = test.split("/").pop();
      // get it to Write to html if the result of each call has no content.
      if (intitalData === null) {
        var spaceHolder =' ';
        var info = data.stream;
        var gameName = "N/A..... offline";
        let status = "N/A..... offline";
        let viewers = "N/A..... offline";
        let logo = "N/A..... offline";
        let channelAddress = "N/A..... offline";
        //This writes the information to a card... I know that there is an easier way but I dont know it yet.
        $(".tab-main-content").append('<div><button class="accordion">'+'<i class="fa fa-window-close" aria-hidden="true"></i>'+' '+convertedUserName
        +' is offline.'+'</button><panel><div class="container py-3"><div class="card"><div class="row"><div class="col-md-4"><img src="https://farm5.staticflickr.com/4675/24807227997_48796d28ea.jpg"></div><div class="col-md-8"><div class="card-block px-3">'+
        '<p class='+gameName+'> Game Name: '+gameName+'</p><p class='+status+'> Current Game Status : '+status+'</p><p class='+viewers+'> Live Viewers :'+viewers+'</p><p class='+channelAddress+'><a href='+channelAddress+'> Channel Web Address :'+channelAddress +' '+'<i class="fa fa-external-link" aria-hidden="true"></i></a></p></div></div></div></div></div></panel></div>');
        //Writing the offline channels to an array
        var offline = [ ];
        var offlineList = offline.push(convertedUserName);
        offlineList = offline.push(convertedUserName)+offlineList;
        console.log(offlineList);
        // NOTE:  need to add condition, if channel was never present.
      }else{
        //may need to rename variables... onlineVariables
        var user = data.stream.channel.display_name;
        var info = data.stream;
        var gameName = data.stream.channel.game;
        let status = data.stream.channel.status;
        let viewers = data.stream.viewers;
        let logo = data.stream.channel.logo;
        let channelAddress = data.stream.channel.url;
        //This writes the information to a card... I know that there is an easier way but I dont know it yet.
        $(".tab-main-content").append('<div><button class="accordion">'+'<i class="fa fa-television" aria-hidden="true"></i> '+convertedUserName+
        ' is online.'+'</button><panel><div class="container py-3"><div class="card"><div class="row"><div class="col-md-4"><img src='+logo+'></div><div class="col-md-8"><div class="card-block px-3">'+
        '<p class='+gameName+'>Game Name: '+gameName+'</p><p class='+status+'> Current Game Status : '+status+'</p><p class='+viewers+'> Live Viewers : '+viewers+' viewers online.</p><p class='+channelAddress+'><a href='+channelAddress+'> Channel Web Address :'+channelAddress +' '+
        '<i class="fa fa-external-link" aria-hidden="true"></i></a></p></div></div></div></div></div></panel></div>');
        //Writing the offline channels to an array
        let onlineArray = [];

      }
    });
  }
});
