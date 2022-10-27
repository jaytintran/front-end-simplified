import React, { useState } from "react"

function Counter() {
	let [count, setCount] = useState(0)
	let [cart, setCart] = useState({ item: "apple", quantity: 0 })
	let [arr, setArr] = useState([])
	function increBy2() {
		setCount((prevState) => prevState + 1)
		setCount((prevState) => prevState + 1)
	}

	function decreBy2() {
		setCount((prevState) => prevState - 1)
		setCount((prevState) => prevState - 1)
	}

	function addApple() {
		// 1. Use a callback to get the previous value
		// 2. Spread out all the properties of the previous state
		// 3. Only change the property you need to change
		setCart((prevCart) => ({
			...prevCart,
			quantity: prevCart.quantity + 1,
		}))
		setArr((prevArr) => [...prevArr, "+"])
	}

	function removeApple() {
		setCart((prevCart) => ({
			...prevCart,
			quantity: prevCart.quantity - 1,
		}))

		setArr((prevArr) => [...prevArr, "+"])
	}
	return (
		<div>
			<button onClick={increBy2}>++</button>
			<button onClick={() => addApple()}>+</button>
			{cart.item}: {cart.quantity} "{arr}"
			<button onClick={() => removeApple()}>-</button>
			<button onClick={decreBy2}>--</button>
		</div>
	)
}

export default Counter
