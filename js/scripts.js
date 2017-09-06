$(document).ready(function(){
	var span = $("span");
	$("span:even").css('color', '#efbaba');
	
	var paragraphs = $("p");
	paragraphs.each(function(index, element) {
		var button = '<button class="btn button" data-tmp="' + index + '">Kliknij</button>'
		$(element).append(button)
	});
	
	$("button").click(function(){
		alert($(this).attr("data-tmp"));
	});
});