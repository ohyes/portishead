$(function() {
	$("#image_view li").hide();
	$("#image_view li:first").show();
	$("#image_view li:first").addClass("visible");

	$("#image_view_nav a.next").click(function(e) {
		var current = $("#image_view li.visible");
		var next = current.next();

		$("#image_view li").removeClass("visible");

		if (next.length == 0) {
			// loop back
			next = $("#image_view li:first");
		}

		next.addClass("visible");
		$("#image_view li").fadeOut('fast');
		next.fadeIn('fast');

		e.preventDefault();
	});

	$("#image_view_nav a.prev").click(function(e) {
		var current = $("#image_view li.visible");
		var previous = current.prev();

		$("#image_view li").removeClass("visible");

		if (previous.length == 0) {
			// loop back
			previous = $("#image_view li:last");
		}

		previous.addClass("visible");
		$("#image_view li").fadeOut('fast');
		previous.fadeIn('fast');

		e.preventDefault();
	});
	
// var currentId;
// 
// var id = currentId = $("#images li").first().attr("data-id");
// $.getJSON(document.href + "/images/" + id, function(data) {
// 	$("#image_view").append('<li class="image_'+ data.image.id +'"><img src="' + data.image.image.url +'" /></li>')
// });
// 
// $("#images li a").live("click", function(e) {
// 	var id = $(this).parent().attr("data-id");
// 	
// 	if (id == currentId) {
// 		e.preventDefault();
// 		return;
// 	}
// 	
// 	if ($("#image_view").has(".image_" + id).length == 0) {
// 		$.getJSON(document.href + "/images/" + id, function(data) {
// 			$("#image_view li").fadeOut('slow');
// 			$("#image_view").append('<li class="image_'+ data.image.id +'"><img src="' + data.image.image.url +'" /></li>').fadeIn('slow');
// 		});
// 	} else {
// 		$("#image_view li").fadeOut('fast');
// 		$("#image_view li.image_" + id).fadeIn('fast');
// 	}
// 	
// 	currentId = id;
// 	
// 	e.preventDefault();
// });

});
