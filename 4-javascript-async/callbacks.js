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

function createPost(post, callback) {
	setTimeout(() => {
		posts.push(post)
		callback()
	}, 2000)
}

createPost({ title: "Post 3rd", body: "This is post 3rd." }, getPosts)
