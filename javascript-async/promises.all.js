// Promise.all()
const promise1 = Promise.resolve("Hello World")
const promise2 = Promise.resolve(10)
const promise3 = new Promise((res, rej) => {
	setTimeout(res, 200, "Goodbye")
})
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
	(res) => {
		res.json()
	}
)

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
	console.log(values)
})
