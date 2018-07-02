import React from 'react';
import {AppBar, Toolbar, Typography, Button, MenuItem, Menu, Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {ExpandMore} from '@material-ui/icons/';
import PropTypes from 'prop-types';
import {AppNameT} from '../TextStore';
import SearchField from './Search';
// import Styles from '../styles/styles.css';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }
};

class Header extends React.Component {

    render() {
        return (
            <Grid item xs={12}>
                <AppBar position="static" style={{paddingLeft: 0, paddingRight: 0, backgroundColor:'#FFFFFF'}}>
                    <Toolbar style={{paddingLeft: 0, paddingRight: 0}}>
                        <Grid item xs={2}>
                            <Logo/>
                        </Grid>
                        <Grid item xs={4}>
                            <Title/>
                        </Grid>
                        <Grid item xs={4}>
                            <SearchField/>
                        </Grid>
                        <Grid item xs={2}>
                            <Profile/>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>
        )
    }
}

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img src={require('../images/logo.svg')} alt=""/>
                <img src={require('../images/type.svg')} alt=""/>
            </div>
        );
    }
}

class Title extends React.Component {
    render() {
        return (
            <Typography variant="title" style={{color:'#000000'}}>
                {AppNameT}
            </Typography>
        );
    }
}

class Profile extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        const username = 'Jacob Treml';
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);
        return (
            <div>
                <div>
                    <Button
                        onClick={this.handleMenu}
                    >
                        <Typography variant="title" color="inherit">
                            {username}
                        </Typography>
                        <ExpandMore/>
                        <img className="img-profile" src={require('../images/profile.png')} alt=""/>
                    </Button>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    </Menu>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);