import React from 'react';
import {Typography, Button, MenuItem, Menu} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {ExpandMore} from '@material-ui/icons/';
import PropTypes from 'prop-types';
import {destroySession} from '../../config';
import {Route} from 'react-router-dom';

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

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: true,
            anchorEl: null,
        };
    }

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
                        <Route render={({history}) => (
                            <MenuItem onClick={() => {
                                history.push('/');
                                destroySession();
                            }}>
                                LogOut
                            </MenuItem>

                        )}/>
                    </Menu>
                </div>
            </div>
        );
    };
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);