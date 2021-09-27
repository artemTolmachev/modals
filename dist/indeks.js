

const buttons = document.querySelectorAll('.btn');
const Overlay = document.querySelector('.overlay ');
const modals = document.querySelectorAll('.modal');

buttons.forEach(el => {
	el.addEventListener('click', function(e){
		let btnData = e.currentTarget.getAttribute('data'); //получаем дата-атрибут кнопки

		

		document.querySelector(`[data-target="${btnData}"]`).classList.add('modal--visible');//показываем окно
		Overlay.classList.add('overlay--visible');//показываем оверлей
	})
})

Overlay.addEventListener('click', function(e){
	console.log(e.target);
	if(e.target == Overlay){
		Overlay.classList.remove('overlay--visible');
		
		modals.forEach(el => {
			el.classList.remove('modal--visible');
		})
	}
	
})

