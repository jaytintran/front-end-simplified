const posts = [
	{ title: "Post 1st", body: "This is post 1st." },
	{ title: "Post 2nd", body: "This is post 2nd." },
]

function getPosts() {
	setTimeout(() => {
		let output = ""
		posts.forEach((post) => {
			return `<li>${post.title}</li>`
		})
		document.body.innerHTML = output
	}, 1000)
}

function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post)

			const error = false

			if (!error) {
				resolve()
			} else {
				reject("error smt went wrong")
			}
		}, 2000)
	})
}

// Async / Await
async function init() {
	await createPost({ title: "Post 3rd", body: "This is 3rd body." })

	getPosts()
}

init()

// Async / Await with Fetch
async function fetchUsers() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users")
	const data = await res.json()
	console.log(data)
}

fetchUsers()
