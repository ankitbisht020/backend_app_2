document.getElementById('createUserForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const imageurl = document.getElementById('imageurl').value;

    try {
        const response = await fetch('/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, imageurl })
        });

        const data = await response.json();

        if (data.success) {
            alert('User created successfully!'); // Show success alert
        } else {
            alert('Failed to create user.'); // Show failure alert
        }
    } catch (error) {
        alert('Error: Could not connect to the server.');
    }
});