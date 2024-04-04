
export async function fetchPosts () {
    const response = await fetch("http://localhost:3000/posts")
    return response.json()
}

export async function fetchPostsById (id) {
    const response = await fetch(`http://localhost:3000/posts/${id}`)
    return response.json()
}

export async function createPost (data) {
    const response = await fetch(`http://localhost:3000/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return response.json()
}

export async function updatePost (updatedData) {
    const response = await fetch(`http://localhost:3000/posts/${updatedData.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedData)
    })
    return response.json()
}

export async function deletePost (id) {
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
    })
    return response.json()
}