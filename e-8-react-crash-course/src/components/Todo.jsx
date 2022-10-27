import React from "react"
import "./Todo.css"

function Todo({ title, description, onTodoDelete }) {
	return (
		<div className="todo">
			<h3 className="todo__title">{title}</h3>
			<p className="todo__description">{description}</p>
			<button className="todo__delete-btn" onClick={onTodoDelete}>
				Delete
			</button>
		</div>
	)
}

export default Todo
