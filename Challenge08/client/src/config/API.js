import {storeSession,getToken} from "./DataStore";
import axios from "axios/index";

const loginUrl = "/user/login";
const bookUrl = "/book";
const signupUrl = "/user/signup";


function userLogin(email, pass, callback,errorCall) {
    axios.post(loginUrl,
        {
            "email": email,
            "password": pass
        },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(function (response) {
            if (response.status === 200) {
                storeSession(response.data);
                callback();
            }
        })
        .catch(function (error) {
            if (error.message === 'Request failed with status code 401') {
                errorCall();
            }else{
                console.log(error);
            }
        });
}

function createBook(data) {
    axios.post(bookUrl, JSON.stringify(data)
        ,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${getToken()}`
            }
        })
        .then(function (response) {
            if (response.status === 200) {
                // console.log(response);
            }
        })
        .catch(function (error) {
            if (error.message === 'Request failed with status code 401') {
                console.log(error);
            }else{
                console.log(error);
            }
        });
}

function getBook(callback) {
    axios.get(bookUrl, {
            headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${getToken()}`
                }
        }
    )
        .then(function (response) {
            if (response.status === 200) {
                let myBooks = response.data.books;
                callback(myBooks);
            }
        })
        .catch(function (error) {
            console.log(error);
        })
}


function createUser(data) {
    axios.post(signupUrl, JSON.stringify(data)
        ,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(function (response) {
            if (response.status === 200) {
                console.log(response);
            }
        })
        .catch(function (error) {
            if (error.message === 'Request failed with status code 401') {
                console.log(error);
            }else{
                console.log(error);
            }
        });
}


export {userLogin, getBook,createUser,createBook};
