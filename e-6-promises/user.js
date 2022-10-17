const postList = document.querySelector(".post-list")

const userId = localStorage.getItem("id")

function onSearch(event) {
    const id = event.target.value
    // postList.innerHTML = ``
    getUserPosts(id)
}

function postHTML(post) {
    return `
        <div class="post">
            <div class="post__title">
                ${post.title}
            </div>
            <p class="post__body">
                ${post.body}
            </p>
        </div>
    `
}

async function getUserPosts(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const data = await response.json()
    postList.innerHTML = data.map(post => postHTML(post)).join('')
}

getUserPosts(userId)

// console.log(fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`))
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
