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




