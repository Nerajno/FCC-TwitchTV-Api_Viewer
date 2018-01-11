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
  // console.log(channels.length, channels);
  for (var i = 0; i < channels.length; i++) {
    var apiSegmentTwo = apiSegmentOne + channels[i];
    $.getJSON(apiSegmentTwo, function(data) {
      var intitalData = data.stream;
      var test = data._links.channel;
      var convertedUserName = test.split("/").pop();
      // get it to write to html
      // console.log(convertedUserName);
      if (intitalData === null) {
        $(".tab-main-content").append('<div><button class="accordion">'+'<i class="fa fa-window-close" aria-hidden="true"></i>'+' '+ convertedUserName
        + 'is offline.'+ '</button><panel><div class="container py-3"><div class="card"><div class="row"><div class="col-md-4"><img src='+logo+'></div></div></div></div></panel></div>'

      );

      // NOTE: <div class="col-md-4"></div></panel></div>'
        // <section>
        //   <div class="container py-3">col-md-5
        //     <div class="card">
        //       <div class="row ">
        //         <div class="col-md-4">
        //             <img src="https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97400&w=400&h=400" class="w-100">
        //           </div>
        //           <div class="col-md-8 px-3">
        //             <div class="card-block px-3">
        //               <h4 class="card-title">Lorem ipsum dolor sit amet</h4>
        //               <p class="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        //               <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        //               <a href="#" class="btn btn-primary">Read More</a>
        //             </div>
        //           </div>
        //
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </section>
        console.log(convertedUserName + " is offline.");
        //append them to a new list
        // NOTE:  need to add condition, if channel was never present.
      } else {
        var user = data.stream.channel.display_name;
        //$(".userName").append(user+" is offline.");

        // $('#userName')
        var info = data.stream;
        var gameName = data.stream.channel.game;
        let status = data.stream.channel.status;
        let viewers = data.stream.viewers;
        let logo = data.stream.channel.logo;
        let channelAddress = data.stream.channel.url;
        $(".tab-main-content").append('<div><button class="accordion">'+'<i class="fa fa-window-close" aria-hidden="true"></i>'+' '+ convertedUserName+'is online.'+'</button><panel><div class="container py-3"><div class="card"><div class="row"><div class="col-md-4"><img src='+logo+'></div></div></div></div></panel></div>');
        console.log(user + " is online.");
        console.log(user + "'s Info", info, gameName, status, viewers, logo,
          channelAddress);
      }
    });
  }
});

// NOTE: this is for a accordian
// var acc = document.getElementsByClassName("accordion");
// var i;
//
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");
//
//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

// NOTE: Trying to write a promise for this
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
