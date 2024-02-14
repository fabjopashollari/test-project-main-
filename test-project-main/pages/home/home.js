document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then (data => {
        const tableBody = document.getElementById('userTableData');
        data.forEach(user => {
            tableBody.innerHTML +=
            `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.website}</td>`
        })
    })
    })