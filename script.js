$('#purpose').change(function () {
	$('.step1').addClass('animate');
	$('.step2').addClass('animate2');
	$('.background').css('background', '#FFD6D6');
	$('.step3').addClass('animate').css('opacity', 0.3);
	$('.options').css('display', 'none');
	$('#progress').attr('src', './assets/images/step2.svg');
});
$('#role').change(function () {
	$('.step2').addClass('animate3').css('display', 'none');
	$('.step1').css('transform', 'translateY(-150px)');
	$('.step1').css('opacity', 0).css('display', 'none');
	$('.background').css(
		'background',
		'linear-gradient(142.39deg, #EBEBF3 0%, #FFFFFF 100%)'
	);
	$('.step3').addClass('animate4').css('opacity', 1);
	$('.options').css('display', 'block');
	$('#progress').attr('src', './assets/images/step3.svg');
});

$('.btn-light').click(function () {
	var selected = $(event.target);
	$('.background').css('background', '#CCCBFF');
	$('#btn-use').css('background', '#2193ED');
	if (selected.hasClass('active') !== true) {
		selected.addClass('active');
		selected
			.css('background', 'rgba(33, 147, 237, 0.2)')
			.css('color', '#2193ed');
	} else if (selected.hasClass('active') === true) {
		selected.removeClass('active');
		selected
			.css('background', 'rgba(221, 221, 221, 0.2)')
			.css('color', 'black');
	}
});

$('#btn-use').click(function () {
	$('.step3')
		.css('transition', 'transform 1000ms ease 0.5s')
		.css('transform', 'translateY(-250px)');
	$('.step3').css('display', 'none');
	$('.background').css(
		'background',
		'linear-gradient(142.39deg, #EBEBF3 0%, #FFFFFF 100%)'
	);
	$('.step4').css('opacity', 1).css('transform', 'translateY(-50px)');
	$('#progress').attr('src', './assets/images/step4.svg');
});

$('#team-mates').change(function () {
	$('.background').css('background', '#86E4DF');
	$('#btn-number').css('background', '#2193ED');
});
$('#employees').change(function () {
	$('#progress').attr('src', './assets/images/stepdone.svg');
});
