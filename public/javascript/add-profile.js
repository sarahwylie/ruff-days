
const multer = require('multer')
const upload = multer().single('image');

async function newFormHandler(event) {
    event.preventDefault();

    const dogname = document.querySelector('input[name="post-dogname"]').value;
    const breed = document.querySelector('input[name="breed"]').value;
    const storage = multer.memoryStorage();
    const upload = multer({ storage: storage });

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            dogname, 
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