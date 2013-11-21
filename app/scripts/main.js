window.onload = function() {
	// alert("Welcome")
}

$( document ).ready(function() {

	$("a").addClass("test"); // apllies "test" class to all links

	$("a").removeClass("test"); // removes "test" class from all links

});

$("a").click(function(event){

	event.preventDefault();

	$(this).hide("slow"); // Hides links after being click upon
})

// SELECTING PAGE ELEMENTS

$("span"); // all HTML span elements
$("#elem"); // the HTML element having id "elem"
$(".classname"); // HTML elements having the class "classname"
$("div#elem"); // <div> elements with ID "elem"
$("al li a.menu"); // anchors with class "menu that are nest in list items"
$("p > span"); // spans that are direct children of paragraphs
$("input[type=password]"); // inputs that have a specified type
$("p:first"); // the first paragraph on the page
$("p:even"); // all even numbered paragraphs

// JQuery Custom Selectors
$(":header"); // header elements (h1 to h6)
$(":button"); // any button elements (inputs or buttons)
$(":radio"); // radio buttons
$(":checkbox"); // checkboxes
$(":checked"); // selected checkboxes or radio buttons

// WORKING WITH HTML CONTENT
	// One of jQuery's most useful time saving tricks is to manipulate the content of page elements.
	// The html() and text() methods all you to get and set the content of any elements you've selected using the previous statements
	// while attr() lets you get and set the values of individual element attributes

  // html() works pretty much like JavaScript's innerHTML:
	var htmlContent = $("#elem").html();
	  // * variable htmlContent now contains all HTML
	  // (including text) inside page element with id "elem" *

	// Using similar syntax, you can set the HTML content of a specified element or collection of elements:
	$("#elem").html("<p>Here is some new content.</p>");
	  // * page element with id "elem" has had its HTML content replaced *

  // text() allows you to get only text content of an element or collection of elements, without the HTML:
	var textContent = $("#elem").text();
	  // * variable textContent contains all the text (but not HTML) content
	  // from inside a page element with id "elem" *

	// Once more you can change the text content of the specified element(s):
	$("#elem").text("Here is some content.");
	  // * page element with id "elem" has had its text content replaced

	// If you want to append content to an element rather than replace it:
	$("#elem").append("<p>Here is some new content.</p>");
	  // * keeps current content intact but adds new content to the end *

	// and likewise,
	$("div").append("<p>Here is some new content.</p>");
	  // * add the same content to all <div> elements on the page *

  // attr() method gets the value for the specified attribute 
  	var title = $("#elem").attr("title");
  	  // if applied to a set of elements, it returns the value for only the first element in the matched set

 	// you can also pass a second argument to attr() to set an attribute value:
 	$("#elem").attr("title", "This is the new title");

// SHOWING AND HIDING ELEMENTS

	// show() is a simple way to make an element or set of elements visible
	$("div").show(); // makes all <div> elements visible
	  // however, you can add some additional parameters to spice up the transition
	  $("#elem2").show("fast", function(){
	  	// do something once the element is shown
	  });

	// hide() method is the opposite of show(), allowing you to make elements invisible with the same optional arguments as you saw for show()
	$("#elem-hide").hide("slow", function(){
		// do something once the element is hidden
	});

	// toggle() method changes the current state of an element or collection of elements;
	// it makes visible any element in the collection that is currently hidden and hides any that are currently being shown

// ANIMATING ELEMENTS

	// FADING
	  // You can fade an element in or out, optionally setting the transition duration and adding a callback function

	  // To fade out to invisibility:
	  $("#elem-fadeOut").fadeOut("slow", function(){
	  	// do something after fadeOut has finished executing
	  });

	  // To fade out to invisibility:
	  $("#elem-fadeIn").fadeIn(500, function(){
	  	// do something after fadeIn has finished executing
	  });

	  // You can also fade an element only partially, either in or out:
	  $("#elem-partialFade").fadeTo(3000, 0.5, function(){
	  	// do something after fade has finish edexecuting
	  });

	// SLIDING
	  // You can slide elements, or collections of elements, upward or downward.

	  // To slide down:
	  $("#elem-slideDown").slideDown(150, function(){
	  	// do something after slideDown has finished executing
	  });

	  // To slide up:
	  $("#elem-slideUp").slideUp("slow", function(){
	  	// do something after slideUp has finished executing
	  });

	  // slideToggle() is in case you need to slide an element up or down depending on its current state
	  $("#elem-slideUp").slideToggle(1000, function(){
	  	// do something after slideUp has finished executing
	  });

	// * ANIMATE *
	  
	  // to animate an element, you do so by using JQuery to specify the CSS styles that the item should have applied
	  $("#elem-Animate").animate(
	  {
	  	width: "400px",
	  	height: "100px",
		  }, 1500, function(){
	  			$(this).fadeIn("slow");
		  }
	  );

// COMMAND CHAINING

$("#elem-fadeOutIn").fadeOut("slow").fadeIn("slow");
$("#elem-textFadeOutIn").text("Hello from jQuery").fadeOut("slow").fadeIn("slow");

// A simple jQuery animation
$("#animateMe").text("Changing shape...").animate(
	{
		width: "400px",
		height: "200px"
	}, 5000, function(){
		//callback function
		$(this).text("Fading away...").fadeOut(4000);
	}
);



