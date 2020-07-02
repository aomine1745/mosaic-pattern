for (let i = 1; i <= 2500; i++) {
	$('.container').append('<div class="box"></div>')
}
$('.container .box').each(function () {
	$(this).css('background', '#' + (Math.random() * 16777215 | 0).toString(16))
})