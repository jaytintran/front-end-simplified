const showRating = (number) => {
	let result = ""
	for (let i = 1; i <= Math.floor(number); i++) {
		result += "*"
		if (i !== Math.floor(number)) {
			result += " "
		}
	}
	if (!Number.isInteger(number)) {
		result += "."
	}
	return result
}

const showRating2 = (number) => {
	let answer = ""
	for (let i = 1; i <= Math.floor(number); i++) {
		answer += "*"
		if (i !== Math.floor(number)) {
			answer += " "
		}
	}
	if (!Number.isInteger(number)) {
		answer += "."
	}
	return answer
}

const sortLowToHigh = (numbers) => {
	return numbers.sort((a, b) => a - b)
}

const sortHighToLow = (numbers) => {
	return numbers.sort((a, b) => b - a)
}

// Async-Await: Filter out user using their ID from the API
async function postsByUser(userID) {
	try {
		const promise = await fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "GET",
			headers: {
				accept: "application/json",
			},
		})

		const data = await promise.json()
		const posts = data.filter((e) => e.userId === userID)
		return posts
	} catch (err) {
		console.log(err)
	}
}
async function postByUser(userID) {
	const result = await fetch("https://jsonplaceholder.typicode.com/posts")
}

// Async-Await: Filter out incompleted todos
async function filterTodo() {
	try {
		const promise = await fetch("https://jsonplaceholder.typicode.com/todos", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})

		const todos = await promise.json()
		const incompeletedTodos = todos.filter((todo) => !todo.completed)
		incompeletedTodos.slice(0, 6)
		console.log(incompeletedTodos)
	} catch (error) {
		console.log(error)
	}
}
