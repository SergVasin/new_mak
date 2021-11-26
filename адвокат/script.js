
// =========ДОБАВЛЕНИЕ СЛАЙДЕРА К БЛОКУ====

$(document).ready(function () {
	function checkWidth() {
		var windowWidth = $('body').innerWidth(),
		elem = $(".card__wr");

		if (windowWidth < 1179) {
			elem.addClass('owl-carousel');
			elem.addClass('card__wr-add');
		}
		else {
			elem.removeClass('owl-carousel');
			elem.removeClass('card__wr-add');
		}
	}

	checkWidth();

	$(window).resize(function () {
		checkWidth();
	});
});

// =================КАЗАН=============

$(document).ready(function () {
	$(".main__descr span").click(function () {
		$('.main__click-popup').addClass("click-popup__open");
	})
});



$(document).ready(function () {
	$(".katalog__detail-text1").click(function () {
		$(this).parent().find('.katalog3-1__click-popup').addClass("click-popup__open");
	})
});
$(document).ready(function () {
	$(".click-popup__close").click(function () {
		$('.katalog3-1__click-popup').removeClass("click-popup__open");
	})
});




// =====ТАБЫ - ВЫБОР ЛИТРОВ====

$('.litrov6-1').show();

$("#selectLitr-1").change(function () {
	$('.pricebox__pricechoose').find('.pricechoose-item1').hide();
	var selected = $('#selectLitr-1 option:selected').attr('id');
	localStorage.setItem("myKey", selected);
	$('.' + selected).show();
});


// ======ТАБЫ КАТАЛОГ 3 ====

$('.litrov6-kat3-1-1, .litrov6-kat3-1-2, .litrov6-kat3-1-3, .litrov6-kat3-1-4, .litrov6-kat3-1-5').show();

$("#selectLitr-kat3-1-1").change(function () {
	$('.pricebox__pricechoose').find('.pricechoose-item-kat3-1-1').hide();
	var selected = $('#selectLitr-kat3-1-1 option:selected').attr('id');
	localStorage.setItem("myKey", selected);
	$('.' + selected).show();
});

// =======ТАБЫ ОСНОВНЫЕ====

$(function () {
	var tab = $('.tab__element');
	tab.hide().filter(':first').show();

	// Клики по вкладкам.
	$('.control__item').click(function () {
		tab.hide();
		tab.filter(this.hash).show();
		$('.control__item').removeClass('active__tab');
		$(this).addClass('active__tab');
		return false;
	}).filter(':first').click();
});


// =====ОТЗЫВЫ появление попапа

$(document).ready(function () {
	$(".review-item__textarea span").hover(function () {
		$(this).parents().eq(1).find('.review-item__popup').toggleClass("review-item__popup-add");
	})
});


$(document).ready(function () {
	$(".menu-list__item-add").hover(function () {
		$('.menu-popup').toggleClass("menu-popup__add-visible");
	})
});


// ВОПРОСЫ-ОТВЕТЫ=====

$(document).ready(function () {
	$(".item-stat__arrow").click(function () {
		$(this).toggleClass("item-stat__arrow-rotate");
		$(this).parents().eq(1).find('.item-answer').toggleClass("item-answer__add");
	})
});
// $( document ).ready(function() {
// 	$(".item-answer__close").click(function() {
// 		$(this).parents().eq(0).removeClass("item-answer__add");
// 	})
// });


// $(".katalog3-katalog__wr .cloned .pricebox__select").find('select').removeAttr('id');

// ======слайдер карточек==


$(document).ready(function () {
	
	

	$(".review__wr").owlCarousel({
		items: 3,
		nav: true,
		loop: true,
		dots: true,
		smartSpeed: 300,
		responsive: {
			0: {
				items: 1
			},
			1200: {
				items: 3
			},
		}
	});

	$(".element__slider-wr").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 300,
	});


	//  var owl = $('.katalog-item__slider');
	//  owl.owlCarousel();
	//  $('.katalog-item__NextBtn').click(function() {
	//     owl.trigger('next.owl.carousel');
	// })
	//  $('.katalog-item__PrevBtn').click(function() {
	//      owl.trigger('prev.owl.carousel', [500]);
	//  })

	//  var owlelement = $('.element__slider-wr');
	//  owl.owlCarousel();
	//  $('.element-item__NextBtn').click(function() {
	//     owlelement.trigger('next.owl.carousel');
	// })
	//  $('.element-item__PrevBtn').click(function() {
	//      owlelement.trigger('prev.owl.carousel', [500]);
	//  })

});


// ======ПОПАП-ФОРМА======

$(document).ready(function () {
	$(".popup__form-open").click(function () {
		$('.popup__form').addClass("popup__form-visible");
	})
});
$(document).ready(function () {
	$(".popup__form-close").click(function () {
		$('.popup__form').removeClass("popup__form-visible");
	})
});

// ======КНОПКА НАВЕРХ=====

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function () {
		$('body,html').animate({ scrollTop: 0 }, 1500);
	});

});


// ========МОБИЛЬНОЕ МЕНЮ====

$(document).ready(function () {
	$(".header__btn-default").click(function () {
		$('.header__menu').toggleClass("header__menu-open");
	})
});

// ======ДОБАВЛЕНИЕ КАРТИНОК В КНОПКИ СЛАЙДЕРА===

$(document).ready(function () {
	$(".owl-carousel .owl-nav .owl-prev").append('<div ><img src="img/slider-all__add-arrow-left.png" alt=""></div>');
	$(".owl-carousel .owl-nav .owl-next").append('<div ><img src="img/slider-all__add-arrow-right.png" alt=""></div>');
	$(".owl-carousel .owl-nav").append('<p>Используйте стрелки, чтобы<br>просмотреть все</p>');
});
$(document).ready(function () {
	$(".work__wr .owl-stage").append('<div class="owl-stage__add-absolute"></div>');
});

// ==КОРЗИНА==

$(document).ready(function () {
	$(".basket").click(function () {
		$('.basket-wr').addClass("basket-wr-open");
	})
});
$(document).ready(function () {
	$(".basket-popup__close").click(function () {
		$('.basket-wr').removeClass("basket-wr-open");
	})
});

$(document).ready(function () {
	$("#content-basket").val($("#dropdownCart").text());
});

// $( document ).ready(function() {
// 	$("#dropdownCart").change(function() {
//         $(this)("#content-basket").val($("#dropdownCart h6, h5").text());
// });
// });

$(document).ready(function () {
	$("#dropdownCart, .katalog-item__btn-add").click(function () {
		$('body').find('#form-basket').find("#content-basket").val($("#dropdownCart").text());
	})
});


// ===ТЕЛЕФОН==

$(document).ready(function () {
	$("#usertel").mask("+375 99 999 99 99");
});


// ===ПОПАП К КНОПКЕ===

$(document).ready(function () {
	$(".katalog-item__btn-add").append('<div class="katalog-item__btn-add-popup"><p class="katalog-item__btn-add-text">Товар в корзине</p></div>');
});

$(document).ready(function () {
	$(".katalog-item__btn-add").click(function () {
		$(this).find('.katalog-item__btn-add-popup').show(500, function () {
			setTimeout(function () {
				$('.katalog-item__btn-add-popup').hide(500);
			}, 2000);
		});
	});
});


// $("img").each(function () {
// 	var $this = $(this);
// 	var src = $this.attr("src");
// 	$this.attr("data-src", src);
// 	$this.removeAttr("src");
// });

// $('img').addClass("lazyload");
// $('source').remove();




// АДВОКАТ

// ! добавление слайдера

$(document).ready(function () {
	function checkWidth() {
		var windowWidth = $('body').innerWidth(),
		elem = $(".team-main__wr");

		if (windowWidth < 979) {
			elem.addClass('owl-carousel');
			elem.addClass('team__wr-add');
		}
		else {
			elem.removeClass('owl-carousel');
			elem.removeClass('team__wr-add');
		}
	}

	checkWidth();

	$(window).resize(function () {
		checkWidth();
	});
});

$(document).ready(function () {
	function checkWidth() {
		var windowWidth = $('body').innerWidth(),
		elem = $(".news__news-main");

		if (windowWidth < 979) {
			elem.addClass('owl-carousel');
			elem.addClass('news__news-wr-add');
		}
		else {
			elem.removeClass('owl-carousel');
			elem.removeClass('news__news-wr-add');
		}
	}

	checkWidth();

	$(window).resize(function () {
		checkWidth();
	});
});

// попап команда

$(document).ready(function () {
	$(".team__item-img-abs1").click(function () {
		$('.team__team-popup1').addClass("team__team-popup-open");
	})
});
$(document).ready(function () {
	$(".team__item-img-abs2").click(function () {
		$('.team__team-popup2').addClass("team__team-popup-open");
	})
});
$(document).ready(function () {
	$(".team__item-img-abs3").click(function () {
		$('.team__team-popup3').addClass("team__team-popup-open");
	})
});
$(document).ready(function () {
	$(".team-popup__item-close").click(function () {
		$('.team__team-popup').removeClass("team__team-popup-open");
	})
});

// слайдер отзывы


$(document).ready(function () {
	$(".reviews__reviews-slider").owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: false,
		smartSpeed: 300,
	});

	$(".team__wr-add").owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: false,
		smartSpeed: 300,
	});

	$(".news__news-wr-add").owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: false,
		smartSpeed: 300,
	});

	$(".team-service").owlCarousel({
		items: 3,
		loop: true,
		nav: false,
		dots: false,
		smartSpeed: 300,
		responsive: {
			0: {
				items: 1
			},
			1200: {
				items: 3
			},
		}
	});

	$(".case__case-slider").owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: false,
		smartSpeed: 300,
	});

	var owl = $('.reviews__reviews-slider');
	owl.owlCarousel();
	$('.reviews-slider__NextBtn').click(function() {
		owl.trigger('next.owl.carousel');
	})
	$('.reviews-slider__PrevBtn').click(function() {
		owl.trigger('prev.owl.carousel', [500]);
	})


	var owl_team = $('.team-service');
	owl_team.owlCarousel();
	$('.service-team__NextBtn').click(function() {
		owl_team.trigger('next.owl.carousel');
	})
	$('.service-team__PrevBtn').click(function() {
		owl_team.trigger('prev.owl.carousel', [500]);
	})

	var owl_case = $('.case__case-slider');
	owl_case.owlCarousel();
	$('.case__case-slider__NextBtn').click(function() {
		owl_case.trigger('next.owl.carousel');
	})
	$('.case__case-slider__PrevBtn').click(function() {
		owl_case.trigger('prev.owl.carousel', [500]);
	})
});

$(document).ready(function () {
	$(".hover-open").hover(function () {
		$('.hover').toggleClass("hover-add");
	})
});

$(window).resize(function() {
	if ($(window).width() < 1199) {
		$(".nav__item").removeClass('hover-open');
	}
}).resize();

$(window).resize(function() {
	if ($(window).width() < 1199) {
		$(".hover-mob").addClass('hover-mob-add');
	}
}).resize();

$(document).ready(function () {
	$(".hover-mob-add").click(function () {
		$('.hover').toggleClass("hover-add");
	})
});

$(document).ready(function () {
	$(".nav-mob").click(function () {
		$('.nav').addClass("nav-add");
	})
});
$(document).ready(function () {
	$(".nav__close").click(function () {
		$('.nav').removeClass("nav-add");
	})
});


// калькулятор

$(document).ready(function () {

	var value = $('input[name="calc_input"]:checked').val();
	// $("#answer").text(value);
	var value1 = $('input[name="calc_input1"]:checked').val();
	// $("#answer1").text(value1);
	var value4 = $('input[name="calc_input3"]:checked').val();
	$('#range_out').text($('#range').val() + ' операций');
	$('#range').mousemove(function() {
		$('#range_out').text($('#range').val() + ' операций');
	});
	var value3 = $('#range').val();
	var total = (parseInt(value) + parseInt(value1) + parseInt(value4)) * parseInt(value3);
	$("#total").text('Итого: от ' + total + ' рублей');

});

$("input").change(function(){

    var value = $('input[name="calc_input"]:checked').val();
		// $("#answer").text(value);
		var value1 = $('input[name="calc_input1"]:checked').val();
		// $("#answer1").text(value1);
		var value4 = $('input[name="calc_input3"]:checked').val();
		var value3 = $('#range').val();
		// var total = Number($("#answer1").text(value1)) + Number($("#answer").text(value));
		var total = (parseInt(value) + parseInt(value1) + parseInt(value4)) * parseInt(value3);
		$("#total").text('Итого: от ' + total + ' рублей');
   });

// $(document).ready(function(){
// 	$('#output').text($('#range').val());
// 	$('#range').mousemove(function() {
// 		$('#output').text($('#range').val());
// 	});
// })

// $(".form__item_wr_range").on('mousedown', (event) => {
//   $('.follower').css({
//     left: event.clientX,
//     top: event.clientY,
//   });
// });
// $( ".form__item_wr_range" ).mousedown(function(){ // задаем функцию при нажатии кнопки мыши на элементе <div>
// 	    $( "div" ).css( "background", "green" ); // изменяем цвет заднего фона
// 	  });


$(document).ready(function () {

	$(".success_slider").owlCarousel({
		items: 2,
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 300,
		responsive: {
			0: {
				items: 1
			},
			1025: {
				items: 2
			},
		}
	});
	$(".dev_port_slider").owlCarousel({
		items: 2,
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 300,
		responsive: {
			0: {
				items: 1
			},
			1025: {
				items: 2
			},
		}
	});
	$(".total_slider").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 300,
	});



});

$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},1500); //скорость наверх
	});

});