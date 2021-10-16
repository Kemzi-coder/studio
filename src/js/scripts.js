import $ from 'jquery'
import '@rateyo/jquery/lib/es/jquery.rateyo'
import Swiper from 'swiper/swiper-bundle.js'


// Tabs
$('.services__tab').on('click', function(e) {
	e.preventDefault();
	$($(this).siblings()).removeClass('services__tab--active');
	$($(this).closest('.services__tabs-wrapper').siblings().find('div')).removeClass('services__tab-content--active');
	$(this).addClass('services__tab--active');
	$($(this).attr('href')).addClass('services__tab-content--active')
});

// Scroll
window.scroll({
	behavior: 'smooth'
});

// Services slider
new Swiper('.services-slider', {
	navigation: {
		nextEl: '.services-slider__button-next',
		prevEl: '.services-slider__button-prev',
	},
	wrapperClass: 'services-slider__wrapper',
	slideClass: 'services-slider__item',
	autoHeight: false,
	slidesPerView: 2,
	slidesPerColumn: 2,
	spaceBetween: 30,

	breakpoints: {
		// when window width is >= 320px
		768: {
			spaceBetween: 30
		},
		480: {
			spaceBetween: 20,
			slidesPerColumn: 2,
			slidesPerView: 1,
		},
		280: {
			spaceBetween: 20,
			slidesPerColumn: 1,
			slidesPerView: 1,
		}
	}
});

// Comments slider
new Swiper('.comments-slider', {
	pagination: {
		el: '.comments-slider__pagination',
		clickable: true
	},
	wrapperClass: 'comments-slider__wrapper',
	slideClass: 'comments-slider__item',
	slidesPerView: 3,
	slidesPerGroup: 3,
	spaceBetween: 30,
	breakpoints: {
		// when window width is >= 320px
		1520: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 30
		},
		1250: {
			spaceBetween: 20,
			slidesPerGroup: 2,
			slidesPerView: 2.5,
		},
		1000: {
			spaceBetween: 20,
			slidesPerGroup: 2,
			slidesPerView: 2,
		},
		280: {
			spaceBetween: 15,
			slidesPerGroup: 1,
			slidesPerView: 1,
		}
	}
});

// Services slider images
$('.services-slider__item').on('mouseover', function() {
	$('.services__box-img').removeClass('services__box-img--1 services__box-img--2 services__box-img--3 services__box-img--4');
});

$('.services-slider__item-1').on('mouseover', function() {
	$('.services__box-img').addClass('services__box-img--1')
});

$('.services-slider__item-2').on('mouseover', function() {
	$('.services__box-img').addClass('services__box-img--2')
});

$('.services-slider__item-3').on('mouseover', function() {
	$('.services__box-img').addClass('services__box-img--3')
});

$('.services-slider__item-4').on('mouseover', function() {
	$('.services__box-img').addClass('services__box-img--4')
});
// 

// Star Rating
$(".rate-yo").rateYo({
	readOnly: true,
	spacing: "5px",
	starWidth: "15px",
	ratedFill: "#ff3c2d",
	normalFill: "#C4C4C4"
});

// Burger

// Header Clone
$('.header-clone__burger').on('click', function() {
	$(this).toggleClass('header__burger--active');
	$('.header-clone .menu').toggleClass('menu--active');
	$('body').toggleClass('body--lock')
	$('.header-clone .header__links').toggleClass('header__links--active');
});

// Original Header
$('.header-orig__burger').on('click', function() {
	$(this).toggleClass('header__burger--active');
	$('.header .menu').toggleClass('menu--active');
	$('body').toggleClass('body--lock')
	$('.header .header__links').toggleClass('header__links--active');
});

// Animation on Scroll
const animItems = document.querySelectorAll('.anim-item');

if(animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for(let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if(animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('active');
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}



// Fixed Header
const cloneHeader = $('.header-clone')

$(window).on('scroll', function() {
	if ( $(window).scrollTop() >= 100 ) {
		cloneHeader.addClass('header--is-show');
	} else {
		cloneHeader.removeClass('header--is-show');
	}
});

// Anchors
const anchors = document.querySelectorAll('.anchor')
const htmlBody = document.querySelector('html, body')

for(let anchor of anchors) {
	anchor.addEventListener("click", function(e) {
		e.preventDefault() // Предотвратить стандартное поведение ссылок
		// Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
		const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
		// Плавная прокрутка до элемента с id = href у ссылки
		document.querySelector(goto).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}
