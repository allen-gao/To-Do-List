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
			if (content != "") {
				$('ul').append('<div class="item"><li>' + content + ' ' + remove + '</li></div>');
				$('input').val('');
			}
		});
	$(document).on('click', '.remove', function () {
		$(this).parent().parent().remove();
	});
});