document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.icon-tags-arrow_wrap').addEventListener('click', () => {
		document.querySelector('.singleNews__header').classList.toggle('active');
		document.querySelector('.singleNews__hashtags').classList.toggle('active');
	});
});