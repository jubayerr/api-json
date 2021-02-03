document.getElementById('submit').addEventListener('click', function () {
    const title = document.getElementById('title').value;
    const bodyContent = document.getElementById('body-content').value;
    const post = { title: title, body: bodyContent }
    nowPostToServer(post)
    document.getElementById('show-title').innerText = post.title;
    document.getElementById('show-message').innerText = post.body;
    document.getElementById('title').value = '';
    document.getElementById('body-content').value = '';
})

function nowPostToServer(postInfo) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch(error => console.log(error))
}