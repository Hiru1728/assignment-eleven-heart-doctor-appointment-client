export const setAuthToken = (user) => {

    const currentUser = {
        email: user.email
    }
    // Get jwt token
    fetch('https://assignment-eleven-heart-doctor-appointment-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            localStorage.setItem('genius token', data.token);
        })
}