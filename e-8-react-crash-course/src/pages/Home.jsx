import React, { useEffect, useState } from "react"
import axios from "axios"
import User from "../components/User"
import { Link } from "react-router-dom"

function Home() {
	const [users, setUsers] = useState([])

	async function fetchUsers() {
		const { data } = await axios.get(
			"https://jsonplaceholder.typicode.com/users"
		)
		console.log(data)
		setUsers(data)
	}
	// Load data immediately after the components get rendered
	useEffect(() => {
		setTimeout(() => {
			fetchUsers()
		}, 1000)
	}, [])

	return (
		<div>
			<h1>Home</h1>
			{users.length > 0 ? (
				users.map((user) => (
					<Link to={`users/${user.id}`} key={user.id}>
						<User
							id={user.id}
							email={user.email}
							username={user.username}
							phone={user.phone}
						/>
					</Link>
				))
			) : (
				<p>Loading...</p>
			)}
		</div>
	)
}

export default Home
