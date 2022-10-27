### Overview

- Intro to React
- Reusable Components
- Props
- Event Handlers
- React Hooks
- Routing
- API Integration

### Intro to React
- React.js is a JavaScript library for building user interfaces. React.js is built on top of JavaScript.
- Why it is so important to learn? Why every FE job postings include React.js in order to apply?
  - Easier to use than vanilla JS
  - Maintainable for big projects
  - Scalable - ie. scale easier to a large user base
  - Most popular FE framework

- React.js uses something called JSX - basically it's HTML written in JavaScript, then will be converted into real HTML DOM elements via the React DOM rendering process.
- JSX makes it easier to understand HTML inside JavaScript, it enables JS to write reusable HTML components.

### Reusable Components
- Why do we write them? Cuz they help reduce code duplication, and boost the declarative aspect of our code.
- There're 2 parts to components:
  - Creating a component
  - Using a component

**Creating a Component**
1. Create a new file ends with .jsx
2. Inside this file import React and create a function
3. Inside this function return some JSX
4. Export the function

**Using a Component**
1. Import the file inside the main App.jsx
2. Use the component by the syntax <YourComponent />

- This is why companies love using React.js, they can render the same component like posts by user, multiple time without duplicate the code, just add in the props and the post component will render them with the same blueprint but different info inside.

### Props
- What are props? Why we use them? Cuz props make components dynamic.
- Components help we use the same code, but with the exact same data.
- Props infiltrate into the component and update everything with different set of data.
- They help us control what the component does
- There're 2 parts to props:
  - Creating a prop
  - Using a prop
  
**Creating a prop**
1. Pass in the property name and value inside the component's bracket
`<Component propName="propValue" />`
2. Pass in the "props" keyword inside the function which creates the component
`function Todo(props) {}`

**Using a prop**
1. Accept props in parameter
`function Todo({propName}) {}`
2. Use props
`function Todo({propName} {
  return <div>{propName}</div>
}`

### Event Handlers
- What is event handlers? They are just code that'll be executed when an event occurs.
- The most important ones are: onClick & onChange

**How to Use?**
- You pass a callback function inside the component you want

### React Hooks
- This is the hardest concept of React.js. There're multiple React Hooks, but the most important ones are:
  - useState
  - useEffect

#### useState
**Definition**
- It's basically how we define variables in React. It's just a fancier way of defining variables.
- Why it is so powerful? Because whenever its variable changes, it re-renders your page automatically.

**Conditional Rendering**
- It's rendering a component when a certain condition is met.

**How to Use Hook**
- Numbers: const [num, setNum] = useState(0) | setNum(prev => prev + 1) | setNum(10)
- Boolean: const [boo, setBoo] = useState(true) | setBoo(prev => !prev) | setBoo(false)
- Strings: const [str, setStr] = useState("Hello") | setStr(prev => prev + " World") | setStr("Hello World")
- Objects: const [obj, setObj] = useState({item: "smt", quantity: 0}) | setObj(preObj => ({...prevObj, quantity: prevObj.quantity + 1})) | setObj(newObj)
- Arrays: const [arr, setArr] = useState([]) | setArr(preArr => [...prevArr, "smt"]) | setArr(newArr)

```js
const [state, setState] = useState(false)
// state: state variable
// setState: a funtion that changes the state
// useState(false): default value of this state

<button onClick={() => setState(true)}>
```

**Emitting Events**
- It's a way of passing props (in this case these props are functions) from the parent elements to the child elements. And whenever that child element interact with this props, notify the parent as a whole. Then when we do something to the children, it'll emit the interaction to the parent.

```js
function Parent() {
  function clicked() {
    console.log("Notified Parent")
  }

  return (
    <Child clicked={clicked}>
  )
}
```

```js
function Child({ clicked }) {
  return (
    <button onClick={clicked}>Click</button>
  )
}
```

#### useEffect
- It's about do something as soon as the components mount. Usually it gonna be put after the useState(). It gonna run after the components are loaded.
- It accepts 2 arguments, a callback and a dependency list.
- Basically, useEffect is what we'll do after on mount or and other specific component was rendered

```js
useEffect(() => {
  console.log("ONLY on mount")
}, [])

useEffect(() => {
  console.log("on mount AND on ${showModal} change")
}, [showModal])

useEffect(() => {
  console.log("on every render")
})
```

### Routing
- Routing lets you navigate around your website
- Starting with install react-router-dom, then import {BrowserRouter, Routes, Route, Link}, wrap everything inside the BrowserRouter and Routes
- Each Route contain a path and the element you want to display
- Then when you create a nav, make every a link element into Link and add a "to" param points to the route's path you want
- Dynamic route like "https://instagram.com/userabc" also exists, in every Route param "path" add something like this path="/users/:userid"
- Then that dynamic Route will link to the Users component which has useParams() control to get tthat :userid, with it you render or do smth else.

```js
import React from "react"
import { useParams } from "react-router-dom"

function Users() {
	const { username } = useParams()
	return (
		<div>
			<h1>Hello there!</h1>
			<p>user: {username}</p>
		</div>
	)
}

export default Users
```

```js
		<Router>
			<Nav />
			<div className="container">
				<Routes>
					<Route path="/" exact element={mainPage}></Route>
					<Route path="/home" exact element={<Home />}></Route>
					<Route path="/about" exact element={<About />}></Route>
					<Route path="/contact" exact element={<Contact />}></Route>
					<Route path="/users/:username" exact element={<Users />}></Route>
				</Routes>
			</div>
		</Router>
```

```js
		<nav className="container">
			<Link to="/">Main</Link>
			<Link to="/home">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/users/jaytin">Jay Tin</Link>
		</nav>
```

### API Integration
- How do you retrieve data from an API in React?
  - fetch (the JavaScript ES6+ way)
  - axios (the React.js way)

- Axios is so much easier to use, and it's popular in the industry

```js
import React, { useEffect } from "react"
import axios from "axios"

function Home() {
  async function fetchUsers() {
    const users = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    )
    console.log(users)
  }
  
  // Load data immediately after the components get rendered
	useEffect(() => {
		fetchUsers()
	}, [])
	return <h1>Home</h1>
}

export default Home
```