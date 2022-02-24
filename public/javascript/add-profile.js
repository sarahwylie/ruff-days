async function newFormHandler(event) {
    event.preventDefault();

    const breed = document.querySelector('input[name="post-breed"]').value;
    const username = document.querySelector('input[name="username"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            breed, 
            username
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler)