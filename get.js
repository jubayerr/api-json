fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => displayUser(json))


// function displayUser(posts) {
//     const userNames = posts.map(user => user.title);
//     const showTitle = document.getElementById('show-title');
//     for (let i = 0; i < userNames.length; i++) {
//         const element = userNames[i];

//         showTitle.innerText = element;

//     }
// }

function displayUser(users) {
    const userNames = users.map(user => user.name);
    const ul = document.getElementById('users-container');
    for (let i = 0; i < userNames.length; i++) {
        const element = userNames[i];
        const li = document.createElement("li");
        li.innerText = element;
        ul.appendChild(li);
    }
}