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
			$('ul').append('<div class="item"><li>' + content + ' ' + remove + '</li></div>');
		});
	$(document).on('click', '.item', function () {
		$(this).remove();
	});
});