'use strict';

// document.querySelector('.message').textContent = 'Correct Number! :D';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = '0';
const x = function() {
	console.log(23);
};
document.querySelector('.check').addEventListener('click', function() {
	console.log(document.querySelector('.guess').value);

	document.querySelector('.mesage').textContent = 'Correct Number!';
});
