document.addEventListener('DOMContentLoaded', function(){
	function Add() {
		$('.header').css('background', '#fff');
		$('.header__btn').find('span').addClass('active');
		$('.header__logo').find('img').addClass('inversion');
		$('.header__menu').find('a').addClass('colors');
	}
	function Remove() {
		$('.header').css('background', 'none');
		$('.header__btn').find('span').removeClass('active');
		$('.header__logo').find('img').removeClass('inversion');
		$('.header__menu').find('a').removeClass('colors');
	}
	$('.header__btn').on('click',function(event) {
	   if ($(this).is(event.target)) {
	   	   Remove();
		   $('.mobile').fadeOut('slow'); 
	   } else {
	   	   Add();
		   $('.mobile').fadeIn('slow');
	   }
	});
	$(window).scroll(function() {
		if ($(window).scrollTop() == 0) {
			Remove();
			$('.mobile').fadeOut('slow'); 
		} else {
			Add();
		}
	});
	var n = $('.second__arrows').find('span:first');
	var i = 0;
	$('.second__next').click(function() {
		n.text(++i);
		if (i > 4) {
			i = 0;
		}
		if (n.text() == '5') {
			$(this).attr('disabled', true).css('background', 'url("/img/second/arrow-right.png") no-repeat');
			$('.second__prev').attr('disabled', false).css('background', 'url("/img/second/left-active.png") no-repeat');
			i = 5;
		}
		if (i > 1) {
			$('.second__prev').attr('disabled', false).css('background', 'url("/img/second/left-active.png") no-repeat');
		}
	});
	$('.second__prev').click(function() {
		n.text(--i);
		if (n.text() == '1') {
			$('.second__prev').attr('disabled', true).css('background', 'url("/img/second/arrow-left.png") no-repeat');
		}
		if (n.text() == '4') {
			$('.second__next').attr('disabled', false).css('background', 'url("/img/second/right-active.png") no-repeat');
		}
	});
	if ($(window).width() < 768) {
		$('.second__next').css('background', 'url("/img/second/arrow-right.png") no-repeat');
	}
});