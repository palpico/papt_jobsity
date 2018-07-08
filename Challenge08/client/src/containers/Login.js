import React, {Component, Fragment} from 'react';
import {LoginForm} from '../components/user/index'
import axios from "axios";


class Login extends Component {

    constructor() {
        super();
        this.state = {
            repos: null,
            email: '',
            password: '',
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit =(e)=>{
        e.preventDefault();
        const email = e.target.elements.email.value;
        const pass = e.target.elements.password.value;
        console.log(this.state);
    };

    getUser = (e) => {
        e.preventDefault();
        const user = e.target.elements.username.value;
        if (user) {
            axios.get('/user/login')
                .then((res) => {
                    const repos = res;
                    this.setState({ repos });
                })
        } else return;
    };

    render() {
        return (
            <Fragment>
                <LoginForm  getUser={this.getUser} onSubmit={this.onSubmit}/>
                { this.state.repos ? <p>Response: { this.state.repos }</p> : <p>No response</p> }
            </Fragment>
    )
    }
}

export default Login;
