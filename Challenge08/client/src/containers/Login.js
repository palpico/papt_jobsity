import React, {Component} from 'react';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import {Button, FormControl, InputAdornment, InputLabel, Input, IconButton, Typography} from "@material-ui/core";
import {userLogin,errors} from '../config';
import {Logo} from '../components/common';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isHidden: true,
            showPassword: false,
            authenticated: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.userStatus = this.userStatus.bind(this);
        this.authError = this.authError.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //change user status depending on correct login and redirect to home page
    userStatus() {
        this.setState({
            logged: !this.state.authenticated,
        });
        (this.state.logged ? this.props.history.push("/home") : this.props.history.push("/"))
    }

    authError() {
        this.setState({
            isHidden: false,
        });
    }

    //we pass user email and password and 2 functions that will execute on success login and on auth error respectively
    handleSubmit(e) {
        e.preventDefault();
        userLogin(this.state.email, this.state.password, this.userStatus, this.authError)
    };

    handleChange = prop => event => {
        this.setState({[prop]: event.target.value});
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState(state => ({showPassword: !state.showPassword}));
    };

    render() {
        return (
            <div>
                <Logo/>
                <form>
                    <div>
                        <FormControl>
                            <InputLabel>Email</InputLabel>
                            <Input
                                id="email"
                                name="email"
                                type="text"
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="adornment-password">Password</InputLabel>
                            <Input
                                id="adornment-password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            onMouseDown={this.handleMouseDownPassword}
                                        >
                                            {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                    <Button onClick={this.handleSubmit} color="primary">
                        Login
                    </Button>
                    {!this.state.isHidden && <Typography variant="title" style={{color: '#000000'}}>
                        {errors.authError}
                    </Typography>}
                </form>
            </div>
        )
    };
}

export default Login;