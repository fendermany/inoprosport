// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

document.addEventListener('DOMContentLoaded', () => {
	if (document.querySelector('.icon-tags-arrow_wrap')) {
		document
			.querySelector('.icon-tags-arrow_wrap')
			.addEventListener('click', () => {
				document
					.querySelector('.singleNews__header')
					.classList.toggle('active');
				document
					.querySelector('.singleNews__hashtags')
					.classList.toggle('active');
			});
	}
});

// Мигание точек

function blinkdots(item) {
	const dots1 = item.querySelector('.dots1 span');
	dots1.style.display = 'block';
	dots1.style.transition = 'all 1s fade-in';
	dots1.style.visibility = 'hidden';
	setTimeout(() => {
		dots1.style.visibility = 'visible';
	}, 500);
}

function blinkdots2(item) {
	const dots2 = item.querySelector('.dots2 span');
	dots2.style.display = 'block';
	dots2.style.transition = 'all 1s fade-in';
	dots2.style.visibility = 'visible';
	setTimeout(() => {
		dots2.style.visibility = 'hidden';
	}, 500);
}

// Кнопка "Показать еще" > "Загрузка"

const showMoreBtn = document.querySelectorAll('.showmore');

showMoreBtn.forEach(item => {
	item.addEventListener('click', e => {
		if (e.target) {
			item.querySelector('.showmore__text').innerText = 'Загрузка...';
			const blinkDotsInterval1 = setInterval(() => {
				blinkdots(item)
			}, 1000);
			const blinkDotsInterval2 = setInterval(() => {
				blinkdots2(item)
			}, 1000);

			// Затем после получения данных нужно сделать clearInterval, вернуть надпись "Показать ещё", скрыть точки.
			// Сейчас реализовано просто как отключение через 5 сек
			setTimeout(() => {
				clearInterval(blinkDotsInterval1);
				clearInterval(blinkDotsInterval2);
				item.querySelector('.showmore__text').innerText = 'Показать ещё';
				item.querySelector('.dots1 span').style.display = 'none';
				item.querySelector('.dots2 span').style.display = 'none';
			}, 5000);
		}
	});
});


// Действия с кнопкой в зависимости от количества элементов


