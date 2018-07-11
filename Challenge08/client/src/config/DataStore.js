import {errors} from './TextStore';

if (typeof(Storage) === "undefined") {
    console.log(errors.localStorage);
}

let storeSession=(data)=> {
    localStorage.setItem("jobsityBookshelfSession", JSON.stringify(data));
};

function getSession() {
    return JSON.parse(localStorage.getItem("jobsityBookshelfSession"));
}

function getToken() {
    return JSON.parse(localStorage.getItem("jobsityBookshelfSession")).token;
}


function destroySession() {
    localStorage.removeItem("jobsityBookshelfSession");
}

export {getSession, storeSession,destroySession, getToken}