$(function() {
// Form manipulation code adapted from Railscasts #197 (http://railscasts.com/episodes/197)

// Remove the image
$("a.remove_image").live("click", function(e) {
	$(this).closest("li").prev().find("input[type=hidden]").first().val(true);
	$(this).closest(".inputs").fadeOut();

	e.preventDefault();
});


// Adding an image
$("a.add_image").click(function(e) {
	var id = new Date().getTime();
	var rx = new RegExp("new_image", "g");
	var content = $(this).attr('data-fields');
	
	$(this).parent().find("fieldset.inputs").last().after(content.replace(rx, id));
	
	e.preventDefault();
});

});