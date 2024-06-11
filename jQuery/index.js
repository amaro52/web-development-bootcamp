// $("h1").css("color", "red"); // two parameters = setting the value
// $("h1").css("color"); // one parameter = getting the value

// adding style classes
$("h1").addClass("big-title");
// $("h1").removeClass("big-title"); // can be used if you want to remove the styles

/**
 * Manipulating text
 */
$("h1").text("Bye");

/**
 * Manipulating attributes
 */
console.log($("img").attr("src")); // get the source of the image
$("a").attr("href", "https://www.youtube.com"); // setting the google link to YouTube

/**
 * Adding event listeners with jQuery
 */
$("h1").click(function () {
  $("h1").css("color", "green");
});

$("button").click(function () {
  $("h1").css("color", "cyan");
});

// keypress event for inputs
$("input").keypress(function (event) {
  console.log(event.key);
  $("h1").text(event.key);
});

// on function
$("h1").on("mouseover", function () {
  $("h1").css("color", "orange");
});

$("h1").on("mouseout", function () {
  $("h1").css("color", "brown");
});
