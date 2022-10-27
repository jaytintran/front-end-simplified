import React from "react"
import { Link } from "react-router-dom"

function Nav() {
	return (
		<nav className="container">
			<Link to="/">Main</Link>
			<Link to="/home">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/users/jaytin">Jay Tin</Link>
		</nav>
	)
}

export default Nav
