// $("h1").css("color", "red");

// Manipulating Styles with jQuery!!!
$("h1").addClass("big-title margin-50");

//Manipulating Text with jQuery!!!
$("h1").text("bye");
// $("button").text("Click Me");
// $("button").html("<em>Hey</em>");

// //Manipulating Attributes with JQuery!!!
// console.log($("img").attr("src"));
// $("a").attr("href", "https://www.yahoo.com");

//Adding Event Listeners with jQuery!!!
// $("h1").click(function () {
//   $("h1").css("color", "purple");
// });

$("button").click(function () {
  $("h1").css("color", "purple");
});

$(document).keypress(function (event) {
  // console.log(event.key);
  $("h1").text(event.key);
});

//Flexible way TO Add event by using on() Method
$("h1").on("mouseover", function () {
  $("h1").css("color", "green");
});

// $("h1").on("click", function () {
//   $("h1").css("color", "green");
// });

/*While our website is live and running we can actually use jQuery to add new elements on the 
  fly or remove the element on the */

//Add before() Method to add button element before h1 element
$("h1").before("<button>New</button>");
//Add after() Method
$("h1").after("<button>New</button>");
//Add prepend
$("h1").prepend("<button>New</button>");
//Add append
$("h1").append("<button>New</button>");

//Website Animations with jQuery!!!
//Add hide() Method to hide h1 in call back function
/*$("button").on("click", function () {
  $("h1").hide();
});
//Add show() Method to show h1 in call back function
$("button").on("click", function () {
  $("h1").show();
});*/
// //Add toogle() Method to hide and show h1 in call back function
// $("button").on("click", function () {
//   $("h1").toggle();
// });
//Add slideUp() Method to slide Up h1 in call back function
// $("button").on("click", function () {
//   $("h1").slideUp();
// });
//Add slideDown() Method to slide Down h1 in call back function
// $("button").on("click", function () {
//   $("h1").slideDown();
// });
// //Add slideToogle() Method to toggle Up and down h1 in call back function
// $("button").on("click", function () {
//   $("h1").slideToggle();
// });
// //Add animate() Method to add the opacity property to h1 in call back function
// $("button").on("click", function () {
//   $("h1").animate({ opacity: 0.5 });//You have to add numeric css value in between curly braces

// });

//Using chaining to multiple Methods.slideUp.slideDown.animate() Add animate() Method to add the opacity property to h1 in call back function
$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 }); //You have to add numeric css value in between curly braces
});
