$(document).ready(
	function () {
	$('#button').hover(
		function () {
			$(this).addClass('highlight')
		},
		function () {
			$(this).removeClass('highlight');
	});
	$('#button').click(
		function () {
			var content = $('input[name=box]').val();
			var remove = "<span class='remove'>Remove</span>";
			function escape_html(string) {
				return string
				.replace(/&/g, "&amp;")
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;")
				.replace(/"/g, "&quot;")
				.replace(/'/g, "&#039;");
			}
			if (content != "") {
				$('ul').append('<div class="item"><li>' + escape_html(content) + '<div class="remove_div">' + remove + '</div></li></div>');
				$('input').val('');
			}
		});
	$(document).on('click', '.remove', function () {
		$(this).parent().parent().remove();
	});
});