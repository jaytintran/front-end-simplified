import React from "react"

function User({ id, name, email, username, phone }) {
	return (
		<div key={id} style={{ border: "1px solid black" }}>
			<p>{name}</p>
			<p>{email}</p>
			<p>{username}</p>
			<p>{phone}</p>
		</div>
	)
}

export default User
