// template_qoa3hdj
// service_5r6n8yk
// qyuU-UqOSE7i73Hjr
const scaleFactor = 1 / 20
function moveBackground(event) {
	const shapes = document.querySelectorAll(".shape")
	const x = event.clientX * scaleFactor
	const y = event.clientY * scaleFactor

	for (let i = 0; i < shapes.length; i++) {
		const isOdd = i % 2 !== 0
		const booolInt = isOdd ? -1 : 1
		shapes[i].style.transform = `
		translate(
			${x * booolInt}px, 
			${y * booolInt}px
		)`
	}
}

const toggleTheme = document.querySelector(".fa-adjust")
toggleTheme.addEventListener("click", () => {
	document.body.classList.toggle("dark-theme")
})

function contact(event) {
	const loading = document.querySelector(".modal__contact--loading")
	const success = document.querySelector(".modal__contact--success")
	loading.classList += " modal__contact--overlay-visible"

	event.preventDefault()
	emailjs
		.sendForm(
			"service_5r6n8yk",
			"template_qoa3hdj",
			event.target,
			"qyuU-UqOSE7i73Hjr"
		)
		.then(() => {
			loading.classList.remove("modal__contact--overlay-visible")
			success.classList += " modal__contact--overlay-visible"
		})
		.catch(() => {
			loading.classList.remove("modal__contact--overlay-visible")
			alert(
				"The email service is temporary unavailable. Please contact me directly."
			)
		})
}

let isModalOpen = false
function toggleModal() {
	if (isModalOpen) {
		isModalOpen = false
		return document.body.classList.remove("modal__open")
	} else {
		isModalOpen = true
		document.body.classList += " modal__open"
	}
}
