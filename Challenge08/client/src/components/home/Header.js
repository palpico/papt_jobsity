import React from 'react';
import {AppBar, Toolbar, Typography, Button, MenuItem, Menu, Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {ExpandMore} from '@material-ui/icons/';
import PropTypes from 'prop-types';
import {AppNameT} from '../../TextStore';
import SearchField from './Search';
import {Logo} from '../common'

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
            <Grid item xs={12} style={{height: "80px"}}>
                <AppBar position="static" style={{paddingLeft: 0, paddingRight: 0, backgroundColor:'#FFFFFF',height: "80px" }}>
                    <Toolbar style={{paddingLeft: 0, paddingRight: 0}}>
                        <Grid item style={{width: "15%"}}>
                            <Logo/>
                        </Grid>
                        <Grid item style={{width: "50%"}}>
                            <Title/>
                        </Grid>
                        <Grid item style={{width: "20%"}}>
                            <SearchField/>
                        </Grid>
                        <Grid item style={{width: "15%"}}>
                            <Profile/>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>
        )
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
                        <Typography variant="body1">
                            {username}
                        </Typography>
                        <ExpandMore/>
                        <img className="img-profile" src={require('../../images/profile.png')} alt=""/>
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