import React, {Fragment} from 'react';
import {List, ListSubheader, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {Language} from '@material-ui/icons/';
import {mainMenuT, mainMenuI, yourBooksMenuT, yourBookMenuI} from '../../config';


class NavigationMenu extends React.Component {
    render() {
        return (
            <Fragment>
                <List style={{backgroundColor: '#231F20'}}>
                    <ListSubheader style={{color: '#FFFFFF'}}>
                        {mainMenuT}
                    </ListSubheader>
                    {mainMenuI.map(item =>
                        <ListItem button key={item[2]}>
                            <ListItemIcon style={{color: '#7FCCEA'}}>
                                <Language/>
                            </ListItemIcon>
                            <ListItemText disableTypography style={{color: '#7FCCEA'}} primary={item[0]}/>
                        </ListItem>
                    )}
                </List>
                <List style={{backgroundColor: '#231F20'}}>
                    <ListSubheader style={{color: '#FFFFFF'}}>
                        {yourBooksMenuT}
                    </ListSubheader>
                    {yourBookMenuI.map(item =>
                        <ListItem button key={item[2]}>
                            <ListItemIcon style={{color: '#7FCCEA'}}>
                                <Language/>
                            </ListItemIcon>
                            <ListItemText disableTypography style={{color: '#7FCCEA'}} primary={item[0]}/>
                        </ListItem>
                    )}
                </List>
            </Fragment>
        );
    };
}

export default (NavigationMenu);