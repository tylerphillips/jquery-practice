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
