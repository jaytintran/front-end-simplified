import { React, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

function Users() {
	const { id } = useParams()

	const [userData, setUser] = useState([])

	async function fetchUser() {
		const { data } = await axios.get(
			`https://jsonplaceholder.typicode.com/users/${id}`
		)
		console.log(data)
		setUser(data)
	}

	useEffect(() => {
		fetchUser()
	}, [])

	return (
		<div>
			<br></br>
			<Link to="/home">Go Back</Link>
			<h1>Hello there!</h1>
			<p>ID: {id}</p>
			<p>Name: {userData.name}</p>
			<p>Email: {userData.email}</p>
			<p>Phone: {userData.phone}</p>
			<p>Username: {userData.username}</p>
		</div>
	)
}

export default Users
