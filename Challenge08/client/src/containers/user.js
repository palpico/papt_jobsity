const axios = require('axios');

async function getUser() {
    try {
        const response = await axios.get('/user?ID=12345');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

async function userLogin(email,pass) {
    try {
        axios.post('/user/login', {
            email: email,
            password: pass
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    } catch (error) {
        console.error(error);
    }
}

userLogin("email@email.com","12345");
