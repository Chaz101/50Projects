const container = document.querySelector('.container')
const btn = document.getElementById('btn')
const unsplashURL = 'https://source.unsplash.com/random/'
let rows = 10

populateImages()

btn.addEventListener('click', () => {
	rows === 10
	populateImages()	
})

function populateImages() {
	for(let i = 0; i < rows * 3; i++) {
		const img = document.createElement('img')
		img.src = `${unsplashURL}${getSize()}`
		container.appendChild(img)
	}
}

function getSize() {
	return `${getNum()}x${getNum()}`
}

function getNum() {
	return Math.floor(Math.random() * 10) + 300
}