import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {List, ListSubheader, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {Language} from '@material-ui/icons/';
import {MainMenuT, MainMenuI, YourBooksMenuT, YourBookMenuI} from '../TextStore';


class NavigationMenu extends React.Component {
    render() {
        return (
            <Fragment>
                <List st style={{backgroundColor: '#231F20'}}>
                    <ListSubheader style={{color: '#FFFFFF'}}>
                        {MainMenuT}
                    </ListSubheader>
                    {MainMenuI.map(item =>
                        <ListItem button>
                            <ListItemIcon style={{color: '#7FCCEA'}}>
                                <Language/>
                            </ListItemIcon>
                            <ListItemText disableTypography='true' style={{color: '#7FCCEA'}} primary={item[0]}/>
                        </ListItem>
                    )}
                </List>
                <List style={{backgroundColor: '#231F20'}}>
                    <ListSubheader style={{color: '#FFFFFF'}}>
                        {YourBooksMenuT}
                    </ListSubheader>
                    {YourBookMenuI.map(item =>
                        <ListItem button>
                            <ListItemIcon style={{color: '#7FCCEA'}}>
                                <Language/>
                            </ListItemIcon>
                            <ListItemText disableTypography='true' style={{color: '#7FCCEA'}} primary={item[0]}/>
                        </ListItem>
                    )}
                </List>
            </Fragment>

        )
    }
}

NavigationMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default (NavigationMenu);