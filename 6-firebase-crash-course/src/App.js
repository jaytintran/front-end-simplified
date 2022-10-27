import React from "react"
import "./App.css"
import { auth, db } from "./firebase/init"
import {
	collection,
	addDoc,
	getDoc,
	getDocs,
	doc,
	query,
	where,
	updateDoc,
	deleteDoc,
} from "firebase/firestore"
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth"

function App() {
	const [user, setUser] = React.useState({})
	const [loading, setLoading] = React.useState(true)

	function createPost() {
		const post = {
			title: "Become an Alpha Male",
			description: "Ace It",
			uid: user.uid,
		}

		addDoc(collection(db, "posts"), post)
	}

	async function getAllPosts() {
		const { docs } = await getDocs(collection(db, "posts"))
		const posts = docs.map((e) => ({ ...e.data(), id: e.id }))
		console.log(posts)
	}

	async function getPostById(id) {
		const postRef = doc(db, "posts", id)
		const postSnap = await getDoc(postRef)
		return postSnap.data()
	}

	async function getPostsByUid() {
		const postCollectionRef = await query(
			collection(db, "posts"),
			where("uid", "==", user.uid)
		)
		const { docs } = await getDocs(postCollectionRef)
		const posts = docs.map((e) => ({ ...e.data(), id: e.id }))

		console.log(posts)
	}

	async function updatePost() {
		const postRef = doc(db, "posts", "PyO0q87LY4nKN4U472CW")
		const post = await getPostById("PyO0q87LY4nKN4U472CW")
		console.log(post)
		const newPost = {
			...post,
			title: "Landing a $200k+ Tech Career",
		}
		console.log(newPost)
		updateDoc(postRef, newPost)
	}

	function deletePost() {
		const hardcodedID = "PyO0q87LY4nKN4U472CW"
		const postRef = doc(db, "posts", hardcodedID)
		deleteDoc(postRef)
	}

	React.useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setLoading(false)
			console.log(user)
			if (user) {
				setUser(user)
			}
		})
	}, [])

	function register() {
		console.log("registering")
		createUserWithEmailAndPassword(auth, "test@gmail.com", "password")
			.then((user) => {
				console.log(user)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	function login() {
		signInWithEmailAndPassword(auth, "test@gmail.com", "password")
			.then((data) => {
				setUser(data.user)
			})
			.catch((error) => console.log(error))
	}

	function logout() {
		signOut(auth)
		setUser({})
	}
	return (
		<div className="App">
			<button onClick={register}>Register</button>
			<button onClick={login}>Login</button>
			<button onClick={logout}>Logout</button>
			<h3>{loading ? "Loading..." : user.email}</h3>

			<button onClick={createPost}>Create Post</button>
			<button onClick={getAllPosts}>Get All Posts</button>
			<button onClick={getPostById}>Get Post by Id</button>
			<button onClick={getPostsByUid}>Get Post by User Id</button>
			<button onClick={updatePost}>Update Post</button>
			<button onClick={deletePost}>Delete Post</button>
		</div>
	)
}

export default App
