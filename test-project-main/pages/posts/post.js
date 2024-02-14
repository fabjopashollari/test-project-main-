document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const postsRow = document.getElementById('posts');
        data.forEach(post => {
            const cardCol = document.createElement('div');
            cardCol.classList.add('col-md-4', 'mb-4'); 
            const card = document.createElement('div');
            card.classList.add('card');
            const cardId = `post-${post.id}`; // Create ID for the card
            card.setAttribute('id', cardId); // Set ID for the card element
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.body}</p>
                    <button class="btn btn-primary" onclick="seeDetails(${post.id})">See Details</button>
                    <button class="btn btn-danger" onclick="deletePost('${cardId}', ${post.id})">Delete</button>
                </div>`;
            cardCol.appendChild(card);
            postsRow.appendChild(cardCol);
        });
    });
});

function seeDetails(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(data => {
        const postDetails = JSON.stringify(data);
        alert(`Details for post with ID ${postId}: ${postDetails}`);
    })
    .catch(error => {
        alert(`There was an error during fetching the post: ${error}`);
    });
}

function deletePost(cardId, postId) {
    // Remove the card from the UI
    const cardElement = document.getElementById(cardId);
    if (cardElement) {
        cardElement.remove();
    }
    // Optionally, you can send a DELETE request to the server to delete the post
    // This API does not support actual deletion, so it's just for demonstration
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log(`Post with ID ${postId} deleted`);
    })
    .catch(error => {
        console.error(`Error deleting post with ID ${postId}:`, error);
    });
}
