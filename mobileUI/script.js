const imgs = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx) => {
	item.addEventListener('click', () => {
		removeImg()

		imgs[idx].classList.add('show')
		item.classList.add('active')

	})
})

function removeImg() {
	listItems.forEach(item => item.classList.remove('active'))
	imgs.forEach(img => img.classList.remove('show'))	
}
