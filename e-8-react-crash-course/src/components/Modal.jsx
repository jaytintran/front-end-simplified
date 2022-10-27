import React from "react"
import "./Modal.css"

function Modal({ question, onTodoCancel, onTodoConfirm }) {
	return (
		<>
			<div className="modal">
				<p className="modal__title">{question}</p>
				<div className="modal__buttons">
					<button className="btn btn__cancel" onClick={onTodoCancel}>
						Cancel
					</button>
					<button className="btn" onClick={onTodoConfirm}>
						Confirm
					</button>
				</div>
			</div>
			<div className="backdrop" />
		</>
	)
}

export default Modal
