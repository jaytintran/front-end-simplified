// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

const userList = document.querySelector(".user-list")

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    data.map(user => {
        userList.innerHTML += userHTML(user.id, user.name, user.email, user.phone, user.website)
    })
}

function showUserPost(id) {
    localStorage.setItem("id", id)
    window.location.href = `${window.location.origin}/user.html`
    console.log(id)
}

function userHTML(userId, username, userEmail, userTele, userURL) {
    return `
            <div class="user" onclick="showUserPost(${userId})">
            <div class="user-card">
                <div class="user-card__container">
                <h3>${username}</h3>
                    <p><b>Email:</b> ${userEmail}</p>
                    <p><b>Phone:</b> ${userTele}</p>
                    <p><b>Website:</b> <a href="https://website.website" target="_blank">${userURL}</a></p>
                </div>
            </div>
            </div>
    `
}

getUsers()