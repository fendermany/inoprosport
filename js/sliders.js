//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) {}

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) {}

let slider = new Swiper('.slider', {

	// autoplay: {
	// 	delay: 2000,
	// 	disableOnInteraction: true,
	// },
	observer: true,
	observeParents: true,
	spaceBetween: 0,
	autoHeight: true,
	speed: 1000,
	centeredSlides: false,
	slidesPerView: 1,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	// navigation: {
	// 	nextEl: '.about__more .more__item_next',
	// 	prevEl: '.about__more .more__item_prev',
	// },
	breakpoints: {
		320: {
			slidesPerView: 1.2,
		},
		576: {
			slidesPerView: 2.2,
		},
		1023: {
			slidesPerView: 3.2,
		},
		1366: {
			slidesPerView: 4,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	},
	// on: {
	// 	init() {
	// 		this.el.addEventListener('mouseenter', () => {
	// 			this.autoplay.stop();
	// 		});

	// 		this.el.addEventListener('mouseleave', () => {
	// 			this.autoplay.start();
	// 		});

	// 		this.el.addEventListener('touchstart', () => {
	// 			this.autoplay.stop();
	// 		});

	// 		this.el.addEventListener('touchend', () => {
	// 			this.autoplay.start();
	// 		});
	// 	}
	// },
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

let slider2 = new Swiper('.slider2', {

	// autoplay: {
	// 	delay: 15000,
	// 	disableOnInteraction: true,
	// },
	observer: true,
	observeParents: true,
	spaceBetween: 20,
	autoplayDisableOnInteraction: true,
	// autoHeight: true,
	speed: 1500,
	centeredSlides: false,
	slidesPerView: 1,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.slider2-next',
		prevEl: '.slider2-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1.2,
			spaceBetween: 5
		},
		576: {
			slidesPerView: 1,
			spaceBetween: 25
		},
		1023: {
			slidesPerView: 1,
			spaceBetween: 25
		}
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	},
	// on: {
	// 	init() {
	// 		this.el.addEventListener('mouseenter', () => {
	// 			this.autoplay.stop();
	// 		});

	// 		this.el.addEventListener('mouseleave', () => {
	// 			this.autoplay.start();
	// 		});

	// 		this.el.addEventListener('touchstart', () => {
	// 			this.autoplay.stop();
	// 		});

	// 		this.el.addEventListener('touchend', () => {
	// 			this.autoplay.start();
	// 		});
	// 	}
	// },
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});