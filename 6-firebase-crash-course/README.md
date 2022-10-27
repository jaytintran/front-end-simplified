### Definition
- Firebase is a backend platform for building Web, Android and IOS applications. It offers real time database, different APIs, multiple authentication types and hosting platform. This is an introductory tutorial, which covers the basics of the Firebase platform and explains how to deal with its various components and sub-components.
- Firebase can power your app's backend, including data storage, user authentication, static hosting, and more. Focus on creating extraordinary user experiences. It'll take care of the rest. Build cross-platform native mobile and web apps with Android, iOS, and JavaScript SDKs. You can also connect Firebase to your existing backend using the server-side libraries or its REST API.

### Firebase Features
- Real-time Database − Firebase supports JSON data and all users connected to it receive live updates after every change.
- Authentication − We can use anonymous, password or different social authentications.
- Hosting − The applications can be deployed over secured connection to Firebase servers.

### Firebase vs. Firestore
- Firebase is Google’s app development platform. It includes a vast range of products and features that allow developers to create apps fast without managing the infrastructure.
- Firestore is one of the two databases available at Firebase. It’s a new and improved version of the Real-Time Database, and its capabilities include real-time updates, offline synchronization, scalability, and multi-region deployment.


### Firestore

**What does it let us do?**
- It enables us to implement CRUD in our applications (create, read, update, delete). We call this CRUD in the world of software, it is a must to create a full-blown application. Example for create we have Facebook sign-up process (create new user data for our database), we access the profile of other people (read a user data from the database), we change the passport of our account (update the data in database), we can also delete our posts (delete them from the database).

**How to CREATE**
```js
import { collection, addDoc } from "firebase/firestore"

async function createPost() {
    const post = {
        title: "Land a $200k SE career"
        description: "Finish FES"
    }
    await addDoc(collection(db, "post"), post)
}
```

**Different READ Methods**
- Read all posts
- Read a single post by id
- Read post by query (e.g. only posts by a specific user)

```js
import { collection, getDocs } from "firebase/firestore"

async function getAllPosts() {
    const data = await getDocs(collection(db, "posts"))
    const posts = data.docs.map(doc => ({...doc.data(), id: doc.id}))
}
```

```js
import { collection, getDocs } from "firebase/firestore"

async function getPostsById() {
    const docRef = doc(db, "posts", id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exist()) {
        const posts = docSnap.data()
    }
}
```

```js
import { query, collection, where, getDocs } from "firebase/firestore"

async function getPostsByUid(Uid) {
    const postCollectionByUidRef = await query(
        collection(db, "posts"),
        where("uid", "==", Uid)
    )
    const data = await getDocs(postCollectionByUidRef)
    const posts = data.docs.map(doc => ({...doc.data(), id: doc.id}))
}
```

**How to UPDATE?**

```js
import { doc, updateDoc } from "firebase/firestore"

async function updatePost(id) {
    const docRef = doc(db, "posts", id)
    const newPost = {
        title: "Something",
        description: "Another Thing"
    }
    await updateDoc(docRef, newPost)
}
```

**How to DELETE**

```js
import { doc, deleteDoc } from "firebase/firestore"

async fuction deletePost(Id) {
    const docRef = doc(db, "posts", Id)
    await deleteDoc(docRef)
}
```
