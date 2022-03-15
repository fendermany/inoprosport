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
				blinkdots(item);
			}, 1000);
			const blinkDotsInterval2 = setInterval(() => {
				blinkdots2(item);
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

// Обрезаем длину текста в заголовках

const newsDescriptions = document.querySelectorAll('.news__descr');

if (newsDescriptions) {
	newsDescriptions.forEach(item => {
		item.innerText = item.innerText + '...';
	});
}

//\\//\\//\\\//\\ Перетаскивание вместо скролла //\\//\\//\\\//\\

const dragScroll = timeline => {
	// timeline - блок с горизонтальным скроллом
	timeline.onmousedown = () => {
		let pageX = 0;

		timeline.onmousemove = e => {
			if (pageX !== 0) {
				timeline.scrollLeft = timeline.scrollLeft + (pageX - e.pageX);
			}
			pageX = e.pageX;
		};

		// заканчиваем выполнение событий
		document.onmouseup = () => {
			timeline.onmousemove = null;
			timeline.onmouseup = null;
		};

		timeline.mouseout = () => {
			timeline.onmousemove = null;
			document.onmouseup = null;
		};

		// отменяем браузерный drag
		timeline.ondragstart = () => {
			return false;
		};
	};
};

const topbarList = document.querySelector('.categoryChoice__list');

if (topbarList) {
	dragScroll(topbarList);
}

// Действия с карточкой новости


const news = document.querySelectorAll('.fullnews');

news.forEach(item => {

	let newsTitle = item.querySelector('.news__title a'),
			newsDescr = item.querySelector('.news__descr'),
			newsComment = item.querySelector('.news__comments'),
			lines = +newsTitle.textContent.split('\n').length;

	console.log(lines);
	
	
	if (lines >= 5) {
		newsDescr.style.cssText = `-webkit-line-clamp: 2;`;
		newsComment.style.cssText = `right: 10px;`;
	}
	
});
