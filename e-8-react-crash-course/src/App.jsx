import { useState, useEffect } from "react"
import "./App.css"
import Todo from "./components/Todo"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Modal from "./components/Modal"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Users from "./pages/Users"

function App() {
	const [showModal, setShowModal] = useState(false)

	function onTodoDelete() {
		setShowModal(true)
	}
	function onTodoCancel() {
		setShowModal(false)
	}
	function onTodoConfirm() {
		setShowModal(false)
	}

	useEffect(() => {
		console.log("on mount")
	}, [])

	const mainPage = (
		<div className="container">
			<Header />

			<div className="todo__form">
				<input
					type="text"
					className="todo__input"
					onChange={(event) => {
						console.log(event.target.value)
					}}
				></input>
				<button className="todo__add" onClick={() => setShowModal(true)}>
					Add Todo
				</button>
			</div>

			<div className="todo__wrapper">
				<Todo
					onTodoDelete={onTodoDelete}
					title="Finish front-end simplified"
					description="Code along step-by-step"
				/>
				<Todo
					onTodoDelete={onTodoDelete}
					title="Finish interview section of FES"
					description="Code and understand the code"
				/>
				<Todo
					onTodoDelete={onTodoDelete}
					title="Land a $100k FE job"
					description="Resume, send, interview preps, ace it"
				/>
			</div>

			{showModal && (
				<Modal
					question="Confirm Delete?"
					onTodoCancel={onTodoCancel}
					onTodoConfirm={onTodoConfirm}
				/>
			)}
			{/* <Modal question="Are you sure to add?" /> */}
		</div>
	)
	return (
		<Router>
			<Nav />
			<div className="container">
				<Routes>
					<Route path="/" exact element={mainPage}></Route>
					<Route path="/home" exact element={<Home />}></Route>
					<Route path="/about" exact element={<About />}></Route>
					<Route path="/contact" exact element={<Contact />}></Route>
					<Route path="home/users/:id" exact element={<Users />}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
