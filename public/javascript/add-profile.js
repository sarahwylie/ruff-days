async function newFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('input[name="post-username"]').value;
    const breed = document.querySelector('input[name="breed"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            username, 
            breed
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